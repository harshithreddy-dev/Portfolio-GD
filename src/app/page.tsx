"use client";

import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { CreativeBackground } from "@/components/creative-background";
import { CustomCursor } from "@/components/custom-cursor";
import { Hero } from "@/components/hero";
import { Loader } from "@/components/loader";
import { Marquee } from "@/components/marquee";
import { Portfolio } from "@/components/portfolio";
import { Process } from "@/components/process";
import { ScrollControls } from "@/components/scroll-controls";
import { Services } from "@/components/services";
import { Tools } from "@/components/tools";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-white">
      <Loader />
      <CustomCursor />
      <ScrollControls />
      <CreativeBackground />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Tools />
      <Contact />
    </main>
  );
}
