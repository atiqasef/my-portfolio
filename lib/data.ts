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
  {
    year: "2024 — 2026",
    title: "Full-stack work and full-time freelancing",
    desc: "Kept building custom WooCommerce plugins, shipping integrations (DHL, UPS, USPS, Shippo) and payment fixes for clients abroad. Moved into full-stack work with Next.js, TypeScript and Node.js, built Billr, RentNest and ClientHunts, and started freelancing full-time in May 2026.",
  },
];

/** Grouped skill lists — only confirmed tools. */
export const skillGroups = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Prisma", "MongoDB", "REST APIs"],
  },
  {
    label: "Commerce & integrations",
    items: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "payment gateways",
      "shipping APIs (DHL, UPS, USPS, Shippo)",
    ],
  },
];

export const projects = [
  {
    title: "Billr",
    description:
      "AI-powered invoicing SaaS. Generate professional invoices instantly, manage clients, track payments, and export PDFs — built for freelancers.",
    stack: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Tailwind CSS"],
    image: "/projects/billr-preview.png",
    live: "https://billr-woad.vercel.app",
    github: "https://github.com/atiqasef/billr",
  },
  {
    title: "RentNest",
    description: "Property rental marketplace for browsing and listing rentals.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe"],
    image: "/projects/rentnest-preview.png",
    live: "https://rent-nest-client-flame.vercel.app",
    // No public repo — hide GitHub in UI.
  },
  {
    title: "ClientHunts",
    description:
      "Lead-discovery tool that finds potential clients using Google Places and web search.",
    // TODO: Add tech stack once confirmed (ClientHunts repo not publicly readable).
    stack: [] as string[],
    image: "/projects/clienthunts-preview.png",
    live: "https://clienthunts.vercel.app",
    // Private repo — hide GitHub in UI.
  },
];

export const services = [
  {
    title: "Full Stack Development",
    desc: "End-to-end web application development — from frontend UI to backend APIs, databases, and deployment. Built with modern tech that scales.",
  },
  {
    title: "React / Next.js Apps",
    desc: "Performant, SEO-optimized React and Next.js applications with server components, SSR, ISR, and clean architecture.",
  },
  {
    title: "API & Backend Development",
    desc: "RESTful APIs using Node.js and Express. Secure authentication, database design, and third-party integrations.",
  },
  {
    title: "Payment Integration",
    desc: "Seamless payment gateway integration with Stripe, SSLCommerz, and other providers. Subscriptions, one-time payments, and refunds.",
  },
];
