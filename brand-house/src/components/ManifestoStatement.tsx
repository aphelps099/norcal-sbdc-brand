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
            opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
          }
        );
        gsap.fromTo(
          ".statement-link",
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.4,
            scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
          }
        );
      }, sectionRef.current);
    }

    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24 sm:py-40">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <h2
            className="statement-text font-serif text-navy leading-[1.1] tracking-[-0.03em] max-w-xl"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
          >
            Believe, achieve, and defy
            <br />
            the impossible.
          </h2>
          <a
            href="/voice"
            className="statement-link link-reveal font-mono text-[0.65rem] text-text-secondary uppercase self-start lg:self-auto"
            style={{ letterSpacing: "0.15em" }}
          >
            Learn about us &nbsp;&rarr;
          </a>
        </div>

        {/* Thin rule */}
        <div className="h-px bg-black/[0.06] mt-12" />
      </div>
    </section>
  );
}
