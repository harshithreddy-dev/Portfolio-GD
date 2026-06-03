"use client";

import { ArrowUp } from "lucide-react";
import { motion, useScroll } from "framer-motion";

export function ScrollControls() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-40 h-1 origin-left bg-gradient-to-r from-cyanFlash via-vibrantPink to-acid"
        style={{ scaleX: scrollYProgress, width: "100%" }}
      />
      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="focus-ring fixed bottom-5 right-5 z-30 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/10 text-white shadow-glow backdrop-blur-xl transition hover:bg-cyanFlash hover:text-ink"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}
