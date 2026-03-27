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
    <div ref={containerRef} className="relative overflow-hidden">
      <a
        href={href}
        className="block no-underline relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Pool bg sweep */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            background: "#8FC5D9",
            transform: hovered ? "translateY(0)" : "translateY(100%)",
          }}
        />

        <div className="relative z-10 max-w-[960px] mx-auto px-8 md:px-12 py-20 md:py-28">
          {/* Eyebrow */}
          <p
            className="font-sans text-[11px] font-800 uppercase tracking-[0.18em] mb-5 transition-colors duration-500"
            style={{
              color: hovered ? "rgba(15,28,46,0.5)" : "rgba(15,28,46,0.25)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: "color 0.5s, opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s",
            }}
          >
            Next
          </p>

          {/* Title */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
            }}
          >
            <h2
              className="font-serif tracking-[-0.03em] leading-[1.05] transition-colors duration-500"
              style={{
                fontSize: "clamp(36px, 6vw, 72px)",
                color: hovered ? "#0f1c2e" : "rgba(15,28,46,0.75)",
              }}
            >
              {title}
            </h2>
          </div>

          {/* Oversized arrow — bg accent element */}
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              color: hovered ? "rgba(15,28,46,0.15)" : "rgba(15,28,46,0.05)",
              transform: `translateY(-50%) ${hovered ? "translateX(8px) scale(1.1)" : "translateX(0) scale(1)"}`,
            }}
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>

        {/* Top border */}
        <div className="absolute top-0 left-0 right-0">
          <div className="max-w-[960px] mx-auto px-8 md:px-12">
            <div className="border-t border-black/[0.06]" />
          </div>
        </div>
      </a>
    </div>
  );
}
