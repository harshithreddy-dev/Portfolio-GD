"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useMemo, useState } from "react";
import { portfolioProjects, projectCategories, type PortfolioProject } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { fadeUp, stagger } from "./motion";

export function Portfolio() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("All");
  const [selected, setSelected] = useState<PortfolioProject | null>(null);
  const filtered = useMemo(
    () => (active === "All" ? portfolioProjects : portfolioProjects.filter((project) => project.category === active)),
    [active]
  );

  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="A gallery built for adding new work without touching the UI."
          copy="Filter by category, preview details, and drop fresh projects into one typed data file when the next design deserves the spotlight."
        />
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8 flex flex-wrap gap-2">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`focus-ring rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.18em] transition ${
                active === category
                  ? "border-cyanFlash bg-cyanFlash text-ink"
                  : "border-white/14 bg-white/8 text-white/70 hover:border-vibrantPink hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        <motion.div layout variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.button
                layout
                key={project.id}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.96 }}
                onClick={() => setSelected(project)}
                className="focus-ring group mb-5 block w-full break-inside-avoid overflow-hidden rounded-[28px] border border-white/12 bg-white/8 text-left shadow-glow"
                style={{
                  borderColor: `${project.palette[0]}66`,
                  background: `linear-gradient(145deg, ${project.palette[0]}24, ${project.palette[1]}18, rgba(255,255,255,0.05))`
                }}
              >
                <div className={`relative overflow-hidden ${index % 3 === 1 ? "aspect-[4/5]" : index % 3 === 2 ? "aspect-[1/1]" : "aspect-[4/3]"}`}>
                  <Image src={project.image} alt={`${project.title} portfolio artwork`} fill className="object-cover transition duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div
                    className="absolute inset-0 opacity-90"
                    style={{
                      background: `linear-gradient(to top, rgba(0,0,0,.86), ${project.palette[0]}22 42%, transparent)`
                    }}
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="mb-3 flex gap-2">
                      {project.palette.slice(0, 3).map((color) => (
                        <span key={color} className="h-3 w-3 rounded-full border border-white/35" style={{ backgroundColor: color }} />
                      ))}
                    </div>
                    <p className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: project.palette[1] }}>{project.category}</p>
                    <h3 className="mt-1 font-display text-2xl font-black">{project.title}</h3>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence>
        {selected ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/78 p-4 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.title} details`}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 30, scale: 0.96 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 30, scale: 0.96 }}
              className="glass relative grid max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[30px] lg:grid-cols-[1.2fr_.8fr] lg:overflow-hidden"
              style={{
                borderColor: `${selected.palette[0]}66`,
                background: `linear-gradient(145deg, rgba(5,5,5,.92), ${selected.palette[0]}24, ${selected.palette[1]}18)`
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <div
                className="relative grid min-h-[360px] place-items-center overflow-hidden bg-black/72 p-4 sm:min-h-[520px] lg:h-[82vh]"
                style={{
                  background: `radial-gradient(circle at 20% 10%, ${selected.palette[0]}30, transparent 34%), radial-gradient(circle at 90% 80%, ${selected.palette[1]}26, transparent 30%), #050505`
                }}
              >
                <Image
                  src={selected.image}
                  alt={`${selected.title} expanded artwork`}
                  fill
                  className="object-contain p-3 sm:p-6"
                  sizes="(max-width: 1024px) 92vw, 62vw"
                  priority
                />
              </div>
              <div className="p-6 sm:p-8 lg:overflow-y-auto">
                <button
                  aria-label="Close project preview"
                  onClick={() => setSelected(null)}
                  className="focus-ring absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-ink"
                >
                  <X className="h-5 w-5" />
                </button>
                <p className="text-xs font-black uppercase tracking-[0.26em]" style={{ color: selected.palette[1] }}>{selected.category} / {selected.year}</p>
                <h3 className="mt-5 font-display text-4xl font-black leading-none sm:text-6xl">{selected.title}</h3>
                <p className="mt-5 text-lg leading-8 text-white/72">{selected.brief}</p>
                <div className="mt-8 flex gap-3">
                  {selected.palette.map((color) => (
                    <span key={color} className="h-10 w-10 rounded-full border border-white/20" style={{ backgroundColor: color }} />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
