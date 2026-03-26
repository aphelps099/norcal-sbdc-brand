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
          el.classList.add("animate-in");
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-cream leading-[1.1] opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          style={{ transitionDelay: "0.1s" }}
        >
          {line1}{" "}
          <em className="text-pool italic">{emphasis}</em>
        </h2>
        {stat && (
          <div className="mt-12 flex flex-col items-center gap-1 opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: "0.3s" }}>
            <span className="font-mono text-5xl md:text-7xl font-bold text-strawberry">
              {stat}
            </span>
            {statLabel && (
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-cream/50 mt-2">
                {statLabel}
              </span>
            )}
          </div>
        )}
      </div>
      <style>{`
        .animate-in h2,
        .animate-in .mt-12 {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
