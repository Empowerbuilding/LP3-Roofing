import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
    <html lang="en" className={`${geistSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-gray-950 font-sans antialiased">
        <Navbar />
        <div className="flex flex-col flex-1">{children}</div>
      </body>
    </html>
  );
}
