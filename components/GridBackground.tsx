"use client";

export default function GridBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none opacity-25"
      style={{
        backgroundImage: `
          linear-gradient(#222 1px, transparent 1px),
          linear-gradient(90deg, #222 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        maskImage:
          "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
      }}
    />
  );
}
