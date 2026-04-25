// components/CursorSpotlight.tsx
//
// Drop this into your layout.tsx (inside <body>, before </body>):
//
//   import CursorSpotlight from "@/components/CursorSpotlight";
//   ...
//   <body>
//     {children}
//     <CursorSpotlight />
//   </body>
//
// It renders nothing visible — it only syncs the mouse position to the
// CSS custom properties --cx and --cy on <html>, which the body::after
// spotlight in globals.css reads for its radial-gradient centre point.
//
// Throttled to ~60 fps with requestAnimationFrame so it never causes
// forced reflows or jank, even on pages with heavy scroll activity.

"use client";

import { useEffect } from "react";

export default function CursorSpotlight() {
  useEffect(() => {
    let rafId: number | null = null;
    let pendingX = 0;
    let pendingY = 0;

    const commit = () => {
      document.documentElement.style.setProperty("--cx", `${pendingX}px`);
      document.documentElement.style.setProperty("--cy", `${pendingY}px`);
      rafId = null;
    };

    const onMouseMove = (e: MouseEvent) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      // Batch the DOM write to the next animation frame
      if (rafId === null) {
        rafId = requestAnimationFrame(commit);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  // Renders nothing — pure side-effect component
  return null;
}
