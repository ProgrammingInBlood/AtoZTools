import type { Metadata } from "next";
import { Anek_Devanagari } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const Anek = Anek_Devanagari({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AtoZTools",
  description: "All tools you need at one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={Anek.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
