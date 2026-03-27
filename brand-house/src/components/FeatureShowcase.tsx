"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    title: "Progress Tracking",
    description:
      "Your resources and stakeholders can easily track project milestones, monitor task statuses through Status updates, dashboards, and reports.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    title: "Centralized Data",
    description:
      "One source of truth for all brand assets, guidelines, templates, and collateral — always current, always accessible.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Accountability",
    description:
      "Clear ownership, consistent output. Every team member knows the standards and can deliver on-brand work, every time.",
  },
];

export default function FeatureShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;

      ctx = gsap.context(() => {
        gsap.fromTo(
          ".feature-left",
          { opacity: 0, x: -40 },
          {
            opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
          }
        );
        gsap.fromTo(
          ".feature-right",
          { opacity: 0, x: 40 },
          {
            opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.2,
            scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
          }
        );
      }, sectionRef.current);
    }

    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="bg-cream-warm">
      <div className="max-w-6xl mx-auto px-6 py-24 sm:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — feature list */}
          <div className="feature-left">
            {features.map((f, i) => (
              <div
                key={i}
                className={`flex gap-4 ${i > 0 ? "mt-8 pt-8 border-t border-black/[0.06]" : ""}`}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white flex items-center justify-center text-navy">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-sans text-[0.85rem] font-800 text-navy tracking-[-0.01em]">
                    {f.title}
                  </h3>
                  <p className="font-sans text-[0.8rem] text-text-secondary leading-[1.6] mt-1.5">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — dark UI mockup */}
          <div className="feature-right relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&fit=crop&auto=format"
                alt="Dashboard interface"
                loading="lazy"
                className="w-full"
                style={{ aspectRatio: "4/3", objectFit: "cover" }}
              />
              {/* Glass overlay card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[260px] bg-white/90 backdrop-blur-lg rounded-lg p-4 shadow-lg">
                <p className="font-mono text-[0.55rem] text-text-tertiary uppercase tracking-[0.15em]">
                  Brand Consistency
                </p>
                <p className="font-sans text-[0.8rem] font-800 text-navy mt-1">
                  94% alignment
                </p>
                <p className="font-sans text-[0.65rem] text-text-secondary mt-0.5">
                  Across all 14 regional centers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
