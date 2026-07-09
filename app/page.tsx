"use client"

import { useRef, useEffect, useState } from "react"
import About from "@/components/home/About";
import Work from "@/components/home/Work";
import ExploreLinksSection from "@/components/home/Links";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/home/FAQ";
import ServicesSection from "@/components/home/ServiceSection";
import HeroText from "@/components/home/HeroText";

const HERO_ANIMATION_DURATION = 4150

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const start = () => {
      if (document.visibilityState === "visible") setReady(true)
    }
    if (document.readyState === "complete") {
      requestAnimationFrame(() => requestAnimationFrame(start)) // wait a paint or two
    } else {
      window.addEventListener("load", start)
    }
    document.addEventListener("visibilitychange", start)
    return () => {
      window.removeEventListener("load", start)
      document.removeEventListener("visibilitychange", start)
    }
  }, [])

  useEffect(() => {
    if (!ready) return
    const video = videoRef.current
    if (!video) return
    video.pause()
    const timer = setTimeout(() => {
      video.play().catch(() => {
        const onInteract = () => { video.play(); window.removeEventListener("click", onInteract); window.removeEventListener("touchstart", onInteract) }
        window.addEventListener("click", onInteract)
        window.addEventListener("touchstart", onInteract)
      })
    }, HERO_ANIMATION_DURATION)
    return () => clearTimeout(timer)
  }, [ready])

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
        <HeroText start={ready} />
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