"use client";

import { motion } from "framer-motion";

export function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ delay: 1.15, duration: 0.6, ease: "easeOut" }}
      className="fixed inset-0 z-50 grid place-items-center bg-ink"
      aria-hidden="true"
    >
      <motion.div
        initial={{ scale: 0.86, rotate: -8 }}
        animate={{ scale: [0.86, 1.08, 1], rotate: [ -8, 4, 0 ] }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex h-40 w-40 items-center justify-center rounded-[28px] border border-white/15 bg-white/8 shadow-glow backdrop-blur-2xl"
      >
        <span className="text-gradient font-display text-6xl font-black">H</span>
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          className="absolute inset-3 rounded-[24px] border-t-2 border-cyanFlash"
        />
      </motion.div>
    </motion.div>
  );
}
