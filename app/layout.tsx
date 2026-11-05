import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webly.studio"),
  title: "WEBLY — Editorial Web Design & Digital Craft Studio",
  description:
    "WEBLY designs and builds websites that make your brand stand out. Tailored online solutions crafted with purposeful interaction, clean semantics, and editorial clarity.",
  keywords: [
    "web design studio",
    "business websites",
    "personal portfolio website",
    "student portfolio",
    "ecommerce website",
    "wedding invitations",
    "birthday surprise website",
    "custom web applications",
    "WEBLY",
  ],
  authors: [{ name: "WEBLY Studio" }],
  creator: "WEBLY",
  openGraph: {
    title: "WEBLY — Editorial Web Design & Digital Craft Studio",
    description:
      "We design and build websites that make your brand stand out. Your ideas. Our digital canvas.",
    url: "https://webly.studio",
    siteName: "WEBLY",
    images: [
      {
        url: "/webly-logo-navy.png",
        width: 820,
        height: 532,
        alt: "WEBLY — Your ideas. Our digital canvas.",
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
      className={`${syne.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-surface font-sans text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary min-h-screen">
        {children}
      </body>
    </html>
  );
}
