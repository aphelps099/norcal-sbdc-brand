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
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <a
        href={href}
        className="block no-underline relative group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Hard color-block background — navy, like a magazine page turn */}
        <div
          className="absolute inset-0 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            background: "#0f1c2e",
            clipPath: hovered ? "inset(0 0 0 0)" : "inset(100% 0 0 0)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-24 md:py-32 lg:py-40">
          {/* Eyebrow — thin, restrained */}
          <p
            className="font-sans text-[10px] font-800 uppercase tracking-[0.25em] mb-6 md:mb-8 transition-colors duration-700"
            style={{
              color: hovered ? "rgba(143,197,217,0.5)" : "rgba(15,28,46,0.2)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
              transition:
                "color 0.7s, opacity 0.7s ease-out 0.1s, transform 0.7s ease-out 0.1s",
            }}
          >
            Continue
          </p>

          {/* Title — display-scale serif, like a magazine cover line */}
          <div
            className="flex items-end justify-between gap-8"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition:
                "opacity 0.9s ease-out 0.2s, transform 0.9s ease-out 0.2s",
            }}
          >
            <h2
              className="font-serif tracking-[-0.04em] leading-[0.92] transition-colors duration-700"
              style={{
                fontSize: "clamp(48px, 8vw, 120px)",
                color: hovered ? "#f5f4f0" : "#0f1c2e",
              }}
            >
              {title}
            </h2>

            {/* Arrow — minimal, editorial */}
            <div
              className="hidden md:flex items-center gap-3 pb-2 md:pb-3 lg:pb-5 shrink-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: hovered ? "translateX(8px)" : "translateX(0)",
              }}
            >
              <div
                className="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  width: hovered ? "64px" : "40px",
                  height: "1px",
                  background: hovered
                    ? "rgba(143,197,217,0.3)"
                    : "rgba(15,28,46,0.12)",
                }}
              />
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-colors duration-700"
                style={{
                  color: hovered
                    ? "rgba(143,197,217,0.5)"
                    : "rgba(15,28,46,0.15)",
                }}
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>

          {/* Thin accent line — appears on hover */}
          <div
            className="mt-8 md:mt-12 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              width: hovered ? "80px" : "0px",
              height: "2px",
              background: "#F7024D",
              opacity: hovered ? 1 : 0,
            }}
          />
        </div>

        {/* Top border — subtle separation */}
        <div className="absolute top-0 left-0 right-0">
          <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
            <div className="border-t border-black/[0.06]" />
          </div>
        </div>
      </a>
    </div>
  );
}
