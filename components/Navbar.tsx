// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  /**
   * Raw scroll progress: 0 at top, saturates to 1 at 80px.
   * useMotionValue lets us drive derived values reactively.
   */
  const rawScroll = useMotionValue(0);

  /**
   * Spring-damped version — gives the blur/opacity transition
   * a smooth, physical feel rather than snapping on scroll events.
   */
  const scrollProgress = useSpring(rawScroll, { stiffness: 100, damping: 20, restDelta: 0.001 });

  // Derived CSS values from scroll progress
  const overlayOpacity   = useTransform(scrollProgress, [0, 1], [0, 1]);
  const borderOpacity    = useTransform(scrollProgress, [0, 1], [0, 1]);
  const glowOpacity      = useTransform(scrollProgress, [0, 1], [0, 0.6]);

  useEffect(() => {
    const SATURATION_PX = 80; // scroll distance at which nav is fully opaque

    const onScroll = () => {
      rawScroll.set(Math.min(window.scrollY / SATURATION_PX, 1));
    };

    // Set immediately (handles refresh-while-scrolled)
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [rawScroll]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="fixed top-0 left-0 right-0 z-50 px-[5%] h-16 flex items-center justify-between"
      >
        {/*
          ── Blur glass overlay layer ─────────────────────────────────────────
          Keeping the blur in a *separate* absolutely-positioned child means
          we can smoothly animate its `opacity` — something that's impossible
          when `backdrop-filter` is set directly on the parent (it would snap
          on/off). The overlay is always blurring; we just fade it in.
        */}
        <motion.div
          aria-hidden
          className="absolute inset-0 -z-10 backdrop-blur-xl"
          style={{ opacity: overlayOpacity }}
        />

        {/* Background fill — same layer, slightly warmer tint */}
        <motion.div
          aria-hidden
          className="absolute inset-0 -z-10 bg-bg/80"
          style={{ opacity: overlayOpacity }}
        />

        {/* Bottom border — fades in with scroll */}
        <motion.div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-px bg-border"
          style={{ opacity: borderOpacity }}
        />

        {/* Green glow line — very subtle, fires at the bottom of the bar */}
        <motion.div
          aria-hidden
          className="absolute bottom-0 left-[10%] right-[10%] h-px"
          style={{
            opacity: glowOpacity,
            background: "linear-gradient(90deg, transparent, rgba(0,255,136,0.4), transparent)",
          }}
        />

        {/* ── Logo ──────────────────────────────────────────────── */}
        <Link href="#hero" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-green animate-pulse2" />
          <span className="font-display font-extrabold text-[1.05rem] tracking-tight text-text group-hover:text-white transition-colors">
            Atiq<span className="text-green">.</span>
          </span>
        </Link>

        {/* ── Desktop links ─────────────────────────────────────── */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-text-muted hover:text-text transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            </li>
          ))}
        </ul>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <a
          href={siteConfig.booking}
          target="_blank"
          rel="noreferrer"
          className="hidden md:block font-mono text-xs text-green border border-green px-4 py-2 rounded hover:bg-green hover:text-bg transition-all tracking-widest"
        >
          Book a Call
        </a>

        {/* ── Hamburger ─────────────────────────────────────────── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-1"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-px bg-text-muted transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`w-5 h-px bg-text-muted transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}          />
          <span className={`w-5 h-px bg-text-muted transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </motion.nav>

      {/* ── Mobile Menu ─────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="font-display font-bold text-4xl text-text-muted hover:text-green transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={siteConfig.booking}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              className="font-mono text-green text-lg tracking-widest"
            >
              Book a Call →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
