"use client";

import { useRef, useEffect, useState } from "react";

interface NextSectionLinkProps {
  title: string;
  href: string;
}

export default function NextSectionLink({ title, href }: NextSectionLinkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
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
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-white">
      <div className="max-w-[960px] mx-auto px-8 md:px-12">
        <div className="border-t border-black/[0.06]" />
      </div>

      <a
        href={href}
        className="group block max-w-[960px] mx-auto px-8 md:px-12 py-20 md:py-28 no-underline"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Eyebrow */}
        <p
          className="font-sans text-[11px] font-800 uppercase tracking-[0.18em] mb-5 transition-all duration-700 ease-out"
          style={{
            color: hovered ? "#1D5AA7" : "rgba(15,28,46,0.25)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transitionDelay: visible ? "0.1s" : "0s",
          }}
        >
          Next
        </p>

        {/* Title with color fill animation */}
        <div
          className="relative overflow-hidden"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
          }}
        >
          <h2
            className="font-serif tracking-[-0.03em] leading-[1.05] transition-colors duration-700 ease-out"
            style={{
              fontSize: "clamp(36px, 6vw, 72px)",
              color: hovered ? "#1D5AA7" : "#0f1c2e",
            }}
          >
            {title}
          </h2>

          {/* Animated underline */}
          <div
            className="mt-3 h-[2px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              width: hovered ? "80px" : "40px",
              background: hovered
                ? "linear-gradient(90deg, #1D5AA7, #8FC5D9)"
                : "rgba(15,28,46,0.1)",
            }}
          />
        </div>

        {/* Arrow */}
        <div
          className="mt-8 transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? hovered
                ? "translateX(8px)"
                : "translateX(0)"
              : "translateY(12px)",
            transitionDelay: visible ? "0.3s" : "0s",
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-colors duration-700"
            style={{ color: hovered ? "#1D5AA7" : "rgba(15,28,46,0.2)" }}
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </a>
    </div>
  );
}
