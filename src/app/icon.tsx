import rgb from "lib/rgb";
import theme from "lib/theme";
import { ImageResponse } from "next/og";
import { resolveAtom } from "themizer";

export const contentType = "image/png";
export const size = { width: 32, height: 32 };

export default function Icon() {
  return new ImageResponse(
    (
      <span
        style={{
          width: "100%",
          height: "100%",
          fontSize: resolveAtom(theme.aliases.typography.lg),
          fontWeight: resolveAtom(theme.tokens.font.weights.bold),
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            letterSpacing: "-.236em",
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
      </span>
    ),
    { ...size },
  );
}
