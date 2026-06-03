import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Harshith | Graphic Designer Portfolio",
  description:
    "Graphic Designer specializing in Logos, Event Banners, Invitations, Posters, Branding and Creative Marketing Assets.",
  keywords: [
    "Harshith",
    "Graphic Designer",
    "Creative Designer",
    "Logo Design",
    "Event Banners",
    "Brand Identity",
    "Social Media Creatives"
  ],
  openGraph: {
    title: "Harshith | Graphic Designer Portfolio",
    description:
      "Graphic Designer specializing in Logos, Event Banners, Invitations, Posters, Branding and Creative Marketing Assets.",
    url: "https://editorsforyouagency.vercel.app/",
    siteName: "Harshith Portfolio",
    type: "website"
  },
  metadataBase: new URL("https://editorsforyouagency.vercel.app/")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
