"use client";

import { motion } from "framer-motion";
import { tools } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { fadeUp, stagger } from "./motion";

export function Tools() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="Tools I Use" title="The stack behind the sparkle." />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.04 }}
              className="glass rounded-full px-5 py-4"
            >
              <span className="mr-3 text-cyanFlash">0{index + 1}</span>
              <span className="font-display text-lg font-black">{tool}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
