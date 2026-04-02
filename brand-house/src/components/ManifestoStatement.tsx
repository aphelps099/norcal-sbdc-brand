"use client";

import { useEffect, useRef } from "react";

export default function ManifestoStatement() {
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
          ".statement-text",
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 1.3, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 68%" },
          }
        );
        gsap.fromTo(
          ".statement-link",
          { opacity: 0, y: 16 },
          {
            opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.35,
            scrollTrigger: { trigger: sectionRef.current, start: "top 68%" },
          }
        );
      }, sectionRef.current);
    }

    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white">
      <div className="max-w-[1200px] mx-auto px-8 sm:px-12 py-28 sm:py-44">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <h2
            className="statement-text font-sans text-navy leading-[1.08] tracking-[-0.03em] max-w-2xl"
            style={{ fontSize: "clamp(34px, 4.8vw, 62px)" }}
          >
            Believe, achieve, and defy<br />
            the impossible.
          </h2>
          <a
            href="/voice"
            className="statement-link link-reveal font-sans text-[0.68rem] font-600 text-text-secondary uppercase tracking-[0.14em] self-start lg:self-auto whitespace-nowrap"
          >
            Learn about us &nbsp;&rarr;
          </a>
        </div>

        <div className="h-px bg-black/[0.06] mt-14" />
      </div>
    </section>
  );
}
