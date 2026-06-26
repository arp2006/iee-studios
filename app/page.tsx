"use client"

import { useRef, useEffect } from "react"
import About from "@/components/home/About";
import Work from "@/components/home/Work";
import ExploreLinksSection from "@/components/home/Links";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/home/FAQ";
import ServicesSection from "@/components/home/ServiceSection";
import HeroText from "@/components/home/HeroText";

const HERO_ANIMATION_DURATION = 4150

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.pause()

    const timer = setTimeout(() => {
      video.play().catch(() => {
        // Autoplay blocked — fallback: play on first user interaction
        const onInteract = () => {
          video.play()
          window.removeEventListener("click", onInteract)
          window.removeEventListener("touchstart", onInteract)
        }
        window.addEventListener("click", onInteract)
        window.addEventListener("touchstart", onInteract)
      })
    }, HERO_ANIMATION_DURATION)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="bg-white">

      {/* ── STICKY HERO VIDEO ── */}
      <div className="sticky top-0 h-screen z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="https://ysucykflidgcxqtvnmmr.supabase.co/storage/v1/object/public/videos/iee-studios-hero-video.mp4"
          muted
          loop
          playsInline
          // No autoPlay — we control it manually
        />
        <div className="absolute inset-0 bg-black/0" />
        <HeroText />
      </div>

      {/* ── CONTENT SLIDES OVER VIDEO ── */}
      <div className="w-full relative z-10 flex flex-col">
        <About />
        <Work />
        <ServicesSection />
        <FAQ />
        <ExploreLinksSection />
        <Footer />
      </div>

    </main>
  );
}