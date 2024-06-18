import "./global.css";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    <html lang="en" className="bg-background text-foreground h-full">
      <body className="mx-4 mt-8 h-full max-w-xl antialiased lg:mx-auto">
        <main className="mt-6 flex h-full min-w-0 flex-auto flex-col px-2 md:px-0">
          {children}
          <Analytics />
          <SpeedInsights />
          <div className="absolute inset-0 -z-10">
            <div className="from-accent/20 to-main/20 h-full w-full bg-gradient-to-r">
              <div className="from-background h-full w-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] lg:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]" />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
