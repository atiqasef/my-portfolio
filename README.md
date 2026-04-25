# Atiq Asef — Portfolio Website

A modern, dark, minimal portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## 📁 Project Structure

```
rushd-portfolio/
├── app/
│   ├── layout.tsx        # Root layout + metadata + SEO
│   ├── page.tsx          # Main page (assembles all sections)
│   └── globals.css       # Global styles, fonts, scrollbar
├── components/
│   ├── Navbar.tsx        # Sticky nav + mobile menu
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About + journey timeline
│   ├── Skills.tsx        # Tech stack grid
│   ├── Projects.tsx      # Project cards
│   ├── Services.tsx      # Services cards
│   ├── Contact.tsx       # Contact form + info
│   ├── Footer.tsx        # Footer with socials
│   ├── FadeUp.tsx        # Reusable animation wrapper
│   ├── SectionHeader.tsx # Reusable section heading
│   └── GridBackground.tsx# Animated grid background
├── lib/
│   └── data.ts           # ⭐ ALL your content lives here
└── public/
    ├── profile.jpg       # ← Add your photo here
    ├── Atiq-Asef-CV.pdf  # ← Add your CV here
    └── projects/         # ← Add project screenshots here
```

## ✏️ How to Customize

### 1. Update Your Info
Edit **`lib/data.ts`** — this is the single source of truth for all content:
- Personal info (name, email, links)
- Bio paragraphs
- Stats
- Journey timeline
- Skills list
- Projects
- Services

### 2. Add Your Photo
Place your photo at `/public/profile.jpg`, then in `components/Hero.tsx` uncomment the `<Image>` block and remove the placeholder div.

### 3. Add Project Screenshots
Place screenshots in `/public/projects/` and update the `Projects.tsx` image references.

### 4. Add Your CV
Place your CV PDF at `/public/Atiq-Asef-CV.pdf`.

### 5. Fix Social Links
In `lib/data.ts`, replace:
```ts
linkedin: "https://linkedin.com/in/YOUR_LINKEDIN",
github:   "https://github.com/YOUR_GITHUB",
```

### 6. Set Up Contact Form (EmailJS)
In `components/Contact.tsx`, replace the mock `setTimeout` with EmailJS:
```bash
npm install @emailjs/browser
```
Then follow: https://www.emailjs.com/docs/

## 🌐 Deploy to Vercel

```bash
# Push to GitHub first, then:
npx vercel
```
Or connect your GitHub repo at vercel.com for auto-deploy.

## 🛠 Tech Stack

| Tool | Version |
|---|---|
| Next.js | 14.2.5 |
| React | 18 |
| TypeScript | 5 |
| Tailwind CSS | 3.4 |
| Framer Motion | 11 |

## 📝 License
MIT — feel free to use and modify.
