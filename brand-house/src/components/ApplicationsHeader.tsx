"use client";

import { useEffect, useRef } from "react";

interface ApplicationsHeaderProps {
  eyebrow?: string;
  title: string;
  lead?: string;
}

export default function ApplicationsHeader({
  eyebrow = "02",
  title,
  lead,
}: ApplicationsHeaderProps) {
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
    <div ref={wrapRef} className="max-w-[1280px] mx-auto px-8 md:px-12 pt-20 md:pt-28 pb-10 md:pb-14">
      <p className="font-label text-[10px] uppercase tracking-[0.16em] text-navy/35 mb-5">
        {eyebrow}
      </p>

      <div className="relative inline-block pb-4 md:pb-6">
        <h2
          className="tracking-[-0.035em] text-navy leading-[0.95]"
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 500,
            fontSize: "clamp(56px, 11vw, 144px)",
          }}
        >
          {title}
        </h2>
        <span
          data-underline
          className="absolute left-0 right-0 bottom-0 block h-[2px] bg-[#0f1c2e] origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      {lead && (
        <p className="mt-8 text-navy/55 text-[15px] md:text-[16px] leading-[1.6] font-sans max-w-[440px]">
          {lead}
        </p>
      )}
    </div>
  );
}
