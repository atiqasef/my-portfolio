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
        bg: "#070707",
        bg2: "#0d0d0d",
        surface: "#161616",
        surface2: "#1c1c1c",
        border: "#222222",
        border2: "#2a2a2a",
        green: {
          DEFAULT: "#00ff88",
          dim: "rgba(0,255,136,0.08)",
          dim2: "rgba(0,255,136,0.15)",
          dark: "#00cc6a",
        },
        text: {
          DEFAULT: "#f0f0f0",
          muted: "#a0a0a0",
          faint: "#555555",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-instrument)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      animation: {
        pulse2: "pulse2 2s ease-in-out infinite",
        scrollLine: "scrollLine 1.5s ease-in-out infinite",
      },
      keyframes: {
        pulse2: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.7)" },
        },
        scrollLine: {
          "0%,100%": { transform: "scaleY(1)", opacity: "0.5" },
          "50%": { transform: "scaleY(0.6)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
