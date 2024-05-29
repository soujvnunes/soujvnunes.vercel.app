import { ImageResponse } from "next/og";

export const contentType = "image/png";
export const alt = process.env.NEXT_PUBLIC_META_DESCRIPTION;
export const size = {
  width: 1200,
  height: 630,
};

export default function Image() {
  return new ImageResponse(
    (
      <div tw="flex flex-col justify-center px-10 w-full h-full bg-[#100A01] text-[#FFFBF4]">
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
