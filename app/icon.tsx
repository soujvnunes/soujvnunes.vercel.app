import { ImageResponse } from "next/og";

export const contentType = "image/png";
export const size = { width: 32, height: 32 };

export default function icon() {
  return new ImageResponse(
    (
      <span
        style={{
          width: "100%",
          height: "100%",
          fontSize: 24,
          fontWeight: 900,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            letterSpacing: "-.236em",
            color: "#6366F1",
          }}
        >
          j
        </span>
        <span
          style={{
            color: "#F59E0B",
          }}
        >
          v
        </span>
      </span>
    ),
    {
      ...size,
    },
  );
}
