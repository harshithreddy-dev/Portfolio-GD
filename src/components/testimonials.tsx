"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "./section-heading";

const testimonials = [
  ["The visuals made our event look ten times bigger online. Fast, sharp, and premium.", "Aarav", "Event Organizer"],
  ["Harshith understood the vibe immediately and turned it into a brand kit we could actually use.", "Meera", "Founder"],
  ["Our posts finally looked consistent. The launch graphics got more saves than anything we had posted before.", "Rohan", "Creator"],
  ["Clean files, strong concepts, and a designer who knows what will look good on Instagram and print.", "Nisha", "Marketing Lead"]
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="Testimonials" title="Clients remember the work because their audience did." />
      </div>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
        className="mt-2 flex w-max gap-5 px-4"
      >
        {[...testimonials, ...testimonials].map(([quote, name, role], index) => (
          <article key={`${name}-${index}`} className="glass w-[330px] rounded-[28px] p-6 sm:w-[430px]">
            <Quote className="h-8 w-8 text-vibrantPink" />
            <p className="mt-6 text-lg font-bold leading-8 text-white/82">“{quote}”</p>
            <p className="mt-6 font-display text-2xl font-black">{name}</p>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyanFlash">{role}</p>
          </article>
        ))}
      </motion.div>
    </section>
  );
}
