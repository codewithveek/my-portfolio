"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import {
  CONTACT_EMAIL_MAX,
  CONTACT_MESSAGE_MAX,
  CONTACT_NAME_MAX,
  contactSubmissionSchema,
} from "@/lib/validation/contact";
import { slideUpVariant } from "./motionVariants";

export default function BrutalContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const socials = [
    {
      label: "Github",
      href: "https://github.com/codewithveek",
    },
    {
      label: "Linkedin",
      href: "https://linkedin.com/in/lucky-victory-success",
    },
    {
      label: "X",
      href: "https://x.com/codewithveek",
    },
  ];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);

    // Capture before any await — React nullifies currentTarget after the handler yields
    const form = event.currentTarget;

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    const parsedPayload = contactSubmissionSchema.safeParse(payload);

    if (!parsedPayload.success) {
      setStatus({
        type: "error",
        message:
          parsedPayload.error.issues[0]?.message || "Please fix form errors.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsedPayload.data),
      });

      const rawResponse = await response.text();
      let result: {
        error?: string;
        message?: string;
      } = {};

      if (rawResponse) {
        try {
          result = JSON.parse(rawResponse) as {
            error?: string;
            message?: string;
          };
        } catch {
          result = {};
        }
      }

      if (!response.ok) {
        setStatus({
          type: "error",
          message:
            result.error ||
            "Unable to send message right now. Please try again shortly.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: result.message || "Message sent successfully.",
      });

      form.reset();
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="border-[3px] border-border bg-card p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
      variants={slideUpVariant}
      whileInView="show"
      initial="hidden"
      viewport={{ once: true, amount: 0.35 }}
    >
      <h2 className="text-3xl font-black uppercase mb-2">Let&apos;s Build</h2>
      <p className="font-semibold mb-4">
        Open to full-time roles, freelance projects, and open-source
        collaboration.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3" noValidate>
        <div className="grid gap-3 md:grid-cols-2">
          <label className="block">
            <span className="text-xs font-black uppercase mb-1 block">
              Name
            </span>
            <input
              name="name"
              type="text"
              maxLength={CONTACT_NAME_MAX}
              required
              className="w-full border-[3px] border-border bg-background px-3 py-2 text-sm font-semibold outline-none focus:translate-x-[2px] focus:-translate-y-[2px] transition-transform"
            />
          </label>

          <label className="block">
            <span className="text-xs font-black uppercase mb-1 block">
              Email
            </span>
            <input
              name="email"
              type="email"
              maxLength={CONTACT_EMAIL_MAX}
              required
              className="w-full border-[3px] border-border bg-background px-3 py-2 text-sm font-semibold outline-none focus:translate-x-[2px] focus:-translate-y-[2px] transition-transform"
            />
          </label>
        </div>

        <label className="block">
          <span className="text-xs font-black uppercase mb-1 block">
            Message
          </span>
          <textarea
            name="message"
            rows={5}
            maxLength={CONTACT_MESSAGE_MAX}
            required
            className="w-full border-[3px] border-border bg-background px-3 py-2 text-sm font-semibold outline-none focus:translate-x-[2px] focus:-translate-y-[2px] transition-transform resize-y"
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-block border-[3px] border-border px-4 py-2 font-black uppercase hover:translate-x-[2px] hover:-translate-y-[2px] transition-transform brutal-wipe disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-x-0 disabled:translate-y-0"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p
            className={`text-xs  font-black uppercase ${
              status.type === "success" ? "text-green-700" : "text-red-600"
            }`}
            role="status"
            aria-live="polite"
          >
            {status.message}
          </p>
        )}
      </form>

      <div className="mt-5 border-t-[3px] border-border pt-4">
        <p className="text-xs font-black uppercase mb-2">Socials</p>
        <div className="flex flex-wrap gap-4 text-sm font-black uppercase">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[3px] underline-offset-4 hover:translate-x-[1px] transition-transform"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
