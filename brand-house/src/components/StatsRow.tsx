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
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-24 px-6" ref={ref}>
      {heading && (
        <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-tertiary text-center mb-16">
          {heading}
        </p>
      )}
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="stat-item text-center opacity-0 translate-y-5 transition-all duration-700 ease-out"
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="font-sans text-navy leading-none tracking-[-0.02em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              {stat.value}
            </div>
            <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-text-tertiary mt-3">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .stats-visible .stat-item {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
