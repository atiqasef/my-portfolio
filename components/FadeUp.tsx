"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import {
  duration,
  easeOut,
  usePrefersReducedMotion,
} from "@/lib/motion";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export default function FadeUp({
  children,
  delay = 0,
  className = "",
  once = true,
}: FadeUpProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-48px" }}
      transition={{ duration: duration.slow, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
