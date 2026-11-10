import type { Metadata } from "next";
import { Syne, Instrument_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL, siteConfig } from "@/lib/data";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${siteConfig.name} — ${siteConfig.title}`,
  description:
    "Atiq Asef is a Full Stack Web Developer building modern, fast, and scalable web applications from Dhaka, Bangladesh.",
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Bangladesh",
    "Atiq Asef",
    "Freelance Web Developer Dhaka",
  ],
  authors: [{ name: siteConfig.name, url: SITE_URL }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description:
      "Building modern, fast, and scalable web applications from Dhaka, Bangladesh.",
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: "Building modern web applications from Dhaka, Bangladesh.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${syne.variable} ${instrumentSans.variable} ${dmMono.variable}`}
    >
      <body className="bg-bg text-ink font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
