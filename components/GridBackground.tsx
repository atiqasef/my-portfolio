"use client";

export default function GridBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden
      style={{
        backgroundImage: `
          linear-gradient(rgba(11, 18, 32, 0.045) 1px, transparent 1px),
          linear-gradient(90deg, rgba(11, 18, 32, 0.045) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
        maskImage:
          "radial-gradient(ellipse 75% 70% at 50% 30%, black 20%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 75% 70% at 50% 30%, black 20%, transparent 100%)",
      }}
    />
  );
}
