// components/Skills.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { skills } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import FadeUp from "./FadeUp";

// ─── Animation variants ────────────────────────────────────────────────────────

/**
 * Container variant — when this enters the viewport it fires
 * `staggerChildren` which cascades into each chip.
 */
const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      // 50 ms between each chip, starts after 80 ms initial delay
      staggerChildren:  0.05,
      delayChildren:    0.08,
    },
  },
};

/**
 * Chip variant — scale up from 82 % + fade in + slight upward drift.
 * The cubic ease matches the rest of the site's easing curve.
 */
const chipVariants: Variants = {
  hidden: {
    opacity: 0,
    scale:   0.82,
    y:       14,
  },
  visible: {
    opacity: 1,
    scale:   1,
    y:       0,
    transition: {
      duration: 0.38,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

// ─── SkillChip ─────────────────────────────────────────────────────────────────

function SkillChip({
  name,
  icon,
  learning = false,
}: {
  name:      string;
  icon:      string;
  learning?: boolean;
}) {
  return (
    <motion.div
      variants={chipVariants}
      whileHover={{
        y:           -4,
        scale:       1.05,
        borderColor: "#00ff88",
        transition:  { duration: 0.18 },
      }}
      className="bg-surface border border-border rounded p-5 flex flex-col items-center gap-3 cursor-default relative text-center group transition-colors"
    >
      {learning && (
        <span className="absolute top-2 right-2 bg-blue-500/10 border border-blue-400/25 text-blue-400 font-mono text-[0.58rem] px-1.5 py-0.5 rounded tracking-[0.05em]">
          Learning
        </span>
      )}
      <span className="text-2xl leading-none">{icon}</span>
      <span className="font-mono text-xs text-text-muted group-hover:text-text transition-colors tracking-[0.04em]">
        {name}
      </span>
    </motion.div>
  );
}

// ─── AnimatedGrid ──────────────────────────────────────────────────────────────

/**
 * Wraps a grid with the stagger container.
 * `whileInView` on the container fires once — individual chips cascade via
 * `staggerChildren` in `gridVariants`.
 */
function AnimatedGrid({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
    >
      {children}
    </motion.div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────────

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-bg2 relative z-10">
      <div className="container mx-auto px-[5%]">
        <SectionHeader
          tag="02 — Skills"
          title={<>Tech stack &amp;<br />tools I use.</>}
        />

        {/* Current skills */}
        <FadeUp>
          <AnimatedGrid>
            {skills.current.map((skill) => (
              <SkillChip key={skill.name} {...skill} />
            ))}
          </AnimatedGrid>
        </FadeUp>

        {/* Divider */}
        <FadeUp delay={0.2}>
          <div className="mt-10 mb-5 pt-4 border-t border-border">
            <span className="font-mono text-xs text-text-faint tracking-[0.1em]">
              CURRENTLY LEARNING
            </span>
          </div>
        </FadeUp>

        {/* Learning skills */}
        <FadeUp delay={0.3}>
          <AnimatedGrid>
            {skills.learning.map((skill) => (
              <SkillChip key={skill.name} {...skill} learning />
            ))}
          </AnimatedGrid>
        </FadeUp>
      </div>
    </section>
  );
}
