"use client";

import { useEffect, useRef } from "react";
import { cascadeWords } from "./CascadeText";

/**
 * Voice chapter hero — navy background, steel accents.
 * Mirrors the structural pattern of Colors/Typography/Logos hero
 * (eyebrow / oversized serif / translucent chapter number / helper /
 * 2px section rule) but recolored for the all-navy Voice chapter:
 *   - cream title type
 *   - Fog (light steel #85A3C8) translucent "04" backdrop
 *   - Steel #5684BA for the animated section rule
 */
export default function VoiceHero() {
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
        const line = rootRef.current?.querySelector<HTMLElement>("[data-line]");
        if (line) line.style.transform = "scaleX(1)";
        return;
      }

      const { gsap } = await import("gsap");
      if (!rootRef.current) return;

      ctx = gsap.context(() => {
        gsap.to("[data-reveal='eyebrow'] .cascade-word", {
          opacity: 1, y: 0, duration: 0.55, ease: "power3.out",
          stagger: 0.025, delay: 0.1,
        });
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
        gsap.to("[data-reveal='helper'] .cascade-word", {
          opacity: 1, y: 0, duration: 0.75, ease: "power3.out",
          stagger: 0.028, delay: 0.6,
        });
        gsap.fromTo(
          "[data-line]",
          { scaleX: 0 },
          { scaleX: 1, duration: 1.1, ease: "power3.out", delay: 0.95 }
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
      style={{ backgroundColor: "#0f1c2e" }}
    >
      {/* Coral category bar */}
      <div aria-hidden className="w-full" style={{ height: 3, background: "#A73B44" }} />

      {/* Giant translucent chapter "04" — light steel (Fog) */}
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
          color: "rgba(133, 163, 200, 0.18)",
          top: "clamp(40px, 6vw, 110px)",
          right: "-4vw",
          opacity: 0,
        }}
      >
        04
      </span>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 pt-28 md:pt-36 pb-10 md:pb-14">
        {/* Eyebrow — steel */}
        <p
          data-reveal="eyebrow"
          className="uppercase"
          style={{
            fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
            fontSize: "11px",
            letterSpacing: "0.22em",
            color: "rgba(133, 163, 200, 0.75)",
          }}
        >
          {cascadeWords("Chapter 04 · Brand Expression", { initialY: 10 })}
        </p>

        {/* Oversized serif title — proxima-sera light, global standard */}
        <h1
          data-reveal="title"
          className="mt-6 md:mt-8"
          style={{
            fontFamily: "proxima-sera, var(--serif)",
            fontWeight: 300,
            fontStyle: "normal",
            fontSize: "clamp(120px, 18vw, 280px)",
            letterSpacing: "-0.055em",
            lineHeight: 0.9,
            color: "#f5f4f0",
            opacity: 0,
          }}
        >
          Voice
        </h1>

        {/* Section hero subtitle — proxima-sera 400, 22px per global standard */}
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
            color: "rgba(245, 244, 240, 0.75)",
          }}
        >
          {cascadeWords("How we sound when we write.", { initialY: 14 })}
          <br />
          {cascadeWords(
            "Direct, human, knowing, optimistic \u2014 and never institutional.",
            { initialY: 14 }
          )}
        </p>
      </div>

      {/* Container-width 2px rule — steel */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        <div
          data-line
          aria-hidden
          style={{
            height: 2,
            background: "#5684BA",
            transformOrigin: "left center",
            transform: "scaleX(0)",
          }}
        />
      </div>
    </section>
  );
}
