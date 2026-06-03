"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./motion";

export function SectionHeading({
  eyebrow,
  title,
  copy
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="mb-10 max-w-3xl"
    >
      <p className="mb-4 text-xs font-black uppercase tracking-[0.36em] text-cyanFlash">{eyebrow}</p>
      <h2 className="font-display text-4xl font-black leading-[0.92] sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      {copy ? <p className="mt-5 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">{copy}</p> : null}
    </motion.div>
  );
}
