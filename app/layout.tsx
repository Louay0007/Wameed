"use client";

import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GlobalAudioPlayer from "@/components/GlobalAudioPlayer";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
  weight: ["500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/wameed.png" />
        <link rel="apple-touch-icon" href="/images/your-favicon.ico" />
      </head>
      <body className={`${instrumentSans.variable} antialiased bg-dark`}>
        <GlobalAudioPlayer />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}