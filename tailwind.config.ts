import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hero: "#0C0C0B",
        bg: "#F3F0EA",
        bg2: "#EBE7DF",
        surface: "#FAF8F4",
        border: "#DDD8CE",
        border2: "#C9C4B8",
        accent: {
          DEFAULT: "#6F8F7A",
          soft: "#9FB5A6",
          dark: "#4F6B58",
        },
        ink: {
          DEFAULT: "#141413",
          muted: "#5C5A55",
          faint: "#8A877F",
        },
        ondark: {
          DEFAULT: "#F3F0EA",
          muted: "#A8A59C",
        },
        // Back-compat aliases used across components
        green: {
          DEFAULT: "#6F8F7A",
          dim: "rgba(111,143,122,0.10)",
          dim2: "rgba(111,143,122,0.18)",
          dark: "#4F6B58",
        },
        text: {
          DEFAULT: "#141413",
          muted: "#5C5A55",
          faint: "#8A877F",
        },
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      fontFamily: {
        display: ["var(--font-instrument)", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        body: ["var(--font-instrument)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      boxShadow: {
        soft: "0 8px 24px rgba(20, 20, 19, 0.06)",
        lift: "0 14px 36px rgba(20, 20, 19, 0.10)",
      },
      animation: {
        scrollLine: "scrollLine 1.5s ease-in-out infinite",
      },
      keyframes: {
        scrollLine: {
          "0%,100%": { transform: "scaleY(1)", opacity: "0.45" },
          "50%": { transform: "scaleY(0.65)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
