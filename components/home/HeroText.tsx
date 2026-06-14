"use client"

import { motion } from "framer-motion"

// const words = ["I need", "the damn video", "and", "text"]
const words = ["Videos that", "make you", "feel", "something", "in your", "chest."]

export default function HeroText() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
      <h1 className="text-[20px] gap-x-2 font-medium flex flex-wrap md:text-5xl md:gap-x-3 justify-center">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="font-light tracking-[-0.8%] "
            style={{ color: "white", mixBlendMode: "difference" }}
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              delay: 0.25 + i * 0.5,
              duration: 1.4,
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