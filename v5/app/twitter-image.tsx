import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Veek portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f4f4f0",
          color: "#000",
          fontFamily: "Arial, sans-serif",
          padding: "44px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "8px solid #000",
            background: "#fff",
            boxShadow: "14px 14px 0 #000",
            padding: "36px",
          }}
        >
          <div
            style={{
              fontSize: 26,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontWeight: 900,
            }}
          >
            Lucky Victory Success · Full-Stack Engineer
          </div>

          <div
            style={{
              fontSize: 96,
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 0.95,
            }}
          >
            Building
            <br />
            For Startups
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontSize: 30, fontWeight: 700 }}>
              Fintech · Real Estate · Developer SDKs
            </div>
            <div
              style={{
                border: "5px solid #000",
                padding: "10px 16px",
                fontSize: 28,
                fontWeight: 900,
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
