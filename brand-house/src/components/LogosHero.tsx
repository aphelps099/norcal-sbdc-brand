"use client";

import { useEffect, useRef } from "react";

/**
 * Editorial hero for the Logos page — mirrors the Colors and Typography
 * hero pattern. Eyebrow, oversized serif title, translucent chapter
 * number backdrop, quiet helper line, container-width 2px rule.
 */
export default function LogosHero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

    async function init() {
      if (prefersReduced) {
        rootRef.current
          ?.querySelectorAll<HTMLElement>("[data-reveal]")
          .forEach((n) => {
            n.style.opacity = "1";
            n.style.transform = "translate(0, 0)";
          });
        const line = rootRef.current?.querySelector<HTMLElement>("[data-line]");
        if (line) line.style.transform = "scaleX(1)";
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
        gsap.fromTo(
          "[data-line]",
          { scaleX: 0 },
          { scaleX: 1, duration: 1.1, ease: "power3.out", delay: 0.85 }
        );
      }, rootRef);
    }

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative bg-cream overflow-hidden"
    >
      {/* Coral category bar */}
      <div aria-hidden className="w-full" style={{ height: 3, background: "#c4543a" }} />

      {/* Giant translucent chapter "03" */}
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
        03
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
          Chapter 03 · Visual Identity
        </p>

        {/* Oversized serif title — editorial */}
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
          Logos
        </h1>

        {/* Quiet helper line */}
        <p
          data-reveal="helper"
          className="mt-6 md:mt-8 max-w-[560px]"
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 500,
            fontSize: "clamp(15px, 1.1vw, 16px)",
            lineHeight: 1.55,
            letterSpacing: "-0.005em",
            color: "rgba(15,28,46,0.55)",
            opacity: 0,
          }}
        >
          The California SBDC logo represents us at the very highest level — a signature, an identifier, a stamp of quality.
        </p>
      </div>

      {/* Container-width 2px rule (matches nav underline weight) */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        <div
          data-line
          aria-hidden
          style={{
            height: 2,
            background: "rgba(15,28,46,0.18)",
            transformOrigin: "left center",
            transform: "scaleX(0)",
          }}
        />
      </div>
    </section>
  );
}
