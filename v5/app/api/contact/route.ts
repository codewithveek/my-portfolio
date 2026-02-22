import { NextRequest, NextResponse } from "next/server";
import { contactMessages } from "@/db/schema";
import { getDb } from "@/db";
import { applyInMemoryRateLimit } from "@/lib/rate-limit";
import { contactSubmissionSchema } from "@/lib/validation/contact";

const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_IP_ADDRESS_LENGTH = 64;
const MAX_USER_AGENT_LENGTH = 512;

function getClientIdentifier(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const cfConnectingIp = request.headers.get("cf-connecting-ip");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  if (cfConnectingIp) {
    return cfConnectingIp;
  }

  return realIp || "unknown";
}

function normalizeClientMetadata(value: string | null, maxLength: number) {
  if (!value) {
    return "unknown";
  }

  return value.trim().slice(0, maxLength) || "unknown";
}

export async function POST(request: NextRequest) {
  const clientId = getClientIdentifier(request);
  const ipAddress = normalizeClientMetadata(clientId, MAX_IP_ADDRESS_LENGTH);
  const userAgent = normalizeClientMetadata(
    request.headers.get("user-agent"),
    MAX_USER_AGENT_LENGTH
  );
  const rateLimit = applyInMemoryRateLimit(
    `contact:${clientId}`,
    RATE_LIMIT_MAX_REQUESTS,
    RATE_LIMIT_WINDOW_MS
  );

  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        error: "Too many requests. Please wait and try again.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimit.retryAfterSeconds),
          "X-RateLimit-Remaining": String(rateLimit.remaining),
        },
      }
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        error: "Invalid request payload.",
      },
      { status: 400 }
    );
  }

  const parsedBody = contactSubmissionSchema.safeParse(body);

  if (!parsedBody.success) {
    return NextResponse.json(
      {
        error: parsedBody.error.issues[0]?.message || "Invalid form data.",
      },
      { status: 400 }
    );
  }

  const { name, email, message } = parsedBody.data;

  try {
    const db = getDb();

    await db.insert(contactMessages).values({
      name,
      email,
      ipAddress,
      userAgent,
      message,
    });
  } catch (error) {
    console.error("Failed to persist contact submission", error);

    return NextResponse.json(
      {
        error: "Message could not be saved. Please try again shortly.",
      },
      {
        status: 503,
        headers: {
          "X-RateLimit-Remaining": String(rateLimit.remaining),
        },
      }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "Message received successfully.",
    },
    {
      status: 201,
      headers: {
        "X-RateLimit-Remaining": String(rateLimit.remaining),
      },
    }
  );
}
