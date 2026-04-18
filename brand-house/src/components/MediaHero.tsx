"use client";

import { useEffect, useRef } from "react";

/**
 * Media chapter hero — cream background, matches Colors / Typography / Logos pattern.
 * Chapter 05 · Craft — "Media" serif title with translucent "05" backdrop.
 */
export default function MediaHero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

    async function init() {
      if (prefersReduced) {
        rootRef.current
          ?.querySelectorAll<HTMLElement>("[data-reveal]")
          .forEach((n) => {
            n.style.opacity = "1";
            n.style.transform = "translate(0, 0)";
          });
        return;
      }

      const { gsap } = await import("gsap");
      if (!rootRef.current) return;

      ctx = gsap.context(() => {
        gsap.fromTo(
          "[data-reveal='eyebrow']",
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.1 }
        );
        gsap.fromTo(
          "[data-reveal='title']",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.95, ease: "power3.out", delay: 0.2 }
        );
        gsap.fromTo(
          "[data-reveal='chapter']",
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 1.6, ease: "power2.out", delay: 0.35 }
        );
        gsap.fromTo(
          "[data-reveal='helper']",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.55 }
        );
      }, rootRef);
    }

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden"
    >
      {/* Coral category bar */}
      <div
        aria-hidden
        className="w-full"
        style={{ height: 3, background: "#A73B44" }}
      />

      {/* Giant translucent chapter "05" */}
      <span
        aria-hidden
        data-reveal="chapter"
        className="absolute pointer-events-none select-none z-0"
        style={{
          fontFamily: "var(--serif)",
          fontWeight: 400,
          fontStyle: "italic",
          fontSize: "clamp(360px, 58vw, 880px)",
          lineHeight: 0.82,
          letterSpacing: "-0.04em",
          color: "rgba(15, 28, 46, 0.075)",
          top: "clamp(40px, 6vw, 110px)",
          right: "-4vw",
          opacity: 0,
        }}
      >
        05
      </span>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 pt-28 md:pt-36 pb-10 md:pb-14">
        {/* Eyebrow */}
        <p
          data-reveal="eyebrow"
          className="uppercase"
          style={{
            fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
            fontSize: "11px",
            letterSpacing: "0.22em",
            color: "rgba(15,28,46,0.45)",
            opacity: 0,
          }}
        >
          Chapter 05 · Craft
        </p>

        {/* Oversized serif title */}
        <h1
          data-reveal="title"
          className="mt-6 md:mt-8"
          style={{
            fontFamily: "var(--serif)",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "clamp(120px, 18vw, 280px)",
            letterSpacing: "-0.04em",
            lineHeight: 0.9,
            color: "#0f1c2e",
            opacity: 0,
          }}
        >
          Media
        </h1>

        {/* Section hero subtitle — proxima-sera 400 at 22px, global standard */}
        <p
          data-reveal="helper"
          className="mt-6 md:mt-8 max-w-[640px]"
          style={{
            fontFamily: "proxima-sera, var(--serif)",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "clamp(18px, 1.5vw, 22px)",
            lineHeight: 1.5,
            letterSpacing: "-0.005em",
            color: "rgba(15,28,46,0.65)",
            opacity: 0,
          }}
        >
          Photography and video that puts people first. Faces, not buildings.
          Real work, real moments, real light.
        </p>
      </div>

    </section>
  );
}
