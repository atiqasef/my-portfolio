"use client";

import { useEffect, useState } from "react";
import type { Variants, Transition } from "framer-motion";

/** Shared easing — soft studio decelerate. */
export const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const duration = {
  fast: 0.18,
  base: 0.35,
  slow: 0.55,
} as const;

export const springSoft: Transition = {
  duration: duration.base,
  ease: easeOut,
};

/** Returns true when the user prefers reduced motion. */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);

    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/** Section / child fade + slight upward slide. */
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: easeOut },
  },
};

/** Stagger container for section children. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

/** Hero entrance stagger. */
export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: easeOut },
  },
};

/** Instant variants when reduced motion is preferred. */
export const reducedFadeUpItem: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
};

export const reducedStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0, delayChildren: 0 } },
};

export function getFadeUp(reduced: boolean): Variants {
  return reduced ? reducedFadeUpItem : fadeUpItem;
}

export function getStagger(reduced: boolean): Variants {
  return reduced ? reducedStagger : staggerContainer;
}

export function getHeroContainer(reduced: boolean): Variants {
  return reduced ? reducedStagger : heroContainer;
}

export function getHeroItem(reduced: boolean): Variants {
  return reduced ? reducedFadeUpItem : heroItem;
}
