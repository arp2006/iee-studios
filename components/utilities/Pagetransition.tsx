"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

const variants = {
  // Safari WebKit fix: animating both opacity AND transform (y) on a parent
  // that contains filter:blur() children prevents WebKit from GPU-promoting
  // the children into their own compositing layers. The result is the entire
  // subtree paints on the CPU during the transition — which is exactly why
  // the hero text blur-in is slow/missing on macOS and iOS.
  //
  // Keeping only opacity on the parent lets WebKit independently composite
  // each child's filter animation on the GPU, while the parent fades in
  // normally. The y movement is removed; the blur-in on the words provides
  // more than enough motion to sell the entrance.
  hidden: { opacity: 0 },
  enter:  { opacity: 1 },
  exit:   { opacity: 0 },
};

export function NavTransition({ children }: { children: React.ReactNode }) {
  // NavTransition is now a no-op passthrough.
  // The nav animates itself internally to avoid breaking position:fixed.
  return <>{children}</>;
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={reduce ? {} : variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}