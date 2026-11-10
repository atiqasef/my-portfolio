# Atiq Asef — Portfolio Website

A modern, light studio portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Configured as a **static export** for hosting on Vercel (or any static host).

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## Scripts

```bash
npm run dev      # local development server
npm run lint     # ESLint (next/core-web-vitals)
npm run build    # production static export → /out
```

With `output: 'export'` in `next.config.mjs`, `npm run build` writes a static site to the `out/` folder. Serve that folder on any static host. `npm start` (`next start`) is not the primary deploy path for this static export setup.

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx           # Root layout + metadata + fonts
│   ├── page.tsx             # Main page (assembles all sections)
│   ├── globals.css          # Global styles, scrollbar, utilities
│   ├── icon.svg             # Favicon
│   ├── robots.ts            # robots.txt
│   └── sitemap.ts           # sitemap.xml
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Services.tsx
│   ├── Contact.tsx          # FormSubmit.co contact form
│   ├── Footer.tsx
│   ├── FadeUp.tsx
│   ├── SectionHeader.tsx
│   ├── Icons.tsx            # Inline SVG icons
│   └── GridBackground.tsx
├── lib/
│   ├── data.ts              # ALL site content lives here
│   └── motion.ts            # Shared motion variants + reduced-motion
└── public/
    ├── profile/profile.jpg
    ├── Atiq-Asef-CV.pdf
    ├── og-image.png         # Open Graph image
    └── projects/            # project screenshots / previews
```

## How to Customize

### 1. Update your info
Edit **`lib/data.ts`** — single source of truth for personal info, bio, journey, skills, projects, and services.

### 2. Photo / CV / project media
- Profile photo: `/public/profile/profile.jpg`
- CV: `/public/Atiq-Asef-CV.pdf` (Download CV button links here)
- Project previews: `/public/projects/`

### 3. Contact form (FormSubmit)
The contact form posts to [FormSubmit.co](https://formsubmit.co/) using the email in `lib/data.ts`. FormSubmit may require a one-time email confirmation the first time a message is sent.

## Deploy to Vercel

```bash
# Push to GitHub first, then:
npx vercel
```

Or connect the GitHub repo at vercel.com for auto-deploy. Canonical site URL: `https://atiqasef.vercel.app`.

## Tech Stack

| Tool | Version |
|---|---|
| Next.js | 14.2.5 |
| React | 18 |
| TypeScript | 5 |
| Tailwind CSS | 3.4 |
| Framer Motion | 11 |

## License
MIT — feel free to use and modify.
