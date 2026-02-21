import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Veek portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f4f4f0",
          color: "#000",
          fontFamily: "Arial, sans-serif",
          padding: "56px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "28px",
            border: "8px solid #000",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "8px solid #000",
            background: "#fff",
            padding: "42px",
            boxShadow: "16px 16px 0 #000",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            <div
              style={{
                fontSize: 28,
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Veek · Full Stack Portfolio
            </div>
            <div
              style={{
                fontSize: 84,
                lineHeight: 1,
                fontWeight: 900,
                textTransform: "uppercase",
              }}
            >
              Build Fast.
            </div>
            <div
              style={{
                fontSize: 84,
                lineHeight: 1,
                fontWeight: 900,
                textTransform: "uppercase",
              }}
            >
              Ship Hard.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: 30,
                fontWeight: 700,
              }}
            >
              React · Next.js · TypeScript · Node.js
            </div>
            <div
              style={{
                fontSize: 30,
                fontWeight: 900,
                padding: "10px 16px",
                border: "5px solid #000",
              }}
            >
              VEEK.ME
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
