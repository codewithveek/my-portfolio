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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://veek.me/#person",
      name: "Lucky Victory Success",
      alternateName: "Veek",
      url: "https://veek.me",
      image: "https://veek.me/opengraph-image",
      email: "hello@veek.me",
      jobTitle: "Software Engineer",
      sameAs: [
        "https://github.com/codewithveek",
        "https://x.com/codewithveek",
        "https://linkedin.com/in/lucky-victory-success",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://veek.me/#website",
      url: "https://veek.me",
      name: "Veek Portfolio",
      description:
        "Portfolio of Lucky Victory Success — software engineer helping startups ship scalable products in fintech and e-commerce.",
      inLanguage: "en",
      publisher: {
        "@id": "https://veek.me/#person",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://veek.me/#webpage",
      url: "https://veek.me",
      name: "Lucky | Full-Stack Engineer",
      isPartOf: {
        "@id": "https://veek.me/#website",
      },
      about: {
        "@id": "https://veek.me/#person",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://veek.me/opengraph-image",
      },
      inLanguage: "en",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://veek.me"),
  title: {
    default: "Lucky | Full-Stack Engineer",
    template: "%s | Veek",
  },
  description:
    "Portfolio of Lucky Victory Success — software engineer helping startups launch production-ready products faster across fintech and e-commerce.",
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
      name: "Lucky Victory Success",
      url: "https://veek.me",
    },
  ],
  creator: "Lucky Victory Success",
  publisher: "CodewithVeek",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://veek.me",
    title: "Lucky | Full-Stack Engineer",
    description:
      "Explore Lucky's portfolio: startup-focused engineering, fintech and e-commerce experience, and fast MVP execution.",
    siteName: "Veek Portfolio",
    emails: ["hello@veek.me"],
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
    title: "Lucky | Full-Stack Engineer",
    description:
      "Portfolio of Lucky Victory Success — helping startups move fast without breaking systems.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <BrutalAppShell>{children}</BrutalAppShell>
        <Analytics />
      </body>
    </html>
  );
}
