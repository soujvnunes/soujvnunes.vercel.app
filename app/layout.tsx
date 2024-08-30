import "./global.css";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "components/Footer";
import Background from "components/Background";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#100A01" },
    { media: "(prefers-color-scheme: light)", color: "#FFFBF4" },
  ],
};
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  description: process.env.NEXT_PUBLIC_META_DESCRIPTION!,
  title: {
    default: process.env.NEXT_PUBLIC_META_TITLE!,
    template: `%s | ${process.env.NEXT_PUBLIC_META_TITLE!}`,
  },
  openGraph: {
    title: process.env.NEXT_PUBLIC_META_OG_TITLE!,
    description: process.env.NEXT_PUBLIC_META_OG_DESCRIPTION!,
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: process.env.NEXT_PUBLIC_META_TITLE!,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html
      lang="en"
      className="TypographyPrimary h-full bg-amber-950 antialiased"
    >
      <body className="flex h-full flex-col">
        <main className="m-auto">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <Background />
      </body>
    </html>
  );
}
