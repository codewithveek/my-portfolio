import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import BrutalAppShell from "@/components/layout/BrutalAppShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veek.me"),
  title: {
    default: "Veek | Full Stack Developer",
    template: "%s | Veek",
  },
  description:
    "Portfolio of Veek — full stack developer building high-performance web products with React, Next.js, TypeScript, and Node.js.",
  applicationName: "Veek Portfolio",
  keywords: [
    "Veek",
    "Lucky Victory Success",
    "Full Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "TypeScript",
    "Node.js",
    "Web Developer",
    "Software Engineer",
    "Code with Veek",
  ],
  authors: [
    {
      name: "Veek",
      url: "https://veek.me",
    },
  ],
  creator: "CodewithVeek",
  publisher: " CodewithVeek",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://veek.me",
    title: "Veek | Full Stack Developer",
    description:
      "Explore Veek's portfolio: product-focused full stack projects, engineering craft, and modern web architecture.",
    siteName: "Veek Portfolio",
    emails: ["hello@veek.dev"],
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Veek portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veek | Full Stack Developer",
    description:
      "Portfolio of Veek — building fast, scalable, product-driven web experiences.",
    creator: "@codewithveek",
    images: ["/twitter-image"],
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
  verification: {
    other: {
      me: [
        "https://github.com/codewithveek",
        "https://linkedin.com/in/lucky-victory-success",
      ],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="theme-brutal scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <BrutalAppShell>{children}</BrutalAppShell>
        <Analytics />
      </body>
    </html>
  );
}
