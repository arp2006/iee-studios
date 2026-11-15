"use client"

import { motion } from "framer-motion"

const words = ["Videos", "that", "make", "you", "feel", "something", "in", "your", "chest."]

// Hand-tuned pacing: slow intro, quick middle build, slow dramatic landing
const timing = [
  { delay: 0.25, duration: 1.4 }, // Videos
  { delay: 0.85, duration: 1.4 }, // that        (slow gap from "Videos")
  { delay: 1.35, duration: 0.9 }, // make         (gap shrinks)
  { delay: 1.55, duration: 0.9 }, // you          (fast)
  { delay: 1.75, duration: 0.9 }, // feel         (fast)
  { delay: 1.95, duration: 0.9 }, // something    (fast)
  { delay: 2.15, duration: 0.9 }, // in your      (fast)
  { delay: 2.25, duration: 0.9 }, // your         (fast)
  { delay: 2.85, duration: 1.6 }, // chest.       (long pause, slow lingering blur-in)
]

export default function HeroText() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
      {/*
        Safari fix: mix-blend-mode + filter:blur on the same animated element
        forces CPU compositing on WebKit — it cannot GPU-layer them together.
        Solution: isolate blend mode onto a non-animated wrapper (mix-blend-mode
        is inherited, so the spans still blend correctly against the video),
        and let each span animate only opacity + filter on its own GPU layer.
      */}
      <h1
        className="text-[20px] gap-x-2 font-medium flex flex-wrap md:text-[40px] md:gap-x-3 justify-center"
        style={{ mixBlendMode: "difference" }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="font-light tracking-[-0.8%]"
            style={{
              color: "white",
              // willChange tells Safari's compositor to pre-allocate a GPU
              // layer for each span before the animation starts, preventing
              // the mid-animation layer-promotion stutter seen on macOS/iOS.
              willChange: "opacity, filter",
            }}
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              delay: timing[i].delay,
              duration: timing[i].duration,
              ease: "easeOut",
            }}
          >
            {word}
          </motion.span>
        ))}
      </h1>
    </div>
  )
}