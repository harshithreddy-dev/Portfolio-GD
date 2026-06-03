"use client";

import { motion, useMotionValue, useSpring, type HTMLMotionProps } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { spring } from "./motion";

type MagneticButtonProps = Omit<HTMLMotionProps<"a">, "children"> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function MagneticButton({
  children,
  className = "",
  variant = "primary",
  ...props
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18 });
  const springY = useSpring(y, { stiffness: 260, damping: 18 });

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.28);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.28);
  }

  return (
    <motion.a
      {...props}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.045 }}
      whileTap={{ scale: 0.98 }}
      transition={spring}
      className={[
        "focus-ring group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black uppercase tracking-[0.18em] transition",
        variant === "primary"
          ? "bg-white text-ink shadow-glow hover:bg-cyanFlash"
          : "border border-white/20 bg-white/8 text-white hover:border-cyanFlash/70 hover:bg-cyanFlash/10",
        className
      ].join(" ")}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </motion.a>
  );
}
