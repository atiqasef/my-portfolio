import type { Metadata } from "next";
import "./globals.css";
import CursorSpotlight from "@/components/CursorSpotlight";

export const metadata: Metadata = {
  title: "Atiq Asef — Full Stack Web Developer",
  description:
    "Atiq Asef is a Full Stack Web Developer at RUSHD DEV, building modern, fast, and scalable web applications from Dhaka, Bangladesh.",
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Bangladesh",
    "RUSHD DEV",
    "Atiq Asef",
    "Freelance Web Developer Dhaka",
  ],
  authors: [{ name: "Atiq Asef", url: "https://rushddev.com" }],
  creator: "Atiq Asef",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rushddev.com",
    title: "Atiq Asef — Full Stack Web Developer",
    description:
      "Building modern, fast, and scalable web applications. Full Stack Developer at RUSHD DEV.",
    siteName: "Atiq Asef Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Atiq Asef — Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atiq Asef — Full Stack Web Developer",
    description: "Building modern web applications from Dhaka, Bangladesh.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL("https://rushddev.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg text-text font-body antialiased overflow-x-hidden">
        {children}
        <CursorSpotlight />
      </body>
    </html>
  );
}
