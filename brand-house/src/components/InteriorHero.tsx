"use client";

import { useEffect, useRef } from "react";

/** Category drives top bar + eyebrow + animated underline color. */
export type ChapterCategory = "visual" | "strategy" | "tools";

/** Preserved for saved-colors archive page — no longer consumed by this hero. */
export interface GradientDef {
  angle?: number;
  stops: [string, string, string, string, string];
}

const CATEGORY = {
  visual:   { label: "Visual Identity",   color: "#004290" },
  strategy: { label: "Strategy & Voice",  color: "#A73B44" },
  tools:    { label: "Tools & Resources", color: "#5684BA" },
} as const;

interface InteriorHeroProps {
  title: string;
  subtitle?: string;
  /** Chapter number as two-digit string (e.g. "01"). Rendered as oversized Turnip BG accent. */
  chapterNumber?: string;
  /** Content category — drives top bar, eyebrow, and underline color. */
  category?: ChapterCategory;
}

export default function InteriorHero({
  title,
  subtitle,
  chapterNumber,
  category = "visual",
}: InteriorHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cat = CATEGORY[category];

  useEffect(() => {
    async function init() {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        const el = sectionRef.current;
        if (!el) return;
        el.querySelectorAll<HTMLElement>("[data-reveal]").forEach((n) => {
          n.style.opacity = "1";
          n.style.transform = "translateY(0)";
        });
        const line = el.querySelector<HTMLElement>(".interior-hero-line");
        if (line) line.style.transform = "scaleX(1)";
        return;
      }

      const { gsap } = await import("gsap");
      if (!sectionRef.current) return;

      gsap.context(() => {
        gsap.fromTo(".interior-hero-eyebrow",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.1 });

        gsap.fromTo(".interior-hero-title",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.95, ease: "power3.out", delay: 0.2 });

        gsap.fromTo(".interior-hero-chapter",
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 1.6, ease: "power2.out", delay: 0.35 });

        if (subtitle) {
          gsap.fromTo(".interior-hero-sub",
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.6 });
        }

        gsap.fromTo(".interior-hero-line",
          { scaleX: 0 },
          { scaleX: 1, duration: 1.0, ease: "power3.out", delay: 0.9 });
      }, sectionRef.current);
    }
    init();
  }, [subtitle]);

  return (
    <section ref={sectionRef} className="relative bg-cream overflow-hidden">
      {/* Thin category top bar — matches /colors standard */}
      <div
        aria-hidden
        className="w-full"
        style={{ height: "3px", background: cat.color }}
      />

      {/* Oversized Turnip chapter number — italic watermark, bleeds off right */}
      {chapterNumber && (
        <span
          aria-hidden
          className="interior-hero-chapter absolute pointer-events-none select-none z-0"
          data-reveal
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
          {chapterNumber}
        </span>
      )}

      {/* Content container — tighter padding to match /colors */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 pt-28 md:pt-36 pb-10 md:pb-14">
        {/* Eyebrow: Chapter NN · Category — mono 11px, navy/45 */}
        <p
          className="interior-hero-eyebrow uppercase"
          data-reveal
          style={{
            fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
            fontSize: "11px",
            letterSpacing: "0.22em",
            color: "rgba(15,28,46,0.45)",
            opacity: 0,
          }}
        >
          {chapterNumber ? `Chapter ${chapterNumber} · ${cat.label}` : cat.label}
        </p>

        {/* Oversized page title — Turnip serif, upright, editorial */}
        <h1
          className="interior-hero-title mt-6 md:mt-8"
          data-reveal
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
          {title}
        </h1>

        {/* Quiet helper line */}
        {subtitle && (
          <p
            className="interior-hero-sub mt-6 md:mt-8 max-w-[560px]"
            data-reveal
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
            {subtitle}
          </p>
        )}
      </div>

      {/* Container-width 2px rule — matches /colors */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        <div
          className="interior-hero-line"
          aria-hidden
          style={{
            height: "2px",
            background: "rgba(15,28,46,0.18)",
            transformOrigin: "left center",
            transform: "scaleX(0)",
          }}
        />
      </div>
    </section>
  );
}
