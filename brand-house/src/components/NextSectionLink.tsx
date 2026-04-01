"use client";

import { useRef, useEffect, useState } from "react";

interface NextSectionLinkProps {
  title: string;
  href: string;
}

export default function NextSectionLink({ title, href }: NextSectionLinkProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const [hov, setHov] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <a
        href={href}
        className="block no-underline group"
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{ background: hov ? "#0f1c2e" : "#f5f4f0" }}
      >
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
          <div className="border-t border-black/[0.06]" />
        </div>

        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-16 md:py-24 lg:py-32 relative overflow-hidden transition-colors duration-700">
          {/* Oversized arrow — the hero of this component */}
          <div
            className="absolute right-8 md:right-12 lg:right-16 top-1/2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: hov
                ? "translateY(-50%) translateX(6px)"
                : "translateY(-50%)",
              opacity: vis ? 1 : 0,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-700"
              style={{
                width: "clamp(80px, 10vw, 140px)",
                height: "clamp(80px, 10vw, 140px)",
                color: hov ? "rgba(143,197,217,0.15)" : "rgba(15,28,46,0.06)",
              }}
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>

          {/* Eyebrow */}
          <p
            className="font-sans text-[10px] font-800 uppercase tracking-[0.25em] mb-4 md:mb-5 transition-all duration-700"
            style={{
              color: hov ? "rgba(143,197,217,0.35)" : "rgba(15,28,46,0.18)",
              opacity: vis ? 1 : 0,
              transform: vis ? "translateY(0)" : "translateY(8px)",
              transition: "color 0.7s, opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
            }}
          >
            Next
          </p>

          {/* Section title — display scale */}
          <h2
            className="font-serif leading-[0.95] tracking-[-0.03em] transition-all duration-700 relative z-10"
            style={{
              fontSize: "clamp(42px, 7vw, 100px)",
              color: hov ? "#f5f4f0" : "#0f1c2e",
              opacity: vis ? 1 : 0,
              transform: vis ? "translateY(0)" : "translateY(16px)",
              transition: "color 0.7s, opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            {title}
          </h2>
        </div>
      </a>
    </div>
  );
}
