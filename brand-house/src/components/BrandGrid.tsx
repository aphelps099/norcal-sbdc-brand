"use client";

import { useEffect, useRef } from "react";

const brandItems = [
  {
    title: "Colors",
    description: "Primary palette, tints, gradients, and usage guidelines.",
    href: "/colors",
    accent: "#1D5AA7",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2Z" />
      </svg>
    ),
  },
  {
    title: "Typography",
    description: "Tiempos, Proxima Nova, type scale, and pairing rules.",
    href: "/typography",
    accent: "#0f1c2e",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 7 4 4 20 4 20 7" />
        <line x1="9" y1="20" x2="15" y2="20" />
        <line x1="12" y1="4" x2="12" y2="20" />
      </svg>
    ),
  },
  {
    title: "Logos",
    description: "Logo suite, lockups, clear space, and usage dos/don'ts.",
    href: "/logos",
    accent: "#c4543a",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="12" cy="12" r="4" />
        <line x1="3" y1="3" x2="8" y2="8" />
        <line x1="21" y1="3" x2="16" y2="8" />
        <line x1="3" y1="21" x2="8" y2="16" />
        <line x1="21" y1="21" x2="16" y2="16" />
      </svg>
    ),
  },
  {
    title: "Voice & Tone",
    description: "How we write, speak, and communicate as a brand.",
    href: "/voice",
    accent: "#8FC5D9",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    title: "Photography",
    description: "Image style, treatments, duotone, and composition guidelines.",
    href: "#",
    accent: "#22c55e",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
    ),
  },
  {
    title: "Templates",
    description: "Ready-to-use layouts, copy blocks, and document templates.",
    href: "/templates",
    accent: "#f59e0b",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
];

export default function BrandGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;

      ctx = gsap.context(() => {
        // Header
        gsap.fromTo(
          ".brand-grid-header",
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
          }
        );

        // Cards stagger
        const cards = sectionRef.current!.querySelectorAll<HTMLElement>(".brand-card");
        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1, y: 0,
              duration: 0.8, ease: "power3.out",
              delay: i * 0.08,
              scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
            }
          );
        });
      }, sectionRef.current);
    }

    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="bg-cream" id="chapters">
      <div className="max-w-6xl mx-auto px-6 py-24 sm:py-32">
        {/* Header */}
        <div className="brand-grid-header mb-16">
          <p
            className="font-mono text-text-tertiary uppercase"
            style={{ fontSize: "0.6rem", letterSpacing: "0.25em" }}
          >
            Brand Components
          </p>
          <h2
            className="font-serif text-navy mt-4 leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Everything you need,<br />
            in one place.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {brandItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="brand-card group relative bg-white rounded-lg p-7 sm:p-8 no-underline transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1"
              style={{ border: "1px solid rgba(0,0,0,0.04)" }}
            >
              {/* Accent top bar */}
              <div
                className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: item.accent }}
              />

              {/* Icon */}
              <div
                className="mb-5 transition-colors duration-300"
                style={{ color: item.accent }}
              >
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="font-sans text-[0.9rem] font-800 text-navy tracking-[-0.01em]">
                {item.title}
              </h3>
              <p className="font-sans text-[0.75rem] text-text-secondary leading-[1.6] mt-2">
                {item.description}
              </p>

              {/* Arrow */}
              <div className="mt-5 flex items-center gap-1.5 text-text-tertiary group-hover:text-navy transition-colors duration-300">
                <span
                  className="font-mono uppercase"
                  style={{ fontSize: "0.58rem", letterSpacing: "0.12em" }}
                >
                  Explore
                </span>
                <svg
                  width="12" height="12" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
