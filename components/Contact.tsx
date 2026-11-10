"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import {
  duration,
  easeOut,
  getFadeUp,
  getStagger,
  usePrefersReducedMotion,
} from "@/lib/motion";
import FadeUp from "./FadeUp";
import AccentWord from "./AccentWord";
import {
  IconMail,
  IconGlobe,
  IconCalendar,
  IconPin,
} from "./Icons";

const contactItems = [
  {
    icon: IconMail,
    label: "EMAIL",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: IconGlobe,
    label: "WEBSITE",
    value: siteConfig.website,
    href: siteConfig.website,
  },
  {
    icon: IconCalendar,
    label: "BOOK A CALL",
    value: "https://cal.com/atiq-dev",
    href: siteConfig.booking,
  },
  {
    icon: IconPin,
    label: "LOCATION",
    value: siteConfig.location,
    href: "#",
  },
];

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormState>("idle");
  const prefersReducedMotion = usePrefersReducedMotion();
  const container = getStagger(prefersReducedMotion);
  const item = getFadeUp(prefersReducedMotion);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${siteConfig.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            subject: form.subject || `Message from ${form.name}`,
            message: form.message,
            _replyto: form.email,
          }),
        }
      );

      if (!response.ok) throw new Error("Unable to send message");

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-hero text-ondark relative z-10">
      <div className="container mx-auto px-[5%] max-w-6xl">
        <FadeUp>
          <p className="font-mono text-xs text-ondark-muted tracking-[0.14em] mb-5">
            Contact
          </p>
          <h2 className="font-display font-light text-[clamp(2.25rem,5vw,3.75rem)] tracking-tight leading-[1.08] text-ondark mb-4 max-w-3xl">
            Have a <AccentWord onDark>project</AccentWord> in mind?
          </h2>
          <p className="text-ondark-muted text-base leading-relaxed font-light mb-14 max-w-md">
            Book a call or drop me an email — I usually respond within 24 hours.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="flex flex-col gap-3"
          >
            {contactItems.map((entry) => {
              const Icon = entry.icon;
              return (
                <motion.a
                  key={entry.label}
                  variants={item}
                  href={entry.href}
                  target={entry.href.startsWith("http") ? "_blank" : undefined}
                  rel={entry.href.startsWith("http") ? "noreferrer" : undefined}
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : { x: 3, transition: { duration: duration.fast } }
                  }
                  className="flex items-center gap-4 px-5 py-4 border border-ondark/15 hover:border-accent-soft/50 transition-colors group"
                >
                  <div className="w-10 h-10 border border-ondark/15 flex items-center justify-center flex-shrink-0 text-accent-soft">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[0.68rem] text-ondark-muted tracking-[0.08em] mb-0.5">
                      {entry.label}
                    </div>
                    <div className="text-ondark/80 text-sm group-hover:text-ondark transition-colors break-all">
                      {entry.value}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          <FadeUp delay={0.12}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 border border-ondark/15 p-6 sm:p-8"
            >
              {[
                {
                  name: "name",
                  label: "NAME",
                  type: "text",
                  placeholder: "Your name",
                },
                {
                  name: "email",
                  label: "EMAIL",
                  type: "email",
                  placeholder: "your@email.com",
                },
                {
                  name: "subject",
                  label: "SUBJECT",
                  type: "text",
                  placeholder: "Project idea, collaboration...",
                },
              ].map((field) => (
                <div key={field.name} className="flex flex-col gap-2">
                  <label className="font-mono text-xs text-ondark-muted tracking-[0.08em]">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    required
                    placeholder={field.placeholder}
                    className="form-field bg-hero/40 border-ondark/20 text-ondark placeholder:text-ondark-muted/60 focus:border-accent-soft"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs text-ondark-muted tracking-[0.08em]">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="form-field resize-y min-h-[140px] bg-hero/40 border-ondark/20 text-ondark placeholder:text-ondark-muted/60 focus:border-accent-soft"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending" || status === "success"}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : { y: -2, transition: { duration: duration.fast, ease: easeOut } }
                }
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                className={`w-full py-3.5 font-mono text-sm font-medium tracking-[0.06em] transition-colors ${
                  status === "success"
                    ? "bg-accent-dark text-ondark cursor-default"
                    : status === "sending"
                    ? "bg-ondark/70 text-hero cursor-wait"
                    : "bg-ondark text-hero hover:bg-accent-soft"
                }`}
              >
                {status === "sending"
                  ? "SENDING..."
                  : status === "success"
                  ? "MESSAGE SENT"
                  : "SEND MESSAGE"}
              </motion.button>

              {status === "success" && (
                <p className="text-accent-soft font-mono text-xs text-center" role="status">
                  Thanks — I&apos;ll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-red-300 font-mono text-xs text-center" role="alert">
                  Something went wrong. Please email me directly at{" "}
                  {siteConfig.email}.
                </p>
              )}
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
