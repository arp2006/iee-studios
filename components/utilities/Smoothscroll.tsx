"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Pause Lenis when hovering over any twitter/instagram iframe
    function handleMouseEnter(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("[data-lenis-prevent]")) {
        lenis.stop();
      }
    }
    function handleMouseLeave(e: MouseEvent) {
      const target = e.target as MouseEvent["target"] & HTMLElement;
      if (target.closest("[data-lenis-prevent]")) {
        lenis.start();
      }
    }

    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
      lenis.destroy();
    };
  }, []);

  return null;
}