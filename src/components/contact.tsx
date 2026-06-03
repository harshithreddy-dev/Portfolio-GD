"use client";

import { Mail, MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { SectionHeading } from "./section-heading";
import { fadeUp } from "./motion";

export function Contact() {
  return (
    <section id="contact" className="relative pb-12 pt-24 sm:pt-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Have a brand, event, or launch that needs to look unforgettable?"
          copy="Send the brief, budget, and timeline. I will help shape the visual direction and make the deliverables feel premium from first glance."
        />
        <div className="grid gap-5 lg:grid-cols-[1fr_.72fr]">
          <motion.form
            action="/api/contact"
            method="post"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass grid gap-4 rounded-[30px] p-5 sm:grid-cols-2 sm:p-7"
          >
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@email.com" />
            <Field label="Project Type" name="projectType" placeholder="Logo, poster, event..." />
            <Field label="Budget" name="budget" placeholder="Rs. 10k - 25k" />
            <label className="sm:col-span-2">
              <span className="mb-2 block text-sm font-bold text-white/70">Message</span>
              <textarea
                name="message"
                rows={6}
                required
                placeholder="Tell me what you want to create."
                className="focus-ring w-full resize-none rounded-2xl border border-white/12 bg-black/30 px-4 py-3 text-white placeholder:text-white/35"
              />
            </label>
            <button
              type="submit"
              className="focus-ring group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyanFlash px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-ink transition hover:bg-white sm:col-span-2"
            >
              Send Inquiry <Send className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </motion.form>
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass rounded-[30px] p-6 sm:p-8"
          >
            <h3 className="font-display text-4xl font-black">Let&apos;s make the next thing loud.</h3>
            <div className="mt-8 grid gap-3">
              <ContactLink
                href="https://instagram.com/liftwithharshith"
                label="Instagram"
                value="@liftwithharshith"
                icon={<MessageCircle className="h-5 w-5" />}
              />
              <ContactLink
                href="mailto:harshithreddi1289@gmail.com"
                label="Email"
                value="harshithreddi1289@gmail.com"
                icon={<Mail className="h-5 w-5" />}
              />
              <ContactLink href="https://wa.me/" label="WhatsApp" value="Start a chat" icon={<MessageCircle className="h-5 w-5" />} />
            </div>
            <a
              href="https://editorsforyouagency.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="mt-8 block rounded-2xl border border-white/12 bg-black/30 p-4 text-sm font-bold text-white/72 transition hover:border-cyanFlash hover:text-white"
            >
              Portfolio reference: editorsforyouagency.vercel.app
            </a>
          </motion.aside>
        </div>
        <footer className="mt-16 border-t border-white/10 py-8 text-center text-sm text-white/45">
          (c) 2026 Harshith. Graphic Designer and Creative Designer.
        </footer>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder: string }) {
  return (
    <label>
      <span className="mb-2 block text-sm font-bold text-white/70">{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="focus-ring h-12 w-full rounded-2xl border border-white/12 bg-black/30 px-4 text-white placeholder:text-white/35"
      />
    </label>
  );
}

function ContactLink({ href, label, value, icon }: { href: string; label: string; value: string; icon: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="focus-ring flex items-center gap-4 rounded-2xl border border-white/12 bg-white/6 p-4 transition hover:border-vibrantPink hover:bg-white/10">
      <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-ink">{icon}</span>
      <span>
        <span className="block text-xs font-black uppercase tracking-[0.2em] text-cyanFlash">{label}</span>
        <span className="font-bold text-white/84">{value}</span>
      </span>
    </a>
  );
}
