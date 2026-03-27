"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface InteriorHeroProps {
  title: string;
  subtitle?: string;
}

export default function InteriorHero({ title, subtitle }: InteriorHeroProps) {
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
      }, sectionRef.current);
    }
    init();
  }, [subtitle]);

  return (
    <section ref={sectionRef} className="relative bg-navy overflow-hidden">
      <div className="max-w-[780px] mx-auto px-8 md:px-12 pt-32 pb-20 md:pt-40 md:pb-28">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-white/40 hover:text-white/70 transition-colors mb-12"
        >
          <span className="inline-block w-4 h-[1.5px] bg-current" />
          Brand House
        </Link>
        <h1
          className="interior-hero-title font-serif text-white leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: "clamp(48px, 8vw, 120px)", opacity: 0 }}
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
    </section>
  );
}
