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
        bg: "#F5F7FA",
        bg2: "#EEF1F6",
        surface: "#FFFFFF",
        surface2: "#F0F3F8",
        border: "#E2E7EF",
        border2: "#C9D1DE",
        accent: {
          DEFAULT: "#2F5BFF",
          soft: "rgba(47,91,255,0.08)",
          mid: "rgba(47,91,255,0.16)",
          dark: "#1E44D6",
        },
        ink: {
          DEFAULT: "#0B1220",
          muted: "#5A6577",
          faint: "#8B95A8",
        },
        // Back-compat aliases used across components
        green: {
          DEFAULT: "#2F5BFF",
          dim: "rgba(47,91,255,0.08)",
          dim2: "rgba(47,91,255,0.16)",
          dark: "#1E44D6",
        },
        text: {
          DEFAULT: "#0B1220",
          muted: "#5A6577",
          faint: "#8B95A8",
        },
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-instrument)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      boxShadow: {
        soft: "0 8px 24px rgba(11, 18, 32, 0.06)",
        lift: "0 14px 36px rgba(11, 18, 32, 0.10)",
      },
      animation: {
        pulse2: "pulse2 2s ease-in-out infinite",
        scrollLine: "scrollLine 1.5s ease-in-out infinite",
      },
      keyframes: {
        pulse2: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.85)" },
        },
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
