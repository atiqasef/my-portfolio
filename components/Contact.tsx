"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import FadeUp from "./FadeUp";

const contactItems = [
  { icon: "✉️", label: "EMAIL", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: "🌐", label: "WEBSITE", value: "https://atiqasef.com", href: siteConfig.website },
  { icon: "📅", label: "BOOK A CALL", value: "https://cal.com/atiq-dev", href: siteConfig.booking },
  { icon: "📍", label: "LOCATION", value: siteConfig.location, href: "#" },
];

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: Replace with EmailJS or your own API route
    await new Promise((res) => setTimeout(res, 1500));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="py-28 relative z-10">
      <div className="container mx-auto px-[5%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>
            <SectionHeader tag="05 — Contact" title="" />

            <FadeUp delay={0.1}>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-[1.2] mb-4">
                {"Let's build something"}
                <br />
                <span className="text-green">great together.</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-text-muted text-base leading-relaxed font-light mb-10">
                Have a project in mind? Book a call or drop me an email — I usually respond within 24 hours.
              </p>
            </FadeUp>

            <div className="flex flex-col gap-3">
              {contactItems.map((item, i) => (
                <FadeUp key={item.label} delay={0.2 + i * 0.08}>
                  <motion.a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-4 px-5 py-4 bg-surface border border-border rounded hover:border-green transition-colors group"
                  >
                    <div className="w-10 h-10 rounded bg-green/8 border border-green/15 flex items-center justify-center flex-shrink-0 text-lg">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-mono text-[0.68rem] text-text-faint tracking-[0.08em] mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-text-muted text-sm group-hover:text-text transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <FadeUp delay={0.3}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {[
                { name: "name", label: "NAME", type: "text", placeholder: "Your name" },
                { name: "email", label: "EMAIL", type: "email", placeholder: "your@email.com" },
                { name: "subject", label: "SUBJECT", type: "text", placeholder: "Project idea, collaboration..." },
              ].map((field) => (
                <div key={field.name} className="flex flex-col gap-2">
                  <label className="font-mono text-xs text-text-muted tracking-[0.08em]">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    required
                    placeholder={field.placeholder}
                    className="bg-surface border border-border rounded px-4 py-3 text-text text-sm outline-none focus:border-green transition-colors placeholder:text-text-faint"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs text-text-muted tracking-[0.08em]">MESSAGE</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="bg-surface border border-border rounded px-4 py-3 text-text text-sm outline-none focus:border-green transition-colors placeholder:text-text-faint resize-y min-h-[130px]"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending" || status === "success"}
                whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(0,255,136,0.2)" }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 font-mono text-sm font-medium rounded tracking-[0.06em] transition-all ${
                  status === "success"
                    ? "bg-green-dark text-bg cursor-default"
                    : status === "sending"
                    ? "bg-green/60 text-bg cursor-wait"
                    : "bg-green text-bg hover:bg-green-dark"
                }`}
              >
                {status === "sending" ? "SENDING..." : status === "success" ? "✓ MESSAGE SENT!" : "SEND MESSAGE →"}
              </motion.button>

              {status === "error" && (
                <p className="text-red-400 font-mono text-xs text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
