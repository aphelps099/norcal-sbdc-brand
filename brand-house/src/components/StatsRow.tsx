"use client";

import { useEffect, useRef } from "react";

interface Stat {
  value: string;
  label: string;
}

interface StatsRowProps {
  stats: Stat[];
  heading?: string;
}

export default function StatsRow({ stats, heading }: StatsRowProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("stats-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6 border-t border-cream/5" ref={ref}>
      {heading && (
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-cream/40 text-center mb-12">
          {heading}
        </p>
      )}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="text-center opacity-0 translate-y-6 transition-all duration-700 ease-out"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="font-serif text-3xl md:text-5xl font-bold text-cream">
              {stat.value}
            </div>
            <div className="font-mono text-xs tracking-wider uppercase text-cream/40 mt-2">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .stats-visible div[style] {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
