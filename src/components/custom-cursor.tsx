"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 420, damping: 34 });
  const smoothY = useSpring(y, { stiffness: 420, damping: 34 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      <motion.div
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-40 h-10 w-10 rounded-full border border-cyanFlash/70 mix-blend-difference"
        style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="cursor-dot pointer-events-none fixed left-0 top-0 z-40 h-2.5 w-2.5 rounded-full bg-vibrantPink"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
