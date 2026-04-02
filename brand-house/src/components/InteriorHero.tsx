"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";

interface InteriorHeroProps {
  title: string;
  subtitle?: string;
  /** SVG pattern component rendered in the right panel */
  pattern?: ReactNode;
}

export default function InteriorHero({ title, subtitle, pattern }: InteriorHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function init() {
      const { gsap } = await import("gsap");
      if (!sectionRef.current) return;
      gsap.context(() => {
        gsap.fromTo(
          ".interior-hero-title",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.1 }
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
        if (pattern) {
          gsap.fromTo(
            ".interior-hero-pattern",
            { opacity: 0 },
            { opacity: 1, duration: 1, ease: "power2.out", delay: 0.3 }
          );
        }
      }, sectionRef.current);
    }
    init();
  }, [subtitle, pattern]);

  return (
    <section ref={sectionRef} className="relative bg-navy overflow-hidden">
      <div className="flex min-h-[50vh] md:min-h-[55vh]">
        {/* Left panel — text content (60%) */}
        <div className="relative z-10 flex-[3] flex flex-col justify-end px-8 md:px-12 lg:px-16 pt-32 pb-12 md:pt-40 md:pb-16 max-w-[780px]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-sans text-[11px] font-700 uppercase tracking-[0.2em] text-white/40 hover:text-white/70 transition-colors mb-10 md:mb-14"
          >
            <span className="inline-block w-4 h-[1.5px] bg-current" />
            Brand House
          </Link>
          <h1
            className="interior-hero-title tracking-[-0.03em] leading-[0.95]"
            style={{
              fontFamily: "'Tiempos Fine', 'Tiempos', Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(48px, 8vw, 96px)",
              color: "#f5f4f0",
              opacity: 0,
            }}
          >
            {title}
          </h1>
          <div
            className="interior-hero-line h-[2px] bg-white/20 mt-6 max-w-[120px]"
            style={{ transformOrigin: "left center", transform: "scaleX(0)" }}
          />
          {subtitle && (
            <p
              className="interior-hero-sub font-sans text-white/50 text-base md:text-lg font-500 mt-6 max-w-xl leading-relaxed"
              style={{ opacity: 0 }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Right panel — pattern (40%) */}
        {pattern && (
          <div
            className="interior-hero-pattern hidden md:block flex-[2] relative"
            style={{ opacity: 0 }}
          >
            <div className="absolute inset-0">
              {pattern}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
