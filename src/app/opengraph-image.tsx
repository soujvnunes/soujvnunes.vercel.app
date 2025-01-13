import theme from "lib/theme";
import { ImageResponse } from "next/og";
import { resolveAtom } from "themizer";

export const runtime = "edge";
export const contentType = "image/png";
export const alt = process.env.NEXT_PUBLIC_META_DESCRIPTION;
export const size = {
  width: 1200,
  height: 630,
};

export default function openGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: resolveAtom(theme.tokens.units[40]),
          paddingRight: resolveAtom(theme.tokens.units[40]),
          width: "100%",
          height: "100%",
          color: `rgb(${resolveAtom(theme.tokens.palette.amber[50])})`,
          backgroundImage: `linear-gradient(to bottom, rgb(${resolveAtom(theme.tokens.palette.amber[900])}), rgb(${resolveAtom(theme.tokens.palette.amber[950])}))`,
        }}
      >
        <strong style={{ fontSize: resolveAtom(theme.tokens.units[64]) }}>
          sou
          <span
            style={{
              letterSpacing: "-.2em",
              color: `rgb(${resolveAtom(theme.tokens.palette.indigo[500])})`,
            }}
          >
            j
          </span>
          <span
            style={{
              color: `rgb(${resolveAtom(theme.tokens.palette.amber[500])})`,
            }}
          >
            v
          </span>
          nunes
        </strong>
        <p
          style={{
            fontSize: resolveAtom(theme.tokens.units[40]),
            color: `rgb(${resolveAtom(theme.tokens.palette.amber[50])}/${resolveAtom(theme.tokens.alphas.tertiary)})`,
          }}
        >
          Design Engineer
        </p>
      </div>
    ),
    { ...size },
  );
}
