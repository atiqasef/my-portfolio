"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import {
  duration,
  easeOut,
  getFadeUp,
  getStagger,
  usePrefersReducedMotion,
} from "@/lib/motion";
import SectionHeader from "./SectionHeader";
import { SkillIcon } from "./Icons";

export default function Skills() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const container = getStagger(prefersReducedMotion);
  const item = getFadeUp(prefersReducedMotion);

  return (
    <section id="skills" className="py-24 md:py-28 bg-bg2 relative z-10">
      <div className="container mx-auto px-[5%]">
        <SectionHeader
          tag="02 — Skills"
          title={
            <>
              Tech stack &amp;
              <br />
              tools I use.
            </>
          }
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3"
        >
          {skills.current.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: -3,
                      transition: { duration: duration.fast, ease: easeOut },
                    }
              }
              className="bg-surface border border-border p-4 sm:p-5 flex flex-col items-center gap-3 text-center group hover:border-accent/40 hover:shadow-soft transition-[border-color,box-shadow] duration-200"
            >
              <span className="text-accent">
                <SkillIcon name={skill.icon} size={22} />
              </span>
              <span className="font-mono text-[0.7rem] sm:text-xs text-ink-muted group-hover:text-ink transition-colors tracking-[0.04em]">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
