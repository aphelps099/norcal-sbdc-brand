"use client";

import { useEffect, useRef } from "react";

interface HeroHeadlineProps {
  line1: string;
  emphasis: string;
  stat?: string;
  statLabel?: string;
}

export default function HeroHeadline({
  line1,
  emphasis,
  stat,
  statLabel,
}: HeroHeadlineProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-cream py-28 md:py-40 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="hero-h font-sans text-navy leading-[1.08] tracking-[-0.02em]"
          style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)" }}
        >
          <span className="hero-h-line opacity-0 translate-y-6 inline-block transition-all duration-[900ms] ease-out">
            {line1}
          </span>
          <br />
          <span className="hero-h-em opacity-0 translate-y-6 inline-block transition-all duration-[900ms] ease-out delay-150">
            <em className="text-royal italic">{emphasis}</em>
          </span>
        </h2>

        {stat && (
          <div className="hero-stat mt-16 flex flex-col items-center gap-2 opacity-0 translate-y-6 transition-all duration-[900ms] ease-out delay-300">
            <span className="font-sans text-[clamp(3rem,8vw,5.5rem)] font-900 text-strawberry leading-none tracking-[-0.03em]">
              {stat}
            </span>
            {statLabel && (
              <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-text-tertiary mt-1">
                {statLabel}
              </span>
            )}
          </div>
        )}
      </div>

      <style>{`
        .is-visible .hero-h-line,
        .is-visible .hero-h-em,
        .is-visible .hero-stat {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
