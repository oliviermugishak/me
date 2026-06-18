import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistDisplay = Geist({
  variable: "--font-display",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Olivier Kwizera | Software Engineer",
    template: "%s | Olivier Kwizera",
  },
  description:
    "Building scalable systems, backend platforms, and developer tools. Systems engineer focused on distributed systems, developer tooling, and product building.",
  keywords: [
    "software engineer",
    "backend engineer",
    "distributed systems",
    "Go",
    "Rust",
    "TypeScript",
    "Kigali",
    "Rwanda",
  ],
  authors: [{ name: "Olivier Kwizera" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Olivier Kwizera",
    title: "Olivier Kwizera | Software Engineer",
    description:
      "Building scalable systems, backend platforms, and developer tools.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olivier Kwizera | Software Engineer",
    description:
      "Building scalable systems, backend platforms, and developer tools.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistDisplay.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary font-sans">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
