"use client";

import { useRef, useEffect, useState } from "react";

interface NextSectionLinkProps {
  title: string;
  href: string;
}

export default function NextSectionLink({ title, href }: NextSectionLinkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [hasHovered, setHasHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <a
        href={href}
        className="block no-underline relative"
        onMouseEnter={() => {
          setHovered(true);
          setHasHovered(true);
        }}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Navy sweep — slides up from bottom on hover, slides down on leave */}
        <div
          className="absolute inset-0"
          style={{
            background: "#0f1c2e",
            clipPath: hovered
              ? "inset(0 0 0 0)"
              : hasHovered
                ? "inset(100% 0 0 0)"
                : "inset(100% 0 0 0)",
            transition: "clip-path 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
        />

        {/* Top border */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <div className="max-w-[1100px] mx-auto px-8 md:px-12">
            <div className="border-t border-black/[0.06]" />
          </div>
        </div>

        <div className="relative z-10 max-w-[1100px] mx-auto px-8 md:px-12 py-20 md:py-28 lg:py-36">
          {/* Eyebrow */}
          <p
            className="font-sans text-[10px] font-800 uppercase tracking-[0.22em] mb-5 md:mb-6"
            style={{
              color: hovered ? "rgba(143,197,217,0.4)" : "rgba(15,28,46,0.2)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition:
                "color 0.6s, opacity 0.7s ease-out 0.1s, transform 0.7s ease-out 0.1s",
            }}
          >
            Next
          </p>

          {/* Section title */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
            }}
          >
            <h2
              className="tracking-[-0.03em] leading-[1] transition-colors duration-600"
              style={{
                fontFamily: "'Tiempos Fine', 'Tiempos', Georgia, serif",
                fontWeight: 300,
                fontSize: "clamp(40px, 7vw, 88px)",
                color: hovered ? "#f5f4f0" : "rgba(15,28,46,0.8)",
              }}
            >
              {title}
            </h2>
          </div>

          {/* Oversized arrow icon — fills right side as ambient element */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute right-4 md:right-8 top-1/2 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              width: "clamp(120px, 18vw, 260px)",
              height: "clamp(120px, 18vw, 260px)",
              color: hovered
                ? "rgba(143,197,217,0.08)"
                : "rgba(15,28,46,0.03)",
              transform: hovered
                ? "translateY(-50%) translateX(6px)"
                : "translateY(-50%)",
            }}
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </a>
    </div>
  );
}
