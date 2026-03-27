"use client";

import { useEffect, useRef } from "react";

export default function GiantManifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;

      ctx = gsap.context(() => {
        // Eyebrow
        gsap.fromTo(
          ".manifesto-eyebrow",
          { opacity: 0, y: 12 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
          }
        );

        // Each word reveals on scroll
        const words = sectionRef.current!.querySelectorAll<HTMLElement>(".m-word");
        words.forEach((word) => {
          gsap.fromTo(
            word,
            { opacity: 0.06 },
            {
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: word,
                start: "top 85%",
                end: "top 55%",
                scrub: true,
              },
            }
          );
        });
      }, sectionRef.current);
    }

    init();
    return () => { ctx?.revert(); };
  }, []);

  const text =
    "Don\u2019t settle for generic advice. Your business deserves someone who gets it \u2014 an advisor who has been where you are, who understands the terrain, who knows what it takes to turn ambition into revenue.";

  const words = text.split(" ");
  const highlights = ["deserves", "ambition", "revenue."];

  return (
    <section ref={sectionRef} className="bg-navy-deep relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-8 sm:px-12 py-40 sm:py-56">
        <p
          className="manifesto-eyebrow font-sans text-white/25 uppercase font-800 mb-14 sm:mb-20"
          style={{ fontSize: "0.7rem", letterSpacing: "0.25em" }}
        >
          Our Manifesto
        </p>

        <h2 className="leading-[1.22] tracking-[-0.025em]" style={{ fontSize: "clamp(26px, 4vw, 50px)" }}>
          {words.map((word, i) => {
            const isHighlight = highlights.includes(word.toLowerCase());
            return (
              <span key={i}>
                <span
                  className={`m-word font-serif inline-block ${isHighlight ? "text-pool" : "text-white/95"}`}
                  style={{ opacity: 0.06 }}
                >
                  {word}
                </span>
                {" "}
              </span>
            );
          })}
        </h2>
      </div>
    </section>
  );
}
