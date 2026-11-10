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

interface Project {
  title: string;
  description: string;
  stack: string[];
  color: string;
  image?: string;
  live: string;
  github?: string;
}

function ProjectCard({ project }: { project: Project }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const hasLive = Boolean(project.live) && project.live !== "#";
  const hasGithub = Boolean(project.github) && project.github !== "#";
  const item = getFadeUp(prefersReducedMotion);

  return (
    <motion.article
      variants={item}
      whileHover={
        prefersReducedMotion
          ? undefined
          : { y: -4, transition: { duration: duration.fast, ease: easeOut } }
      }
      className="bg-surface border border-border overflow-hidden flex flex-col h-full group hover:border-border2 hover:shadow-lift transition-[border-color,box-shadow] duration-300"
    >
      <div className="relative h-48 sm:h-52 bg-bg2 overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.12]"
          style={{
            background: `radial-gradient(circle at 30% 40%, ${project.color}, transparent 65%)`,
          }}
        />
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display font-extrabold text-5xl text-ink/10 tracking-tight">
              {project.title.slice(0, 2)}
            </span>
          </div>
        )}
      </div>

      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <h3 className="font-display font-bold text-xl tracking-tight mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-ink-muted text-sm leading-relaxed font-light flex-1 mb-5">
          {project.description}
        </p>

        {project.stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[0.68rem] text-ink-faint bg-bg2 border border-border px-2.5 py-1 tracking-[0.03em]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-3 mt-auto">
          {hasLive && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              whileHover={prefersReducedMotion ? undefined : { y: -1 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center font-mono text-xs text-white bg-accent px-4 py-2 hover:bg-accent-dark transition-colors tracking-[0.04em]"
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
              className="inline-flex items-center font-mono text-xs text-ink-muted border border-border px-4 py-2 hover:border-accent hover:text-accent transition-colors tracking-[0.04em]"
            >
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const container = getStagger(prefersReducedMotion);

  return (
    <section id="projects" className="py-24 md:py-28 relative z-10">
      <div className="container mx-auto px-[5%]">
        <SectionHeader
          tag="03 — Projects"
          title={
            <>
              Things I&apos;ve
              <br />
              shipped.
            </>
          }
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
