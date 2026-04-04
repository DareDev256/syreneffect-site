import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "THE SYREN EFFECT — Twitch Streamer & Content Creator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  // Load the photo as base64
  const photoPath = join(process.cwd(), "public", "photos", "Syren2.jpeg");
  const photoBuffer = await readFile(photoPath);
  const photoBase64 = `data:image/jpeg;base64,${photoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background photo */}
        <img
          src={photoBase64}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />

        {/* Dark gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(135deg, rgba(5,5,16,0.85) 0%, rgba(5,5,16,0.5) 50%, rgba(5,5,16,0.75) 100%)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 80px",
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "white",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>THE SYREN</span>
            <span
              style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4, #ec4899)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              EFFECT
            </span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 24,
              color: "#94a3b8",
              marginTop: 24,
              display: "flex",
              gap: 16,
              alignItems: "center",
            }}
          >
            <span>Twitch Streamer</span>
            <span style={{ color: "#7c3aed" }}>|</span>
            <span>Content Creator</span>
            <span style={{ color: "#7c3aed" }}>|</span>
            <span>Digital Influencer</span>
          </div>

          {/* Handle */}
          <div
            style={{
              fontSize: 20,
              color: "#64748b",
              marginTop: 12,
              display: "flex",
            }}
          >
            @syreneffect
          </div>

          {/* Schedule badge */}
          <div
            style={{
              marginTop: 32,
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "rgba(15, 15, 35, 0.8)",
              border: "1px solid rgba(124, 58, 237, 0.3)",
              borderRadius: 999,
              padding: "10px 24px",
              width: "fit-content",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#06b6d4",
                display: "flex",
              }}
            />
            <span
              style={{
                fontSize: 14,
                color: "#e2e8f0",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Live Wed / Thu / Sun
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
