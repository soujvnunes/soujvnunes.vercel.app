import { ImageResponse } from "next/og";

export const contentType = "image/png";
export const size = { width: 32, height: 32 };

export default function Icon() {
  return new ImageResponse(
    (
      <div
        tw="flex flex-col justify-center px-10 w-full h-full text-[#FFFBF4]"
        style={{
          backgroundImage: "linear-gradient(to bottom, #1F1402, #100A01)",
        }}
      >
        <strong tw="text-[64px]">
          sou
          <span
            style={{
              fontWeight: "medium",
            }}
          >
            <span
              style={{
                letterSpacing: "-.2em",
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
          nunes
        </strong>
        <p tw="text-[40px] text-[#FFFBF4]/60">
          Frontend Engineer and Product Designer
        </p>
      </div>
    ),
    {
      ...size,
    },
  );
}
