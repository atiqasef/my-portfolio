export const siteConfig = {
  name: "Atiq Asef",
  title: "Full Stack Web Developer",
  company: "Atiq Asef",
  location: "Dhaka, Bangladesh",
  email: "atiqasef19@gmail.com",
  website: "https://atiqasef.com",
  booking: "https://cal.com/atiq-dev",
  linkedin: "https://linkedin.com/in/YOUR_LINKEDIN", // ← Replace
  github: "https://github.com/YOUR_GITHUB",           // ← Replace
  cv: "/Atiq-Asef-CV.pdf",                            // ← Add CV to /public
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
  ],
  learning: [
    { name: "TypeScript", icon: "🔷" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
  ],
};

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with product management, cart, Stripe checkout, and an admin dashboard with analytics.",
    stack: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    icon: "🛒",
    live: "#",     // ← Replace with live URL
    github: "#",   // ← Replace with GitHub URL
    color: "#00ff88",
  },
  {
    title: "SaaS Dashboard",
    description:
      "A project management SaaS with real-time collaboration, user auth, analytics charts, and role-based access control.",
    stack: ["React", "Node.js", "Firebase", "Chart.js"],
    icon: "📋",
    live: "#",
    github: "#",
    color: "#3b82f6",
  },
  {
    title: "Real Estate Listing App",
    description:
      "Property listing and booking platform with map integration, image uploads, advanced filters, and agent contact system.",
    stack: ["Next.js", "MongoDB", "Cloudinary", "MapBox"],
    icon: "🏠",
    live: "#",
    github: "#",
    color: "#f59e0b",
  },
  {
    title: "Real-Time Chat App",
    description:
      "Chat app with private and group messaging, online presence indicators, file sharing, and push notifications.",
    stack: ["React", "Socket.io", "Node.js", "MongoDB"],
    icon: "💬",
    live: "#",
    github: "#",
    color: "#8b5cf6",
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
