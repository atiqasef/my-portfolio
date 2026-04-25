"use client";

import { motion } from "framer-motion";
import { siteConfig, journey } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import FadeUp from "./FadeUp";

export default function About() {
  return (
    <section id="about" className="py-28 relative z-10">
      <div className="container mx-auto px-[5%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left */}
          <div>
            <SectionHeader
              tag="01 — About"
              title={<>The story<br />behind the code.</>}
            />

            <div className="space-y-5">
              {siteConfig.bio.map((para, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <p
                    className="text-text-muted text-[1.05rem] leading-[1.85] font-light"
                    dangerouslySetInnerHTML={{
                      __html: para
                        .replace("Atiq Asef", "<strong class='text-text font-medium'>Atiq Asef</strong>")
                        .replace("Dhaka, Bangladesh", "<span class='text-green'>Dhaka, Bangladesh</span>")
                        .replace("RUSHD DEV", "<strong class='text-text font-medium'>RUSHD DEV</strong>")
                        .replace("English Literature", "<strong class='text-text font-medium'>English Literature</strong>")
                        .replace("JavaScript ecosystem", "<span class='text-green'>JavaScript ecosystem</span>"),
                    }}
                  />
                </FadeUp>
              ))}
            </div>

            {/* Stats */}
            <FadeUp delay={0.3}>
              <div className="grid grid-cols-2 gap-4 mt-10">
                {siteConfig.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-surface border border-border rounded p-6"
                  >
                    <div className="font-display font-extrabold text-4xl text-green tracking-tight">
                      {stat.num}
                    </div>
                    <div className="font-mono text-xs text-text-faint tracking-[0.06em] mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right — Journey */}
          <div className="flex flex-col gap-5">
            {journey.map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-surface border border-border rounded p-7 relative overflow-hidden group"
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-green" />
                  <div className="font-mono text-xs text-green tracking-[0.1em] mb-2">
                    {item.year}
                  </div>
                  <div className="font-display font-semibold text-base mb-2 group-hover:text-green transition-colors">
                    {item.title}
                  </div>
                  <div className="text-text-muted text-sm leading-relaxed font-light">
                    {item.desc}
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
