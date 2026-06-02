import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/utilities/Smoothscroll";
import { NavTransition, PageTransition } from "../components/utilities/Pagetransition";
import Bottomnav from "../components/Bottomnav";

export const metadata: Metadata = {
  title: "iee studios | Building cinematic digital experiences",
  description: "We ship Videos that make you feel something in your chest.",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
      </head>
      <body className={`${inter.variable} bg-black text-white antialiased`}>
        <SmoothScroll />
        <NavTransition>
          <Bottomnav />
        </NavTransition>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}