"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig, journey } from "@/lib/data";
import {
  easeOut,
  getFadeUp,
  getStagger,
  usePrefersReducedMotion,
} from "@/lib/motion";
import SectionHeader from "./SectionHeader";
import FadeUp from "./FadeUp";

export default function About() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(timelineRef, { once: true, margin: "-80px" });
  const item = getFadeUp(prefersReducedMotion);
  const container = getStagger(prefersReducedMotion);

  return (
    <section id="about" className="py-24 md:py-28 relative z-10">
      <div className="container mx-auto px-[5%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <div>
            <SectionHeader
              tag="01 — About"
              title={
                <>
                  The story
                  <br />
                  behind the code.
                </>
              }
            />

            <div className="space-y-5">
              {siteConfig.bio.map((para, i) => (
                <FadeUp key={i} delay={i * 0.08}>
                  <p className="text-ink-muted text-[1.05rem] leading-[1.85] font-light">
                    {para.split(/(Atiq Asef|Dhaka, Bangladesh|English Literature|JavaScript ecosystem)/g).map((part, idx) => {
                      if (part === "Atiq Asef" || part === "English Literature") {
                        return (
                          <strong key={idx} className="text-ink font-medium">
                            {part}
                          </strong>
                        );
                      }
                      if (part === "Dhaka, Bangladesh" || part === "JavaScript ecosystem") {
                        return (
                          <span key={idx} className="text-accent">
                            {part}
                          </span>
                        );
                      }
                      return <span key={idx}>{part}</span>;
                    })}
                  </p>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.28}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-10">
                {siteConfig.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border border-border bg-surface p-5 sm:p-6"
                  >
                    <div className="font-display font-extrabold text-3xl sm:text-4xl text-accent tracking-tight">
                      {stat.num}
                    </div>
                    <div className="font-mono text-xs text-ink-faint tracking-[0.06em] mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Journey timeline */}
          <div ref={timelineRef} className="relative pl-8 sm:pl-10">
            {/* Track */}
            <div
              aria-hidden
              className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-border"
            />
            {/* Draw-on-scroll line */}
            <motion.div
              aria-hidden
              className="absolute left-[7px] sm:left-[9px] top-2 w-px bg-accent origin-top"
              initial={{ scaleY: prefersReducedMotion ? 1 : 0 }}
              animate={{ scaleY: inView || prefersReducedMotion ? 1 : 0 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 1.1, ease: easeOut }
              }
              style={{ bottom: 8 }}
            />

            <motion.div
              variants={container}
              initial="hidden"
              animate={inView || prefersReducedMotion ? "visible" : "hidden"}
              className="flex flex-col gap-6"
            >
              {journey.map((entry) => (
                <motion.div key={entry.year} variants={item} className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-8 sm:-left-10 top-2 w-3.5 h-3.5 rounded-full border-2 border-accent bg-bg"
                  />
                  <div className="font-mono text-xs text-accent tracking-[0.1em] mb-2">
                    {entry.year}
                  </div>
                  <h3 className="font-display font-semibold text-base text-ink mb-2">
                    {entry.title}
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed font-light">
                    {entry.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
