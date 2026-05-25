
"use client"

import About from "../components/About";
import Work from "../components/Work";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import ExploreLinksSection from "../components/Links";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import CurvedCarousel from "@/components/CurvedCarousel"

export default function Home() {
  return (
    <main className="bg-white">

      {/* ── STICKY HERO VIDEO ── */}
      <div className="sticky top-0 h-screen z-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/0" />
      </div>

      {/* ── CONTENT SLIDES OVER VIDEO ── */}
      <div className="w-full relative z-10 flex flex-col">
        <About />
        <Work />
        {/* <Services /> */}
        <CurvedCarousel />
        <FAQ />
        <Pricing />
        <ExploreLinksSection />
        <Footer />
      </div>

    </main>
  );
}