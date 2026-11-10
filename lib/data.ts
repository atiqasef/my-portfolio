export const SITE_URL = "https://atiqasef.vercel.app";

export const siteConfig = {
  name: "Atiq Asef",
  title: "Full Stack Web Developer",
  company: "Atiq Asef",
  location: "Dhaka, Bangladesh",
  email: "atiqasef19@gmail.com",
  website: SITE_URL,
  booking: "https://cal.com/atiq-dev",
  linkedin: "https://www.linkedin.com/in/atiqasef",
  github: "https://github.com/atiqasef",
  cv: "/Atiq-Asef-CV.pdf",
  tagline: "Building fast, scalable, and beautiful web applications.",
  bio: [
    "I'm Atiq Asef, a Full Stack Web Developer based in Dhaka, Bangladesh, focused on building products that are fast, functional, and beautifully designed.",
    "My journey into tech is a little unconventional. I studied English Literature — which gave me a deep appreciation for storytelling, clarity, and communication. I carried those skills into coding, where I now tell stories through interfaces and systems.",
    "I specialize in the JavaScript ecosystem — React, Next.js, Node.js — and love working on projects that have real impact for real users.",
  ],
  stats: [
    { num: "2+", label: "Years Experience" },
    { num: "20+", label: "Projects Delivered" },
    { num: "15+", label: "Happy Clients" },
    { num: "∞", label: "Cups of Coffee" },
  ],
};

export const journey = [
  {
    year: "2017 — 2022",
    title: "English Literature, National University",
    desc: "Studied language, storytelling, and human communication. Built a foundation for clear thinking and empathetic design.",
  },
  {
    year: "2022",
    title: "Discovered Web Development",
    desc: "Started self-teaching HTML, CSS, JavaScript. Fell in love with the craft of building things on the web.",
  },
  {
    year: "2023",
    title: "First Freelance Projects",
    desc: "Started freelancing on Fiverr, specializing in WooCommerce shipping integrations with UPS, FedEx, and custom carrier APIs for e-commerce clients.",
  },
  // TODO: User to write 2024–2026 career content (title + description). Do not invent facts.
  {
    year: "2024 — 2026",
    title: "TODO: Add your title for this period",
    desc: "TODO: Add a short description of your work and growth during 2024–2026.",
  },
];

export const skills = {
  current: [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Firebase", icon: "🔥" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Payments", icon: "💳" },
    { name: "Git / GitHub", icon: "🐙" },
    { name: "TypeScript", icon: "🔷" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
  ],
};

export const projects = [
  {
    title: "Billr",
    description:
      "AI-powered invoicing SaaS. Generate professional invoices instantly, manage clients, track payments, and export PDFs — built for freelancers.",
    stack: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Tailwind CSS"],
    icon: "🧾",
    image: "/projects/billr-preview.gif",
    live: "https://billr-woad.vercel.app",
    github: "https://github.com/atiqasef/billr",
    color: "#3b82f6",
  },
  {
    title: "RentNest",
    description: "Property rental marketplace for browsing and listing rentals.",
    // TODO: Add tech stack once confirmed (none in previous data for this project).
    stack: [] as string[],
    icon: "🏠",
    live: "https://rent-nest-client-flame.vercel.app",
    color: "#f59e0b",
  },
  {
    title: "ClientHunts",
    description:
      "Lead-discovery tool that finds potential clients using Google Places and web search.",
    // TODO: Add tech stack once confirmed (none in previous data for this project).
    stack: [] as string[],
    icon: "🎯",
    live: "https://clienthunts.vercel.app",
    github: "https://github.com/atiqasef/ClientHunts",
    color: "#00ff88",
  },
];

export const services = [
  {
    icon: "🌐",
    title: "Full Stack Development",
    desc: "End-to-end web application development — from frontend UI to backend APIs, databases, and deployment. Built with modern tech that scales.",
  },
  {
    icon: "⚛️",
    title: "React / Next.js Apps",
    desc: "Performant, SEO-optimized React and Next.js applications with server components, SSR, ISR, and clean architecture.",
  },
  {
    icon: "🔌",
    title: "API & Backend Development",
    desc: "RESTful APIs using Node.js and Express. Secure authentication, database design, and third-party integrations.",
  },
  {
    icon: "💳",
    title: "Payment Integration",
    desc: "Seamless payment gateway integration with Stripe, SSLCommerz, and other providers. Subscriptions, one-time payments, and refunds.",
  },
];
