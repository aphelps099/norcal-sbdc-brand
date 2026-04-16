"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

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
  /** Chapter number as two-digit string (e.g. "01"). Rendered as ghosted Turnip BG accent. */
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
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.2 });

        gsap.fromTo(".interior-hero-chapter",
          { opacity: 0 },
          { opacity: 1, duration: 1.4, ease: "power2.out", delay: 0.5 });

        if (subtitle) {
          gsap.fromTo(".interior-hero-sub",
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.55 });
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
      {/* 5px category top bar */}
      <div
        aria-hidden
        className="w-full"
        style={{ height: "5px", background: cat.color }}
      />

      {/* Giant Turnip chapter number — BG accent, bleeds off the right edge */}
      {chapterNumber && (
        <span
          aria-hidden
          className="interior-hero-chapter absolute pointer-events-none select-none z-0"
          data-reveal
          style={{
            fontFamily: "var(--serif)",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "clamp(200px, 36vw, 560px)",
            lineHeight: 0.82,
            letterSpacing: "-0.04em",
            color: "rgba(15, 28, 46, 0.06)",
            top: "clamp(40px, 6vw, 96px)",
            right: "-2vw",
            opacity: 0,
          }}
        >
          {chapterNumber}
        </span>
      )}

      {/* Content container */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 pt-20 md:pt-32 pb-[150px] md:pb-[200px]">
        {/* Back-to-home breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-navy/40 hover:text-navy/70 transition-colors uppercase no-underline"
          style={{
            fontFamily: "var(--font-wide)",
            fontWeight: 700,
            fontSize: "10px",
            letterSpacing: "0.22em",
          }}
        >
          <span className="inline-block w-4 h-[1.5px] bg-current" />
          Brand House
        </Link>

        {/* Eyebrow: Chapter NN · Category — category color */}
        <p
          className="interior-hero-eyebrow mt-10 uppercase"
          data-reveal
          style={{
            fontFamily: "var(--font-wide)",
            fontWeight: 700,
            fontSize: "clamp(11px, 1vw, 13px)",
            letterSpacing: "0.24em",
            color: cat.color,
            opacity: 0,
          }}
        >
          {chapterNumber ? `Chapter ${chapterNumber} · ${cat.label}` : cat.label}
        </p>

        {/* Oversized page title — Extra Wide CAPS */}
        <h1
          className="interior-hero-title mt-4 uppercase"
          data-reveal
          style={{
            fontFamily: "var(--font-wide)",
            fontWeight: 700,
            fontSize: "clamp(56px, 11vw, 144px)",
            letterSpacing: "0",
            lineHeight: 0.92,
            color: "#0f1c2e",
            opacity: 0,
          }}
        >
          {title}
        </h1>

        {/* Short summary */}
        {subtitle && (
          <p
            className="interior-hero-sub mt-10 max-w-[620px]"
            data-reveal
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 500,
              fontSize: "clamp(17px, 1.5vw, 21px)",
              lineHeight: 1.55,
              letterSpacing: "-0.01em",
              color: "#4a4a4a",
              opacity: 0,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Animated category underline — spans container, transitions into page content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        <div
          className="interior-hero-line"
          aria-hidden
          style={{
            height: "3px",
            background: cat.color,
            transformOrigin: "left center",
            transform: "scaleX(0)",
          }}
        />
      </div>
    </section>
  );
}
