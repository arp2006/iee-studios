
"use client"

import About from "@/components/home/About";
import Work from "@/components/home/Work";
import Pricing from "@/components/home/Pricing";
import ExploreLinksSection from "@/components/home/Links";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/home/FAQ";
import CurvedCarousel from "@/components/home/CurvedCarousel"
import ServicesCloud from "@/components/home/ServicesCloud";
import ServicesSection from "@/components/home/ServiceSection";
import HeroText from "@/components/home/HeroText";

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
        {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl font-bold drop-shadow-lg">Your Headline</h1>
          <p className="mt-4 text-xl text-white/80">A short supporting line here</p>
        </div> */}
        <HeroText />
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