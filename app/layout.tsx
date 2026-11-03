import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Syne,
  Hanken_Grotesk,
  JetBrains_Mono,
  Geist,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webly.studio"),
  title: "WEBLY — Modern Web Design & Development Studio | Digital Atelier",
  description:
    "WEBLY crafts bespoke websites for visionary individuals, milestone celebrations, and modern businesses. Tailored digital experiences engineered with architectural precision and lean code.",
  keywords: [
    "web design studio",
    "freelance web developer",
    "wedding invitation website",
    "personal portfolio website",
    "business website design",
    "ecommerce website development",
    "bespoke web development",
    "WEBLY studio",
    "Chennai web studio",
  ],
  authors: [{ name: "WEBLY Studio" }],
  creator: "WEBLY",
  openGraph: {
    title: "WEBLY — Modern Web Design & Development Studio",
    description:
      "Crafting bespoke digital experiences with architectural discipline and timeless precision.",
    url: "https://webly.studio",
    siteName: "WEBLY",
    images: [
      {
        url: "/webly-logo.png",
        width: 1200,
        height: 630,
        alt: "WEBLY — Ideas into Digital Reality",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
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
      className={`${cormorant.variable} ${syne.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#09090b] text-[#f4f4f5]">
        {children}
      </body>
    </html>
  );
}

