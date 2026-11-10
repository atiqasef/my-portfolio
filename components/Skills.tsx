"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import {
  getFadeUp,
  getStagger,
  usePrefersReducedMotion,
} from "@/lib/motion";
import SectionHeader from "./SectionHeader";
import AccentWord from "./AccentWord";

export default function Skills() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const container = getStagger(prefersReducedMotion);
  const item = getFadeUp(prefersReducedMotion);

  return (
    <section id="skills" className="py-24 md:py-32 bg-bg2 relative z-10">
      <div className="container mx-auto px-[5%] max-w-6xl">
        <SectionHeader
          tag="Skills"
          title={
            <>
              Tools I <AccentWord>use</AccentWord>
            </>
          }
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 border-t border-border pt-10"
        >
          {skillGroups.map((group) => (
            <motion.div key={group.label} variants={item}>
              <h3 className="font-mono text-xs text-ink-faint tracking-[0.14em] mb-5">
                {group.label}
              </h3>
              <ul className="space-y-3">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="font-display font-light text-lg text-ink tracking-tight border-b border-border/70 pb-3"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
