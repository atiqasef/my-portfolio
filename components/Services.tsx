"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import {
  duration,
  easeOut,
  getFadeUp,
  getStagger,
  usePrefersReducedMotion,
} from "@/lib/motion";
import SectionHeader from "./SectionHeader";
import { SkillIcon } from "./Icons";

export default function Services() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const container = getStagger(prefersReducedMotion);
  const item = getFadeUp(prefersReducedMotion);

  return (
    <section id="services" className="py-24 md:py-28 bg-bg2 relative z-10">
      <div className="container mx-auto px-[5%]">
        <SectionHeader
          tag="04 — Services"
          title={
            <>
              What I can
              <br />
              do for you.
            </>
          }
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { y: -3, transition: { duration: duration.fast, ease: easeOut } }
              }
              className="bg-surface border border-border p-8 md:p-10 group hover:border-accent/30 hover:shadow-soft transition-[border-color,box-shadow] duration-250"
            >
              <div className="w-11 h-11 border border-accent/20 bg-accent/8 flex items-center justify-center text-accent mb-6">
                <SkillIcon name={service.icon} size={20} />
              </div>

              <h3 className="font-display font-bold text-lg tracking-tight mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-ink-muted text-sm leading-relaxed font-light">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
