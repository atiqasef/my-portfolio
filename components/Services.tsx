"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import FadeUp from "./FadeUp";

export default function Services() {
  return (
    <section id="services" className="py-28 bg-bg2 relative z-10">
      <div className="container mx-auto px-[5%]">
        <SectionHeader
          tag="04 — Services"
          title={<>What I can<br />do for you.</>}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <FadeUp key={service.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="bg-surface border border-border rounded p-10 relative overflow-hidden group transition-colors hover:border-border2"
              >
                {/* Bottom shimmer on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.35 }}
                />

                {/* Icon */}
                <div className="w-12 h-12 rounded bg-green/8 border border-green/15 flex items-center justify-center text-2xl mb-6">
                  {service.icon}
                </div>

                <h3 className="font-display font-bold text-lg tracking-tight mb-3 group-hover:text-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed font-light">
                  {service.desc}
                </p>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
