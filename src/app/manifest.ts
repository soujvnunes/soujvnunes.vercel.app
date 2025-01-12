import rgb from "lib/rgb";
import theme from "lib/theme";
import { resolveAtom } from "themizer";

export default function manifest() {
  return {
    name: process.env.NEXT_PUBLIC_META_TITLE,
    short_name: process.env.NEXT_PUBLIC_META_OG_TITLE,
    description: process.env.NEXT_PUBLIC_META_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: `rgb(${resolveAtom(theme.tokens.palette.amber[950])})`,
    theme_color: `rgb(${resolveAtom(theme.tokens.palette.amber[950])})`,
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
