import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LP3 Roofing & Construction | Fort Worth TX Roofing Contractor",
  description:
    "LP3 Roofing & Construction is Fort Worth's most trusted roofing contractor. Licensed, insured, BBB accredited. Storm damage, roof replacement, repair, commercial roofing, and gutters. Free inspections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-gray-950 antialiased" style={{ fontFamily: 'Inter, sans-serif' }}>
        <Navbar />
        <div className="flex flex-col flex-1">{children}</div>
        <FloatingCTA />
      </body>
    </html>
  );
}
