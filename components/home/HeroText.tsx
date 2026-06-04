"use client"

import { motion } from "framer-motion"

const words = ["I need", "the damn video", "and", "text"]

export default function HeroText() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
      <h1 className="text-5xl font-medium flex flex-wrap gap-x-4 justify-center">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, filter: "blur(6px)", y: 0 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              delay: 0.25 + i * 0.35,
              duration: 1.5,
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