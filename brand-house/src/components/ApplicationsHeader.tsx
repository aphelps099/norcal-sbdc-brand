"use client";

import { useEffect, useRef } from "react";

interface ApplicationsHeaderProps {
  title: string;
  lead?: string;
}

export default function ApplicationsHeader({ title, lead }: ApplicationsHeaderProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      const bar = wrapRef.current?.querySelector<HTMLElement>("[data-underline]");
      if (bar) bar.style.transform = "scaleX(1)";
      return;
    }

    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!wrapRef.current) return;

      ctx = gsap.context(() => {
        gsap.fromTo(
          "[data-underline]",
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: wrapRef.current,
              start: "top 78%",
            },
          }
        );
      }, wrapRef);
    }

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <div ref={wrapRef} className="pt-20 md:pt-28 pb-8 md:pb-10">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        <h2
          className="text-navy tracking-[-0.015em] mb-6 md:mb-8"
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 500,
            fontSize: "clamp(28px, 3.2vw, 40px)",
            lineHeight: 1.05,
          }}
        >
          {title}
        </h2>
      </div>

      {/* Container-width 2px rule (matches nav underline weight) */}
      <div className="relative max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        <div
          data-underline
          className="origin-left"
          aria-hidden
          style={{
            height: 2,
            background: "rgba(15,28,46,0.18)",
            transform: "scaleX(0)",
          }}
        />
      </div>

      {lead && (
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
          <p
            className="mt-6 md:mt-8 text-navy/55 font-sans max-w-[520px]"
            style={{ fontSize: "14px", lineHeight: 1.6 }}
          >
            {lead}
          </p>
        </div>
      )}
    </div>
  );
}
