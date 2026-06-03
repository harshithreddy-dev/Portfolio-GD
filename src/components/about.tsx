"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { fadeUp, stagger } from "./motion";

const stats = [
  ["3+", "Years designing"],
  ["40+", "Projects completed"],
  ["15+", "Event creatives"],
  ["25+", "Logo concepts"]
];

const timeline = ["Started with posters", "Created college event designs", "Designed logos and invitations", "Now building a stronger creative portfolio"];
const skills = [
  ["Brand Identity", 94],
  ["Typography", 89],
  ["Social Creatives", 96],
  ["Print Layout", 86]
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="Visuals with taste, speed, and scroll-stopping energy."
          copy="I create sharp logos, expressive event graphics, polished invites, posters, and marketing creatives that feel energetic, clear, and memorable."
        />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} className="grid gap-5 lg:grid-cols-[1.08fr_.92fr]">
          <motion.div variants={fadeUp} className="glass rounded-[28px] p-6 sm:p-8">
            <p className="font-display text-3xl font-black leading-tight sm:text-5xl">
              Design should feel like a first impression with perfect lighting.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {timeline.map((item, index) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <span className="text-xs font-black text-cyanFlash">0{index + 1}</span>
                  <p className="mt-2 text-sm font-bold text-white/78">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="grid gap-5">
            <div className="grid grid-cols-2 gap-4">
              {stats.map(([value, label]) => (
                <div key={label} className="glass rounded-3xl p-5">
                  <p className="font-display text-4xl font-black text-gradient">{value}</p>
                  <p className="mt-2 text-sm font-bold text-white/62">{label}</p>
                </div>
              ))}
            </div>
            <div className="glass rounded-3xl p-6">
              {skills.map(([name, percent]) => (
                <div key={name} className="mb-5 last:mb-0">
                  <div className="mb-2 flex justify-between text-sm font-bold text-white/74">
                    <span>{name}</span>
                    <span>{percent}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-cyanFlash via-vibrantPink to-acid"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
