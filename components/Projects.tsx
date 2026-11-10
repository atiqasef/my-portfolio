"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import {
  duration,
  easeOut,
  getFadeUp,
  getStagger,
  usePrefersReducedMotion,
} from "@/lib/motion";
import SectionHeader from "./SectionHeader";
import AccentWord from "./AccentWord";

interface Project {
  title: string;
  description: string;
  stack: string[];
  image?: string;
  live: string;
  github?: string;
}

function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const item = getFadeUp(prefersReducedMotion);
  const hasLive = Boolean(project.live) && project.live !== "#";
  const hasGithub = Boolean(project.github) && project.github !== "#";
  const reverse = index % 2 === 1;

  return (
    <motion.article
      variants={item}
      className="group border-t border-border py-12 md:py-16"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Screenshot */}
        <div className="relative aspect-[16/10] overflow-hidden bg-bg2 border border-border">
          {project.image ? (
            <motion.div
              className="absolute inset-0"
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { scale: 1.03, transition: { duration: duration.slow, ease: easeOut } }
              }
            >
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </motion.div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center px-6">
              {/* TODO: Add project screenshot when available */}
              <span className="font-display font-light text-4xl md:text-5xl text-ink/15 tracking-tight text-center">
                {project.title}
              </span>
            </div>
          )}
        </div>

        {/* Copy */}
        <div className="flex flex-col">
          <a
            href={hasLive ? project.live : undefined}
            target={hasLive ? "_blank" : undefined}
            rel={hasLive ? "noreferrer" : undefined}
            className={`inline-flex items-center gap-3 mb-4 group/title ${
              hasLive ? "hover:text-accent-dark" : "pointer-events-none"
            } transition-colors`}
          >
            <h3 className="font-display font-light text-2xl md:text-3xl tracking-tight text-ink group-hover/title:text-accent-dark transition-colors">
              {project.title}
            </h3>
            <span
              aria-hidden
              className="inline-block text-ink-faint text-xl transition-transform duration-300 ease-out group-hover/title:translate-x-1 group-hover/title:-translate-y-1 motion-reduce:transition-none"
            >
              ↗
            </span>
          </a>

          <p className="text-ink-muted text-[1.02rem] leading-relaxed font-light mb-6 max-w-md">
            {project.description}
          </p>

          {project.stack.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-7">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[0.68rem] text-ink-faint border border-border px-2.5 py-1 tracking-[0.03em]"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-5 mt-auto">
            {hasLive && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                whileHover={prefersReducedMotion ? undefined : { y: -1 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                className="font-mono text-xs text-ink tracking-[0.06em] underline underline-offset-4 decoration-border2 hover:decoration-accent-dark hover:text-accent-dark transition-colors"
              >
                Live
              </motion.a>
            )}
            {hasGithub && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                whileHover={prefersReducedMotion ? undefined : { y: -1 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                className="font-mono text-xs text-ink-muted tracking-[0.06em] underline underline-offset-4 decoration-border2 hover:decoration-accent-dark hover:text-accent-dark transition-colors"
              >
                GitHub
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const container = getStagger(prefersReducedMotion);

  return (
    <section id="projects" className="py-24 md:py-32 bg-bg relative z-10">
      <div className="container mx-auto px-[5%] max-w-6xl">
        <SectionHeader
          tag="Projects"
          title={
            <>
              Selected <AccentWord>work</AccentWord>
            </>
          }
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="border-b border-border"
        >
          {projects.map((project, index) => (
            <ProjectRow key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
