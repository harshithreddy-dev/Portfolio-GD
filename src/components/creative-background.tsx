"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 26 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  size: 3 + (index % 4) * 2,
  delay: index * 0.13
}));

export function CreativeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(155,92,255,0.16),transparent_28%,rgba(30,123,255,0.13)_52%,transparent_75%,rgba(255,43,214,0.12))]" />
      <motion.div
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 18, ease: "linear" }}
        className="absolute inset-0 opacity-35 [background-size:120px_120px] bg-radial-grid"
      />
      <motion.div
        animate={{ rotate: [0, 8, -4, 0], x: [0, 24, -18, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute -left-36 top-16 h-[42rem] w-[62rem] rotate-12 bg-[conic-gradient(from_120deg,rgba(33,247,255,0.18),rgba(255,43,214,0.08),transparent,rgba(155,92,255,0.2),transparent)] blur-3xl"
      />
      <motion.div
        animate={{ rotate: [0, -10, 6, 0], y: [0, -28, 18, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        className="absolute -right-48 bottom-0 h-[34rem] w-[58rem] -rotate-12 bg-[conic-gradient(from_20deg,rgba(220,255,47,0.13),transparent,rgba(30,123,255,0.2),rgba(255,43,214,0.12),transparent)] blur-3xl"
      />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          animate={{ y: [0, -22, 0], opacity: [0.25, 0.9, 0.25] }}
          transition={{ repeat: Infinity, duration: 3 + (particle.id % 5), delay: particle.delay }}
          className="absolute rounded-full bg-cyanFlash"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            boxShadow: "0 0 24px rgba(33,247,255,.9)"
          }}
        />
      ))}
    </div>
  );
}
