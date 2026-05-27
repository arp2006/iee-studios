"use client"

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { motion } from "framer-motion"

const projects = [
  { title: "Ideation", color: "#FF6B6B" },
  { title: "Creative direction", color: "#FFD93D" },
  { title: "Scripting", color: "#6BCB77" },
  { title: "Moodboard", color: "#4D96FF" },
  { title: "Storyboard", color: "#9D4EDD" },
  { title: "Editing", color: "#FF922B" },
  { title: "Motion Design", color: "#00C2A8" },
  { title: "Sound engineering", color: "#F72585" },
]

type CurvedCarouselProps = {
  autoplay?: boolean
  autoplayMs?: number
  radius?: number
  angleStep?: number
  sizeDecrease?: number
  dragThreshold?: number
  className?: string
}

export default function CurvedCarousel({
  autoplay = true,
  autoplayMs = 3500,
  radius = 2380,
  angleStep = 9,
  sizeDecrease = 0.04,
  dragThreshold = 80,
  className = "",
}: CurvedCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const startXRef = useRef(0)
  const currentXRef = useRef(0)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const total = projects.length

  // Mobile detection
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  // Mobile card dimensions
  const cardW = isMobile ? 200 : 320
  const cardH = isMobile ? 160 : 240
  const mobileRadius = isMobile ? radius * 0.65 : radius
  const mobileAngleStep = isMobile ? angleStep * 0.85 : angleStep

  const clearAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }, [])

  const startAutoplay = useCallback(() => {
    if (!autoplay || total <= 1) return
    clearAutoplay()
    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => prev + 1)
    }, autoplayMs)
  }, [autoplay, autoplayMs, clearAutoplay, total])

  useEffect(() => {
    startAutoplay()
    return () => clearAutoplay()
  }, [startAutoplay, clearAutoplay])

  const moveCarousel = useCallback(
    (direction: number) => {
      if (total <= 1) return
      setActiveIndex((prev) => prev + direction)
      clearAutoplay()
      startAutoplay()
    },
    [clearAutoplay, startAutoplay, total]
  )

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true)
    startXRef.current = e.clientX
    currentXRef.current = e.clientX
    clearAutoplay()
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    currentXRef.current = e.clientX
  }

  const handlePointerUp = () => {
    if (!isDragging) return
    const diff = currentXRef.current - startXRef.current
    if (Math.abs(diff) > dragThreshold) {
      moveCarousel(diff > 0 ? -1 : 1)
    } else {
      startAutoplay()
    }
    setIsDragging(false)
  }

  const visibleCards = useMemo(() => {
    const range = 3
    return Array.from({ length: range * 2 + 1 }, (_, i) => {
      const offset = i - range
      const virtualIndex = activeIndex + offset
      const itemIndex = ((virtualIndex % total) + total) % total
      const project = projects[itemIndex]
      const angle = -offset * mobileAngleStep * (Math.PI / 180)
      const x = mobileRadius * Math.sin(angle)
      const y = mobileRadius - mobileRadius * Math.cos(angle)
      const scale = 1 - Math.abs(offset) * sizeDecrease
      const rotate = -offset * 8
      const opacity = Math.abs(offset) > 3 ? 0 : 1 - Math.abs(offset) * 0.18
      const zIndex = 100 - Math.abs(offset)
      return {
        key: `${virtualIndex}`,
        project,
        x,
        y,
        scale,
        rotate,
        opacity,
        zIndex,
        isCenter: offset === 0,
      }
    })
  }, [activeIndex, mobileAngleStep, mobileRadius, sizeDecrease, total])

  // Normalised active dot index (0 to total-1)
  const dotIndex = ((activeIndex % total) + total) % total

  return (
    <section
      className={`relative w-full bg-white overflow-hidden ${className}`}
      style={{ height: isMobile ? 520 : 760 }}
    >
      <div
        className="relative w-full h-full flex items-center justify-center touch-pan-y"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        {visibleCards.map((card) => (
          <motion.div
            key={card.key}
            layout={false}
            initial={false}
            className="absolute left-1/2 top-1/2 will-change-transform"
            animate={{
              x: card.x,
              y: card.y,
              scale: card.scale,
              rotate: card.rotate,
              opacity: card.opacity,
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ zIndex: card.zIndex, translateX: "-50%", translateY: "-50%" }}
          >
            <div
              className="flex items-end rounded-[36px] p-6 shadow-2xl"
              style={{
                width: cardW,
                height: cardH,
                background: card.project.color,
                padding: isMobile ? "20px 24px" : "32px",
              }}
            >
              <h2
                className="font-semibold leading-[0.95] text-white"
                style={{
                  fontSize: isMobile ? 22 : 36,
                  maxWidth: isMobile ? 160 : 220,
                }}
              >
                {card.project.title}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop: arrow controls */}
      {!isMobile && (
        <div className="absolute bottom-10 left-1/2 z-50 flex -translate-x-1/2 gap-3">
          <button
            onClick={() => moveCarousel(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white text-black transition duration-300 hover:scale-105"
          >
            ←
          </button>
          <button
            onClick={() => moveCarousel(1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white text-black transition duration-300 hover:scale-105"
          >
            →
          </button>
        </div>
      )}

      {/* Mobile: dot indicators */}
      {isMobile && (
        <div className="absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const diff = i - dotIndex
                // take shortest path around the loop
                const step = diff > total / 2 ? diff - total : diff < -total / 2 ? diff + total : diff
                setActiveIndex((prev) => prev + step)
                clearAutoplay()
                startAutoplay()
              }}
              style={{
                width: dotIndex === i ? 20 : 8,
                height: 8,
                borderRadius: 999,
                background: dotIndex === i ? "#171717" : "#d4d4d4",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 300ms cubic-bezier(0.4,0,0.2,1), background 300ms ease",
              }}
              aria-label={`Go to ${projects[i].title}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}