"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Sparkles, WandSparkles, Zap } from "lucide-react";
import { MagneticButton } from "./magnetic-button";
import { fadeUp, stagger } from "./motion";

const stickers = [
  { label: "LOGO", icon: BadgeCheck, className: "left-[7%] top-[28%] rotate-[-12deg]", color: "text-cyanFlash" },
  { label: "PRINT", icon: Sparkles, className: "right-[8%] top-[22%] rotate-[10deg]", color: "text-vibrantPink" },
  { label: "BRAND", icon: WandSparkles, className: "left-[12%] bottom-[16%] rotate-[8deg]", color: "text-acid" },
  { label: "SOCIAL", icon: Zap, className: "right-[14%] bottom-[18%] rotate-[-9deg]", color: "text-electricBlue" }
];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-4 py-24">
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
      {stickers.map((sticker, index) => {
        const Icon = sticker.icon;
        return (
          <motion.div
            key={sticker.label}
            initial={{ opacity: 0, scale: 0.7, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: [0, -16, 0] }}
            transition={{ opacity: { delay: 1 + index * 0.12 }, scale: { delay: 1 + index * 0.12 }, y: { repeat: Infinity, duration: 4 + index, ease: "easeInOut" } }}
            className={`glass absolute hidden rounded-2xl px-4 py-3 md:flex ${sticker.className}`}
          >
            <div className="flex items-center gap-2">
              <Icon className={`h-5 w-5 ${sticker.color}`} />
              <span className="font-display text-sm font-black tracking-[0.22em]">{sticker.label}</span>
            </div>
          </motion.div>
        );
      })}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="section-shell text-center"
      >
        <motion.div variants={fadeUp} className="mx-auto mb-6 inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-white/80 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-cyanFlash shadow-[0_0_18px_#21f7ff]" />
          Graphic Designer / Creative Designer
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="mx-auto max-w-6xl font-display text-6xl font-black leading-[0.84] sm:text-7xl md:text-8xl lg:text-[8.8rem]"
        >
          I Design Brands That People <span className="text-gradient">Remember.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/72 sm:text-2xl">
          Logos. Event Branding. Invitations. Marketing Creatives. Social Media Assets.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton href="#portfolio">View Work</MagneticButton>
          <MagneticButton href="#contact" variant="secondary">Contact Me</MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
