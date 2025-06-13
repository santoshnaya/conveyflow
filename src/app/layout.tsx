import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Planet Replica - Global Hub for Climate Action",
  description: "A dynamic, scroll-driven landing page for a climate-action hub—mirroring Planet's immersive visual panels, GSAP animations, and concise storytelling. Join changemakers advancing climate action worldwide.",
  keywords: "climate action, environmental initiatives, sustainability, Planet, collaboration, green technology",
  authors: [{ name: "Planet Replica Team" }],

  robots: "index, follow",
  openGraph: {
    title: "Planet Replica - Global Hub for Climate Action",
    description: "Join changemakers around the world in a powerful new community transforming our efforts into a cascade of impact.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planet Replica - Global Hub for Climate Action",
    description: "Transform climate action, for good. Join the global movement.",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
