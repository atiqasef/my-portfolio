// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/data";

// ─── Typewriter ────────────────────────────────────────────────────────────────

const TITLES = ["Full Stack Developer", "React Specialist", "Next.js Expert"] as const;
const TYPING_SPEED = 65;   // ms per char, typing
const DELETING_SPEED = 32;   // ms per char, deleting
const PAUSE_AFTER = 1800; // ms to hold the full word before deleting
const PAUSE_BETWEEN = 380;  // ms empty pause before next word

type Phase = "typing" | "pausing" | "deleting" | "waiting";

function useTypewriter(words: readonly string[]) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
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
  }, [displayed, phase, wordIndex, words]);

  return displayed;
}

// ─── Fade helper ───────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

// ─── Component ─────────────────────────────────────────────────────────────────

export default function Hero() {
  const typewriterText = useTypewriter(TITLES);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <div className="container mx-auto px-[5%] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center py-20">

          {/* ── Left Content ─────────────────────────────────────── */}
          <div>
            {/* Available tag */}
            <motion.div {...fadeUp(0.1)} className="mb-7">
              <span className="inline-flex items-center gap-2 font-mono text-xs text-green border border-green/20 bg-green/8 px-4 py-2 rounded-sm tracking-[0.08em]">
                <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse2" />
                Available for Freelance Work
              </span>
            </motion.div>

            {/* Name — with animated gradient glow behind it */}
            <motion.div {...fadeUp(0.2)} className="relative mb-4">
              {/*
                Glow layer — sits behind the text, breathes in & out.
                We use two layered radial gradients:
                  • Tight hot-spot (green) that pulses scale + opacity
                  • Wider ambient halo that oscillates gently
              */}
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 rounded-xl"
                style={{
                  background:
                    "radial-gradient(ellipse 72% 60% at 18% 55%, rgba(0,255,136,0.18) 0%, transparent 70%)",
                  filter: "blur(28px)",
                }}
                animate={{
                  opacity: [0.6, 1, 0.6],
                  scale: [0.95, 1.04, 0.95],
                  background: [
                    "radial-gradient(ellipse 72% 60% at 18% 55%, rgba(0,255,136,0.18) 0%, transparent 70%)",
                    "radial-gradient(ellipse 85% 70% at 22% 52%, rgba(0,255,136,0.26) 0%, transparent 68%)",
                    "radial-gradient(ellipse 72% 60% at 18% 55%, rgba(0,255,136,0.18) 0%, transparent 70%)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <h1 className="font-display font-extrabold text-[clamp(2.8rem,6vw,5rem)] leading-[1.05] tracking-tight">
                Atiq
                <br />
                <span className="text-green">Asef.</span>
              </h1>
            </motion.div>

            {/* Typewriter title */}
            <motion.p
              {...fadeUp(0.3)}
              className="font-mono text-base text-text-muted mb-6 tracking-[0.04em] h-6 flex items-center gap-0"
            >
              <span className="text-text-faint mr-2">//</span>
              <span>{typewriterText}</span>
              {/* blinking cursor */}
              <motion.span
                className="ml-[2px] inline-block w-[2px] h-[1em] bg-green rounded-sm align-middle"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.85, repeat: Infinity, ease: "steps(1)" }}
              />
            </motion.p>

            {/* Bio */}
            <motion.p
              {...fadeUp(0.4)}
              className="text-text-muted text-[1.05rem] leading-relaxed mb-10 max-w-[440px] font-light"
            >
              {siteConfig.tagline} From concept to deployment — turning ideas
              into digital products that actually work.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green text-bg font-mono text-sm font-medium rounded hover:bg-green-dark transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,255,136,0.25)] tracking-[0.04em]"
              >
                View Projects →
              </a>
              <a
                href={siteConfig.booking}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border2 text-text-muted font-mono text-sm rounded hover:border-green hover:text-green transition-all hover:-translate-y-0.5 tracking-[0.04em]"
              >
                Book a Call
              </a>
              <a
                href={siteConfig.cv}
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-border2 text-text-muted font-mono text-sm rounded hover:border-green hover:text-green transition-all hover:-translate-y-0.5 tracking-[0.04em]"
              >
                ↓ Download CV
              </a>
            </motion.div>
          </div>

          {/* ── Right — Profile Image ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">



              {/* Image frame */}
              <div className="w-w-[280px] h-[280px] md:w-[340px] md:h-[340px] relative rounded-full overflow-hidden border-4 border-green shadow-[0_0_40px_rgba(0,255,136,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-br from-green/8 to-transparent z-10" />
                <div>
                  <Image
                    src="/profile/profile.jpg"
                    alt="Atiq Asef"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-surface border border-border2 px-4 py-2 rounded font-mono text-xs text-text-muted flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse2" />
                Dhaka, Bangladesh · Open to work
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[0.65rem] text-text-faint tracking-[0.1em]">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-text-faint to-transparent animate-scrollLine" />
      </div>
    </section>
  );
}
