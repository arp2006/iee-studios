
"use client"

import About from "@/components/home/About";
import Work from "@/components/home/Work";
import Pricing from "@/components/home/Pricing";
import ExploreLinksSection from "@/components/home/Links";
import Footer from "@/components/home/Footer";
import FAQ from "@/components/home/FAQ";
import CurvedCarousel from "@/components/home/CurvedCarousel"
import ServicesCloud from "@/components/home/ServicesCloud";
import ServicesSection from "@/components/home/ServiceSection";

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
        {/* <ServicesCloud /> */}
        <ServicesSection />
        {/* <CurvedCarousel /> */}
        <FAQ />
        <ExploreLinksSection />
        <Footer />
      </div>

    </main>
  );
}