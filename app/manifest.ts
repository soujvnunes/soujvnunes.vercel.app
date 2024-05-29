export default function manifest() {
  return {
    name: process.env.NEXT_PUBLIC_META_TITLE,
    short_name: process.env.NEXT_PUBLIC_META_OG_TITLE,
    description: process.env.NEXT_PUBLIC_META_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#100A01",
    theme_color: "#100A01",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
