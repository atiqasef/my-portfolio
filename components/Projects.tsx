// components/Projects.tsx
"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import FadeUp from "./FadeUp";

// ─── Types ─────────────────────────────────────────────────────────────────────

interface TiltState {
  rotateX: number;
  rotateY: number;
  glareX: number; // 0–100 %, used for the specular glare
  glareY: number;
  isHovered: boolean;
}

const TILT_AMOUNT = 10;   // max degrees of rotation
const GLARE_OPACITY = 0.07; // very subtle specular highlight

// ─── TiltCard ──────────────────────────────────────────────────────────────────

interface Project {
  title: string;
  description: string;
  stack: string[];
  color: string;
  icon: string;
  live: string;
  github: string;
}

function TiltCard({ project, delay }: { project: Project; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [tilt, setTilt] = useState<TiltState>({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
    isHovered: false,
  });

  // Compute tilt angles from raw mouse position.
  // Normalise to [-0.5, 0.5] relative to card centre.
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 → 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      rotateX: -ny * TILT_AMOUNT,           // tilt up/down
      rotateY: nx * TILT_AMOUNT,           // tilt left/right
      glareX: (nx + 0.5) * 100,           // 0–100%
      glareY: (ny + 0.5) * 100,
      isHovered: true,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, isHovered: false });
  }, []);

  return (
    <FadeUp delay={delay}>
      {/*
        Outer wrapper: perspective container.
        The `transition` on transform gives the "spring-back" ease
        when the mouse moves *within* the card (quick) and on leave (slower).
      */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: "900px",
          /* GPU-hint so the browser composites on its own layer */
          willChange: "transform",
        }}
        className="h-full"
      >
        <div
          style={{
            transform: `
              rotateX(${tilt.rotateX}deg)
              rotateY(${tilt.rotateY}deg)
              translateZ(0)
            `,
            transition: tilt.isHovered
              ? "transform 0.08s linear"      // snappy while moving
              : "transform 0.55s cubic-bezier(0.21,0.47,0.32,0.98)", // smooth spring-back
            transformStyle: "preserve-3d",
          }}
          className="bg-surface border border-border rounded-md overflow-hidden flex flex-col group hover:border-border2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-[border-color,box-shadow] duration-300 h-full relative"
        >
          {/* ── Specular glare overlay — translates in 3D space ── */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-md z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{
              background: `radial-gradient(
                circle 280px at ${tilt.glareX}% ${tilt.glareY}%,
                rgba(255,255,255,${GLARE_OPACITY}) 0%,
                transparent 70%
              )`,
            }}
          />

          {/* ── Thumbnail ────────────────────────────────────────── */}
          <div className="h-48 bg-bg relative overflow-hidden border-b border-border flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-5"
              style={{ background: `radial-gradient(circle at 30% 50%, ${project.color}, transparent 70%)` }}
            />
            <span className="text-5xl opacity-30">{project.icon}</span>

            {/*
              Replace with actual screenshot:
              <Image
                src={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}.png`}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            */}

            <div className="absolute bottom-3 left-3 font-mono text-[0.68rem] text-text-faint bg-bg/80 px-2.5 py-1 rounded">
              Here I Need to add a screenshot → /public/projects/
            </div>
          </div>

          {/* ── Body ─────────────────────────────────────────────── */}
          <div className="p-7 flex flex-col flex-1">
            <h3 className="font-display font-bold text-xl tracking-tight mb-3 group-hover:text-green transition-colors">
              {project.title}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed font-light flex-1 mb-5">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[0.68rem] text-text-faint bg-bg border border-border px-2.5 py-1 rounded tracking-[0.03em]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3 mt-auto">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-text-faint bg-surface border border-border px-4 py-2 rounded tracking-[0.04em] cursor-not-allowed">
                ⏳ Coming Soon
              </span>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-text-muted border border-border px-4 py-2 rounded hover:border-green hover:text-green transition-all tracking-[0.04em]"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative z-10">
      <div className="container mx-auto px-[5%]">
        <SectionHeader
          tag="03 — Projects"
          title={<>Things I&apos;ve<br />shipped.</>}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <TiltCard key={project.title} project={project} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
