"use client";

import { useEffect, useRef } from "react";

/**
 * Full-width 2px animated bottom border for ALL hero sections.
 *
 * Draws in from left on mount / on scroll-in-view. Navy by default;
 *   · Voice hero    → FOG       (#85A3C8)
 *   · Content hero  → BLACK-ish (#111111)
 *
 * Usage: drop <HeroBottomRule /> as the LAST child inside a hero section.
 * The parent section should be `position: relative`.
 */
export default function HeroBottomRule({
  color = "#0f1c2e",
  opacity = 1,
  duration = 1.1,
  delay = 0.2,
}: {
  color?: string;
  opacity?: number;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      if (ref.current) ref.current.style.transform = "scaleX(1)";
      return;
    }

    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!ref.current) return;

      ctx = gsap.context(() => {
        gsap.fromTo(
          ref.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 95%",
              once: true,
            },
          }
        );
      });
    }

    init();
    return () => ctx?.revert();
  }, [duration, delay]);

  return (
    <div
      aria-hidden
      className="absolute left-0 right-0 bottom-0 pointer-events-none"
      style={{ zIndex: 5 }}
    >
      <div
        ref={ref}
        style={{
          height: 2,
          width: "100%",
          backgroundColor: color,
          opacity,
          transformOrigin: "left center",
          transform: "scaleX(0)",
        }}
      />
    </div>
  );
}
