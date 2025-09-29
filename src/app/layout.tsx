import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import { BackgroundLayer } from "@/components/background-layer"; // ⬅️ new import

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  icons: {
    icon: '/public/spider-4-svgrepo-com.svg',
  },
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og_main.png",
        alt: `${DATA.name} Open Graph Image`,
      },
    ],
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
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
    images: [
      {
        url: "/og_main.png",
        alt: `${DATA.name} Twitter Card Image`,
      },
    ],
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          {/* Fullscreen Particles background */}
          <BackgroundLayer />

          <TooltipProvider delayDuration={0}>
            {/* Content wrapper with max width */}
            <div className="max-w-2xl mx-auto py-12 sm:py-24 px-6 relative z-10">
              {children}
              <Navbar />
            </div>
          </TooltipProvider>
        </ThemeProvider>
        <Analytics/>
      </body>
    </html>
  );
}
