"use client";

import { useEffect, useRef } from "react";
import { cascadeWords } from "./CascadeText";

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
  /** Optional background color override. Defaults to cream. Use for chapter-themed heroes. */
  bgColor?: string;
  /**
   * Legacy props kept for compatibility with existing chapter pages that
   * still pass them. No-ops since we removed the animated hero rule.
   */
  showRule?: boolean;
  ruleColor?: string;
}

export default function InteriorHero({
  title,
  subtitle,
  chapterNumber,
  category = "visual",
  bgColor,
}: InteriorHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cat = CATEGORY[category];

  useEffect(() => {
    async function init() {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        const el = sectionRef.current;
        if (!el) return;
        el.querySelectorAll<HTMLElement>("[data-reveal], .cascade-word").forEach((n) => {
          n.style.opacity = "1";
          n.style.transform = "translate(0, 0)";
        });
        return;
      }

      const { gsap } = await import("gsap");
      if (!sectionRef.current) return;

      gsap.context(() => {
        // Eyebrow — word cascade
        gsap.to(".interior-hero-eyebrow .cascade-word", {
          opacity: 1, y: 0, duration: 0.55, ease: "power3.out",
          stagger: 0.025, delay: 0.1,
        });

        // Title — single block (display headlines read better whole)
        gsap.fromTo(".interior-hero-title",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.95, ease: "power3.out", delay: 0.25 });

        gsap.fromTo(".interior-hero-chapter",
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 1.6, ease: "power2.out", delay: 0.35 });

        if (subtitle) {
          // Subtitle — word cascade
          gsap.to(".interior-hero-sub .cascade-word", {
            opacity: 1, y: 0, duration: 0.75, ease: "power3.out",
            stagger: 0.028, delay: 0.6,
          });
        }

      }, sectionRef.current);
    }
    init();
  }, [subtitle]);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden ${bgColor ? "" : "bg-cream"}`}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
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
          }}
        >
          {cascadeWords(
            chapterNumber ? `Chapter ${chapterNumber} · ${cat.label}` : cat.label,
            { initialY: 10 }
          )}
        </p>

        {/* Oversized page title — proxima-sera, light (300), upright. Global standard. */}
        <h1
          className="interior-hero-title mt-6 md:mt-8"
          data-reveal
          style={{
            fontFamily: "proxima-sera, var(--serif)",
            fontWeight: 300,
            fontStyle: "normal",
            fontSize: "clamp(120px, 18vw, 280px)",
            letterSpacing: "-0.055em",
            lineHeight: 0.9,
            color: "#0f1c2e",
            opacity: 0,
          }}
        >
          {title}
        </h1>

        {/* Section hero subtitle — proxima-sera 400 normal, bumped size for legibility. */}
        {subtitle && (
          <p
            className="interior-hero-sub mt-6 md:mt-8 max-w-[640px]"
            data-reveal
            style={{
              fontFamily: "proxima-sera, var(--serif)",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "clamp(18px, 1.5vw, 22px)",
              lineHeight: 1.5,
              letterSpacing: "-0.005em",
              color: "rgba(15,28,46,0.88)",
            }}
          >
            {cascadeWords(subtitle, { initialY: 14 })}
          </p>
        )}
      </div>

    </section>
  );
}
