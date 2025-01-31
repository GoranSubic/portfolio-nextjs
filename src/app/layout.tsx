import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "@/styles/globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
})

export const metadata: Metadata = {
  title: "Goran Subić",
  description: "Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtm_id = process.env.NEXT_PUBLIC_GTM_ID ?? '';

  return (
    <html lang="en">
      <GoogleTagManager gtmId={gtm_id} />
      <body
        className={`${inter.variable} ${urbanist.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
