"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

/** Each page gets a unique 5-stop diagonal gradient from the brand palette. */
export interface GradientDef {
  /** Gradient angle in degrees (default 135 = top-left to bottom-right). */
  angle?: number;
  /** Five hex color stops. */
  stops: [string, string, string, string, string];
}

interface InteriorHeroProps {
  title: string;
  subtitle?: string;
  /** Per-page gradient definition. Falls back to navy if omitted. */
  gradient?: GradientDef;
  /** Solid brand color background (takes precedence over gradient). */
  bg?: string;
}

/** Unique SVG filter ID per mount to avoid collisions when multiple heros render. */
let filterId = 0;

export default function InteriorHero({
  title,
  subtitle,
  gradient,
  bg,
}: InteriorHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const id = useRef(`grain-${++filterId}`);

  useEffect(() => {
    async function init() {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        const el = sectionRef.current;
        if (!el) return;
        const title = el.querySelector<HTMLElement>(".interior-hero-title");
        const accent = el.querySelector<HTMLElement>(".interior-hero-accent");
        const line = el.querySelector<HTMLElement>(".interior-hero-line");
        const sub = el.querySelector<HTMLElement>(".interior-hero-sub");
        if (title) { title.style.opacity = "1"; title.style.transform = "translateY(0)"; }
        if (accent) accent.style.transform = "scaleX(1)";
        if (line) line.style.transform = "scaleX(1)";
        if (sub) { sub.style.opacity = "1"; sub.style.transform = "translateY(0)"; }
        return;
      }

      const { gsap } = await import("gsap");
      if (!sectionRef.current) return;
      gsap.context(() => {
        gsap.fromTo(
          ".interior-hero-title",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.1 }
        );
        gsap.fromTo(
          ".interior-hero-accent",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.5, ease: "power2.out", delay: 0.4 }
        );
        gsap.fromTo(
          ".interior-hero-line",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.6, ease: "power2.out", delay: 0.5 }
        );
        if (subtitle) {
          gsap.fromTo(
            ".interior-hero-sub",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.6 }
          );
        }
      }, sectionRef.current);
    }
    init();
  }, [subtitle]);

  const angle = gradient?.angle ?? 135;
  const gradId = `grad-${id.current}`;

  // Convert angle to x1,y1 → x2,y2 for SVG linearGradient
  const rad = ((angle - 90) * Math.PI) / 180;
  const x2 = Math.round(50 + Math.cos(rad) * 50);
  const y2 = Math.round(50 + Math.sin(rad) * 50);
  const x1 = 100 - x2;
  const y1 = 100 - y2;

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Full-bleed background */}
      {bg ? (
        <div className="absolute inset-0" style={{ backgroundColor: bg }} />
      ) : gradient ? (
        <>
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id={gradId}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
              >
                <stop offset="0%" stopColor={gradient.stops[0]} />
                <stop offset="25%" stopColor={gradient.stops[1]} />
                <stop offset="50%" stopColor={gradient.stops[2]} />
                <stop offset="75%" stopColor={gradient.stops[3]} />
                <stop offset="100%" stopColor={gradient.stops[4]} />
              </linearGradient>
              <filter id={id.current} x="0%" y="0%" width="100%" height="100%">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.65"
                  numOctaves="3"
                  stitchTiles="stitch"
                  result="noise"
                />
                <feColorMatrix
                  type="saturate"
                  values="0"
                  in="noise"
                  result="mono"
                />
                <feBlend in="SourceGraphic" in2="mono" mode="soft-light" />
              </filter>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill={`url(#${gradId})`}
              filter={`url(#${id.current})`}
            />
          </svg>
          {/* Navy multiply overlay — tames grain, deepens color */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#0f1c2e",
              mixBlendMode: "multiply",
              opacity: 0.35,
            }}
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-navy" />
      )}

      {/* Vertical accent stripe — right edge */}
      <div
        className="interior-hero-accent absolute right-0 top-0 w-1 h-full bg-pool/30 hidden md:block"
        style={{ transformOrigin: "top center", transform: "scaleX(0)" }}
        aria-hidden="true"
      />

      {/* Text content — asymmetric left-align */}
      <div className="relative z-10 min-h-[42vh] md:min-h-[46vh] flex flex-col justify-end px-8 md:px-12 lg:px-16 pt-28 pb-10 md:pt-32 md:pb-14 max-w-[860px]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/40 hover:text-white/70 transition-colors mb-10 md:mb-14"
          style={{ fontFamily: "var(--sans-label)" }}
        >
          <span className="inline-block w-4 h-[1.5px] bg-current" />
          Brand House
        </Link>
        <h1
          className="interior-hero-title tracking-[-0.04em] leading-[0.92]"
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 500,
            fontSize: "clamp(48px, 8vw, 96px)",
            color: "#f5f4f0",
            opacity: 0,
          }}
        >
          {title}
        </h1>
        <div
          className="interior-hero-line h-[3px] bg-white/20 mt-6 max-w-[120px]"
          style={{ transformOrigin: "left center", transform: "scaleX(0)" }}
        />
        {subtitle && (
          <p
            className="interior-hero-sub text-white/50 text-base md:text-lg font-400 mt-5 max-w-xl leading-relaxed"
            style={{ opacity: 0, fontFamily: "var(--sans)" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
