import theme from "lib/theme";
import { ImageResponse } from "next/og";

// TODO: remove it
export const runtime = "edge";
export const contentType = "image/png";
export const alt = process.env.NEXT_PUBLIC_META_DESCRIPTION;
export const size = {
  width: 1200,
  height: 630,
};

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: theme.tokens.units[40],
          paddingRight: theme.tokens.units[40],
          width: "100%",
          height: "100%",
          color: `rgb(${theme.tokens.palette.amber[50]})`,
          backgroundImage: `linear-gradient(to bottom, rgb(${theme.tokens.palette.amber[900]}), rgb(${theme.tokens.palette.amber[950]}))`,
        }}
      >
        <strong style={{ fontSize: theme.tokens.units[64] }}>
          sou
          <span
            style={{
              letterSpacing: "-.2em",
              color: `rgb(${theme.tokens.palette.indigo[500]})`,
            }}
          >
            j
          </span>
          <span
            style={{
              color: `rgb(${theme.tokens.palette.amber[500]})`,
            }}
          >
            v
          </span>
          nunes
        </strong>
        <p
          style={{
            fontSize: theme.tokens.units[40],
            color: `rgb(${theme.tokens.palette.amber[50]}/${theme.tokens.alphas.tertiary})`,
          }}
        >
          Design Engineer
        </p>
      </div>
    ),
    { ...size },
  );
}
