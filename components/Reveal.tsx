"use client";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/** Scroll reveal (`.lift` in the mockups): opacity 0→1 + 24px rise, once,
 *  when 15% into view. Under reduced motion: opacity only, no movement.
 *  Uses only opacity/transform — the CSS hover lift uses `translate`, so the
 *  channels never collide (locked lesson from the mockup build). */
export default function Reveal({
  children,
  as = "div",
  className,
  delay = 0,
}: {
  children: ReactNode;
  as?: "div" | "section" | "figure" | "li" | "article";
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const M = motion[as];
  return (
    <M
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </M>
  );
}
