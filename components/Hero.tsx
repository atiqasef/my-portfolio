"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/data";
import {
  getHeroContainer,
  getHeroItem,
  usePrefersReducedMotion,
} from "@/lib/motion";

const TITLES = ["Full Stack Developer", "React Specialist", "Next.js Expert"] as const;
const TYPING_SPEED = 65;
const DELETING_SPEED = 32;
const PAUSE_AFTER = 1800;
const PAUSE_BETWEEN = 380;

type Phase = "typing" | "pausing" | "deleting" | "waiting";

function useTypewriter(words: readonly string[], enabled: boolean) {
  const [displayed, setDisplayed] = useState(enabled ? "" : words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!enabled) {
      setDisplayed(words[0]);
      return;
    }

    const current = words[wordIndex];

    const schedule = (fn: () => void, delay: number) => {
      timeoutRef.current = setTimeout(fn, delay);
    };

    if (phase === "typing") {
      if (displayed.length < current.length) {
        schedule(() => setDisplayed(current.slice(0, displayed.length + 1)), TYPING_SPEED);
      } else {
        schedule(() => setPhase("pausing"), PAUSE_AFTER);
      }
    } else if (phase === "pausing") {
      schedule(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        schedule(() => setDisplayed((d) => d.slice(0, -1)), DELETING_SPEED);
      } else {
        schedule(() => {
          setWordIndex((i) => (i + 1) % words.length);
          setPhase("waiting");
        }, PAUSE_BETWEEN);
      }
    } else if (phase === "waiting") {
      schedule(() => setPhase("typing"), 0);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, phase, wordIndex, words, enabled]);

  return displayed;
}

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const typewriterText = useTypewriter(TITLES, !prefersReducedMotion);
  const container = getHeroContainer(prefersReducedMotion);
  const item = getHeroItem(prefersReducedMotion);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-stretch pt-16 overflow-hidden"
    >
      {/* Full-bleed atmospheric gradient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 78% 18%, rgba(47,91,255,0.10) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 8% 78%, rgba(47,91,255,0.05) 0%, transparent 50%),
            linear-gradient(165deg, #F5F7FA 0%, #EEF1F6 48%, #E8ECF4 100%)
          `,
        }}
      />

      <div className="w-full min-h-[calc(100vh-4rem)] grid grid-cols-1 lg:grid-cols-2 items-stretch">
        {/* Copy */}
        <motion.div
          className="flex flex-col justify-center px-[5%] py-16 lg:py-20 lg:pr-10 xl:pr-16"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={item}
            className="font-mono text-xs text-accent tracking-[0.14em] mb-6"
          >
            {siteConfig.location} · Freelance
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display font-extrabold text-[clamp(3rem,7.5vw,5.25rem)] leading-[0.95] tracking-tight text-ink mb-6"
          >
            Atiq Asef
          </motion.h1>

          <motion.p
            variants={item}
            className="font-mono text-base text-ink-muted mb-5 tracking-[0.03em] min-h-[1.5rem] flex items-center"
            aria-live="polite"
          >
            <span>{typewriterText || "\u00A0"}</span>
            {prefersReducedMotion ? (
              <span className="ml-[2px] inline-block w-[2px] h-[1em] bg-accent align-middle" />
            ) : (
              <motion.span
                className="ml-[2px] inline-block w-[2px] h-[1em] bg-accent align-middle"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.85, repeat: Infinity, ease: "steps(1)" }}
              />
            )}
          </motion.p>

          <motion.p
            variants={item}
            className="text-ink-muted text-[1.05rem] leading-relaxed mb-10 max-w-[28rem] font-light"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <motion.a
              href="#projects"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center px-6 py-3 bg-accent text-white font-mono text-sm font-medium rounded hover:bg-accent-dark transition-colors tracking-[0.04em]"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center px-6 py-3 border border-border2 text-ink font-mono text-sm rounded hover:border-accent hover:text-accent transition-colors tracking-[0.04em]"
            >
              Contact me
            </motion.a>
            <a
              href={siteConfig.cv}
              download
              className="inline-flex items-center ml-1 font-mono text-sm text-ink-faint hover:text-accent transition-colors tracking-[0.04em] underline underline-offset-4 decoration-border2 hover:decoration-accent"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Dominant edge-to-edge portrait plane */}
        <motion.div
          className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-full"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }
          }
        >
          <Image
            src="/profile/hero-portrait.jpg"
            alt="Atiq Asef"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[center_20%]"
            priority
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(245,247,250,0.78) 0%, rgba(245,247,250,0.2) 14%, transparent 34%), linear-gradient(180deg, transparent 80%, rgba(245,247,250,0.2) 100%)",
            }}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-[5%] hidden lg:flex flex-col items-start gap-2 z-10">
        <span className="font-mono text-[0.65rem] text-ink-faint tracking-[0.12em]">
          SCROLL
        </span>
        <div
          className={`w-px h-10 bg-gradient-to-b from-ink-faint to-transparent ${
            prefersReducedMotion ? "" : "animate-scrollLine"
          }`}
        />
      </div>
    </section>
  );
}
