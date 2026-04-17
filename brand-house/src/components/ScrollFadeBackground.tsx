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
  fadeOutPx = 0, // 0 = one-way fade (stays at full opacity once in)
  zIndex = 0,
}: {
  targetRef: RefObject<HTMLElement | null>;
  color?: string;
  fadeInPx?: number;
  /** If 0 or omitted, the fade is one-way: stays at full opacity past the section. */
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
      // 0 → section top just touched viewport bottom (fade-in starts).
      // >= fadeInPx → fully faded in.
      const enter = vh - rect.top;
      const fin = Math.max(0, Math.min(1, enter / fadeInPx));

      // One-way mode: once faded in, stay at full opacity forever.
      let o = fin;
      if (fadeOutPx > 0) {
        const remaining = rect.bottom; // px from viewport top to section bottom
        const fout = Math.max(0, Math.min(1, remaining / fadeOutPx));
        o = fin * fout;
      }
      setOpacity(Math.max(0, Math.min(1, o)));
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
