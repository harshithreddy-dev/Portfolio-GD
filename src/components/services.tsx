"use client";

import { motion } from "framer-motion";
import { Brush, Image, Megaphone, Palette, PenTool, Sparkles, Type, WandSparkles } from "lucide-react";
import { services } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { fadeUp, stagger } from "./motion";

const icons = [PenTool, Image, Sparkles, Megaphone, Type, WandSparkles, Brush, Palette];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="Services" title="Premium creative assets for moments that need attention." />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={service}
                variants={fadeUp}
                whileHover={{ y: -10, rotate: index % 2 ? 1 : -1 }}
                className="glass group relative min-h-56 overflow-hidden rounded-[26px] p-5"
              >
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(33,247,255,0.16),rgba(255,43,214,0.14),rgba(220,255,47,0.1))]" />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-ink">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-black leading-none">{service}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/62">Concept, layout, export-ready files, and a visual direction that feels custom.</p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
