import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/utilities/Smoothscroll";
import { NavTransition, PageTransition } from "./components/utilities/Pagetransition";
import Bottomnav from "./components/Bottomnav";

export const metadata: Metadata = {
  title: "iee studios",
  description: "We craft brands and digital experiences that move people.",
};

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
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white antialiased">
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