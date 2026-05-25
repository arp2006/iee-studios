"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

const variants = {
  hidden: { opacity: 0, y: 18 },
  enter:  { opacity: 1, y: 0 },
  exit:   { opacity: 0, y: -12 },
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
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}