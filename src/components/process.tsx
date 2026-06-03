"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { fadeUp, stagger } from "./motion";

const process = [
  ["01", "Discovery", "Understand the brand, audience, vibe, deadline, and must-win moments."],
  ["02", "Research", "Collect references, category signals, and visual opportunities."],
  ["03", "Design", "Build strong directions with typography, color, layout, and assets."],
  ["04", "Refinement", "Polish details, tighten hierarchy, and make every format work."],
  ["05", "Delivery", "Export organized, ready-to-use files for print, web, and socials."]
];

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="Process" title="From loose idea to polished visual system." />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} className="relative grid gap-4">
          <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-cyanFlash via-vibrantPink to-acid md:block" />
          {process.map(([number, title, copy]) => (
            <motion.article key={title} variants={fadeUp} className="glass grid gap-4 rounded-[26px] p-5 md:grid-cols-[90px_1fr] md:p-7">
              <span className="font-display text-5xl font-black text-gradient">{number}</span>
              <div>
                <h3 className="font-display text-3xl font-black">{title}</h3>
                <p className="mt-2 max-w-2xl text-white/66">{copy}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
