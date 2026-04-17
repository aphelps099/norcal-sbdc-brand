"use client";

import { useEffect, useRef } from "react";
import { cascadeWords } from "./CascadeText";

/**
 * Editorial hero for the Typography page — mirrors the ColorsHero treatment.
 * Oversized Proxima Sera serif title with a translucent chapter number sitting
 * behind it, a quiet helper line, and a full-bleed hairline rule at the base.
 *
 * This is the canonical section-hero pattern for every chapter page.
 */
export default function TypographyHero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

    async function init() {
      if (prefersReduced) {
        rootRef.current
          ?.querySelectorAll<HTMLElement>("[data-reveal], .cascade-word")
          .forEach((n) => {
            n.style.opacity = "1";
            n.style.transform = "translate(0, 0)";
          });
        return;
      }

      const { gsap } = await import("gsap");
      if (!rootRef.current) return;

      ctx = gsap.context(() => {
        // Eyebrow — word cascade, tight stagger
        gsap.to("[data-reveal='eyebrow'] .cascade-word", {
          opacity: 1, y: 0, duration: 0.55, ease: "power3.out",
          stagger: 0.025, delay: 0.1,
        });
        // Giant title — single block (single word reads better whole)
        gsap.fromTo(
          "[data-reveal='title']",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.95, ease: "power3.out", delay: 0.25 }
        );
        gsap.fromTo(
          "[data-reveal='chapter']",
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 1.6, ease: "power2.out", delay: 0.35 }
        );
        // Helper — word cascade
        gsap.to("[data-reveal='helper'] .cascade-word", {
          opacity: 1, y: 0, duration: 0.75, ease: "power3.out",
          stagger: 0.028, delay: 0.6,
        });
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
      <div aria-hidden className="w-full" style={{ height: 3, background: "#A73B44" }} />

      {/* Giant translucent chapter "02" */}
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
        02
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
          }}
        >
          {cascadeWords("Chapter 02 · Visual Identity", { initialY: 10 })}
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
          Fonts
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
          }}
        >
          {cascadeWords(
            "Two families, three jobs \u2014 a workhorse sans, a wide display caps, and an editorial serif.",
            { initialY: 14 }
          )}
        </p>
      </div>

    </section>
  );
}
