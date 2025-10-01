import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "react-hot-toast";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://property-owner.vercel.app"),
  title: "Turn Your Property Into a Passive Income Machine | CoRent",
  description:
    "Join thousands of property owners earning consistent rental income with CoRent’s all-in-one property management platform. We handle everything so you don’t have to.",
  generator: "CoRent",
  openGraph: {
    title: "Turn Your Property Into a Passive Income Machine | CoRent",
    description:
      "Join thousands of property owners earning consistent rental income with CoRent’s all-in-one property management platform. We handle everything so you don’t have to.",
    siteName: "CoRent",
    images: [
      {
        url: "https://property-owner.vercel.app/og-image.png", // ✅ absolute URL
        width: 1200,
        height: 630,
        alt: "CoRent Property Management Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turn Your Property Into a Passive Income Machine | CoRent",
    description:
      "Earn consistent rental income effortlessly with CoRent’s property management platform. We handle everything so you don’t have to.",
    images: ["https://property-owner.vercel.app/og-image.png"], // ✅ absolute path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
