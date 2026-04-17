"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * ScrollFadeBackground
 * Fixed, page-wide overlay whose opacity is driven by how far the viewport
 * has entered a target section — and how close the viewport is to exiting
 * it (i.e. entering the following section).
 *
 * Use case: on the Content page, we want the Posting Rhythm section to
 * feel like it lifts to a cream/white wash — fading in as the section
 * enters view, and fading back out as the next section takes over.
 *
 * Opacity curve (based on section viewport position):
 *   • Section top still below fade-in trigger  → 0
 *   • Ramps 0 → 1 across the first `fadeInPx` of the section
 *   • Holds at 1 while the middle of the section is on screen
 *   • Ramps 1 → 0 across the last `fadeOutPx` of the section
 *   • Section fully past the viewport → 0
 */
export default function ScrollFadeBackground({
  targetRef,
  color = "#f5f4f0", // cream; use "#ffffff" for pure white
  fadeInPx = 400,
  fadeOutPx = 400,
  zIndex = 0,
}: {
  targetRef: RefObject<HTMLElement | null>;
  color?: string;
  fadeInPx?: number;
  fadeOutPx?: number;
  zIndex?: number;
}) {
  const [opacity, setOpacity] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const compute = () => {
      rafRef.current = null;
      const el = targetRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // Distance the viewport BOTTOM has travelled past the section top.
      // When 0 → section just reached bottom of viewport (start of fade in).
      // When >= fadeInPx → fully faded in.
      const enter = vh - rect.top;
      // Distance the viewport TOP has travelled past the section bottom.
      // When <= 0 → section still has room below. When approaches fadeOutPx
      // we start fading out; at >= fadeOutPx (bottom above viewport top) → 0.
      const exit = -rect.bottom + 0; // positive once section bottom crosses top of viewport
      // We want to begin the fade-out before the section fully exits:
      // trigger when the section's remaining height on screen drops below fadeOutPx.
      const remaining = rect.bottom; // px from viewport top to section bottom
      // fade-in factor (0..1)
      const fin = Math.max(0, Math.min(1, enter / fadeInPx));
      // fade-out factor (1..0) — starts reducing when `remaining` drops below fadeOutPx
      const fout = Math.max(0, Math.min(1, remaining / fadeOutPx));
      // Combined
      const o = Math.max(0, Math.min(1, fin * fout));
      setOpacity(o);
      // silence unused var
      void exit;
    };

    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [targetRef, fadeInPx, fadeOutPx]);

  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex,
        backgroundColor: color,
        opacity,
        transition: "opacity 120ms linear",
        willChange: "opacity",
      }}
    />
  );
}
