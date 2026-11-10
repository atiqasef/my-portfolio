"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/data";
import {
  duration,
  easeOut,
  getHeroContainer,
  getHeroItem,
  usePrefersReducedMotion,
} from "@/lib/motion";
import AccentWord from "./AccentWord";

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const container = getHeroContainer(prefersReducedMotion);
  const item = getHeroItem(prefersReducedMotion);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-hero text-ondark"
    >
      <div className="hero-atmosphere" aria-hidden>
        <div className="hero-atmosphere__glow" />
        <div className="hero-atmosphere__grain" />
      </div>

      <div className="relative z-10 w-full px-[5%] py-20 md:py-28">
        <motion.div
          className="max-w-5xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={item}
            className="font-mono text-xs text-ondark-muted tracking-[0.14em] mb-8"
          >
            {siteConfig.location} · Freelance
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display font-light text-[clamp(2.4rem,6.5vw,4.75rem)] leading-[1.08] tracking-tight text-ondark mb-8 max-w-4xl"
          >
            Building fast, scalable, and{" "}
            <AccentWord onDark>beautiful</AccentWord> web applications.
          </motion.h1>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-3 mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              transition={{ duration: duration.fast, ease: easeOut }}
              className="inline-flex items-center px-6 py-3 bg-ondark text-hero font-mono text-sm font-medium hover:bg-accent-soft transition-colors tracking-[0.04em]"
            >
              View projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              transition={{ duration: duration.fast, ease: easeOut }}
              className="inline-flex items-center px-6 py-3 border border-ondark/25 text-ondark font-mono text-sm hover:border-accent-soft hover:text-accent-soft transition-colors tracking-[0.04em]"
            >
              Contact me
            </motion.a>
            <a
              href={siteConfig.cv}
              download
              className="inline-flex items-center ml-1 font-mono text-sm text-ondark-muted hover:text-accent-soft transition-colors tracking-[0.04em] underline underline-offset-4 decoration-ondark/25 hover:decoration-accent-soft"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-4">
            <div className="relative w-24 h-24 sm:w-[7.5rem] sm:h-[7.5rem] rounded-full overflow-hidden border border-ondark/15 shrink-0">
              <Image
                src="/profile/profile.jpg"
                alt="Atiq Asef"
                fill
                sizes="120px"
                className="object-cover"
                priority
              />
            </div>
            <div className="font-mono text-xs text-ondark-muted tracking-[0.08em] leading-relaxed">
              <div className="text-ondark">{siteConfig.name}</div>
              <div>{siteConfig.title}</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
