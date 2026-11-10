"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import {
  getFadeUp,
  getStagger,
  usePrefersReducedMotion,
} from "@/lib/motion";
import SectionHeader from "./SectionHeader";
import AccentWord from "./AccentWord";

export default function Services() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const container = getStagger(prefersReducedMotion);
  const item = getFadeUp(prefersReducedMotion);

  return (
    <section id="services" className="py-24 md:py-32 bg-bg2 relative z-10">
      <div className="container mx-auto px-[5%] max-w-6xl">
        <SectionHeader
          tag="Services"
          title={
            <>
              What I can <AccentWord>do</AccentWord>
            </>
          }
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="border-t border-border"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="grid grid-cols-1 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-3 md:gap-10 py-8 md:py-10 border-b border-border"
            >
              <h3 className="font-display font-light text-xl md:text-2xl tracking-tight text-ink">
                {service.title}
              </h3>
              <p className="text-ink-muted text-[1.02rem] leading-relaxed font-light max-w-xl">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
