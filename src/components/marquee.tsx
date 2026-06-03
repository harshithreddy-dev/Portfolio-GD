"use client";

import { motion } from "framer-motion";

const words = ["LOGOS", "EVENT BRANDING", "INVITES", "POSTERS", "SOCIAL ASSETS", "BRAND IDENTITY"];

export function Marquee() {
  return (
    <section className="relative z-10 overflow-hidden border-y border-white/10 bg-white/[0.04] py-5">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        className="flex w-max gap-8 whitespace-nowrap"
      >
        {[...words, ...words, ...words, ...words].map((word, index) => (
          <span key={`${word}-${index}`} className="font-display text-2xl font-black uppercase tracking-[0.2em] text-white/82 sm:text-4xl">
            {word} <span className="text-vibrantPink">✦</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
