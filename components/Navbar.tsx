"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { duration, easeOut, usePrefersReducedMotion } from "@/lib/motion";

const navLinks = [
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Services", href: "#services", id: "services" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(true);
  const [active, setActive] = useState("hero");
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);

      const hero = document.getElementById("hero");
      const contact = document.getElementById("contact");
      const probe = y + 56;
      const inHero = hero
        ? probe >= hero.offsetTop && probe < hero.offsetTop + hero.offsetHeight
        : false;
      const inContact = contact
        ? probe >= contact.offsetTop
        : false;
      setOverDark(inHero || inContact);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", ...navLinks.map((l) => l.id)];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const brandColor = overDark
    ? "text-ondark hover:text-accent-soft"
    : "text-ink hover:text-accent-dark";
  const linkIdle = overDark
    ? "text-ondark-muted hover:text-ondark"
    : "text-ink-muted hover:text-ink";
  const linkActive = overDark ? "text-ondark" : "text-ink";
  const lineColor = overDark ? "bg-ondark" : "bg-ink";

  const barClass = scrolled
    ? overDark
      ? "bg-hero/85 backdrop-blur-xl border-b border-white/10"
      : "bg-bg/85 backdrop-blur-xl border-b border-border"
    : "bg-transparent border-b border-transparent";

  return (
    <>
      <motion.nav
        initial={prefersReducedMotion ? false : { y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: duration.slow, ease: easeOut }
        }
        className={`fixed top-0 left-0 right-0 z-50 h-16 px-[5%] flex items-center justify-between transition-[background-color,backdrop-filter,border-color,color] duration-300 ${barClass}`}
      >
        <Link
          href="#hero"
          className={`font-display font-medium text-[1.05rem] tracking-tight transition-colors ${brandColor}`}
        >
          Atiq Asef
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`font-mono text-sm relative transition-colors ${
                    isActive ? linkActive : linkIdle
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-px bg-accent-soft origin-left transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className={`hidden md:inline-flex font-mono text-xs px-4 py-2 border transition-all tracking-[0.08em] ${
            overDark
              ? "text-ondark border-ondark/30 hover:bg-ondark hover:text-hero"
              : "text-ink border-border2 hover:border-accent-dark hover:text-accent-dark"
          }`}
        >
          Contact
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`w-5 h-px ${lineColor} transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`w-5 h-px ${lineColor} transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-px ${lineColor} transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : duration.base }}
            className="fixed inset-0 z-40 bg-hero flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { delay: i * 0.06, duration: duration.base, ease: easeOut }
                }
                className={`font-display font-light text-3xl transition-colors ${
                  active === link.id
                    ? "text-accent-soft"
                    : "text-ondark-muted hover:text-ondark"
                }`}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href={siteConfig.cv}
              download
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm text-ondark-muted mt-4 tracking-[0.06em]"
            >
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
