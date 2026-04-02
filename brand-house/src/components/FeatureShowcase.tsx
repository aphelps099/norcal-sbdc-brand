"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    title: "Progress Tracking",
    description:
      "Your resources and stakeholders can easily track project milestones, monitor task statuses through status updates, dashboards, and reports.",
  },
  {
    title: "Centralized Data",
    description:
      "One source of truth for all brand assets, guidelines, templates, and collateral — always current, always accessible.",
  },
  {
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
          { opacity: 0, x: -30 },
          {
            opacity: 1, x: 0, duration: 1.1, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
          }
        );
        gsap.fromTo(
          ".feature-right",
          { opacity: 0, x: 30 },
          {
            opacity: 1, x: 0, duration: 1.1, ease: "power3.out", delay: 0.15,
            scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
          }
        );
      }, sectionRef.current);
    }

    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="bg-cream-warm">
      <div className="max-w-[1200px] mx-auto px-8 sm:px-12 py-28 sm:py-44">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Left — feature list */}
          <div className="feature-left">
            {features.map((f, i) => (
              <div
                key={i}
                className={`${i > 0 ? "mt-10 pt-10 border-t border-black/[0.06]" : ""}`}
              >
                <h3 className="font-sans text-[0.92rem] text-navy tracking-[-0.01em]">
                  {f.title}
                </h3>
                <p className="font-sans text-[0.82rem] text-text-secondary leading-[1.65] mt-2">
                  {f.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right — image */}
          <div className="feature-right">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&fit=crop&auto=format"
                alt="Dashboard interface"
                loading="lazy"
                className="w-full"
                style={{ aspectRatio: "4/3", objectFit: "cover" }}
              />
              {/* Floating stat card */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-[240px] bg-white/95 backdrop-blur-xl rounded-xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
                <p
                  className="font-sans text-text-tertiary uppercase font-600"
                  style={{ fontSize: "0.58rem", letterSpacing: "0.14em" }}
                >
                  Brand Consistency
                </p>
                <p className="font-sans text-[1.1rem] text-navy mt-1.5 tracking-[-0.02em]">
                  94% alignment
                </p>
                <p className="font-sans text-[0.68rem] text-text-secondary mt-0.5 leading-[1.5]">
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
