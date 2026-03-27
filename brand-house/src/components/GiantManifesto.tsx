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
        gsap.fromTo(
          ".manifesto-eyebrow",
          { opacity: 0, y: 12 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
          }
        );

        const words = sectionRef.current!.querySelectorAll<HTMLElement>(".m-word");
        words.forEach((word) => {
          gsap.fromTo(
            word,
            { opacity: 0.08 },
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

  const segments = [
    { text: "Our clients don\u2019t settle for generic advice. That\u2019s why they ", highlight: false },
    { text: "trust", highlight: true },
    { text: " SBDC. They get an advisor who ", highlight: false },
    { text: "understands", highlight: true },
    { text: " them, knows their market, their struggle, their ", highlight: false },
    { text: "ambitions", highlight: true },
    { text: " \u2014 and who knows what it takes to turn ambition into success.", highlight: false },
  ];

  // Build word array with highlight flags
  const words: { text: string; highlight: boolean }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").filter(Boolean).forEach((w) => {
      words.push({ text: w, highlight: seg.highlight });
    });
  });

  return (
    <section ref={sectionRef} className="bg-pool/20 relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-8 sm:px-12 py-40 sm:py-56">
        <p
          className="manifesto-eyebrow font-sans text-navy/40 uppercase font-700 mb-14 sm:mb-20"
          style={{ fontSize: "0.8rem", letterSpacing: "0.2em" }}
        >
          Our Manifesto
        </p>

        <h2 className="leading-[1.25] tracking-[-0.02em]" style={{ fontSize: "clamp(26px, 3.8vw, 48px)" }}>
          {words.map((word, i) => (
            <span key={i}>
              <span
                className={`m-word font-serif inline-block ${word.highlight ? "text-royal" : "text-navy"}`}
                style={{
                  opacity: 0.08,
                  textDecoration: word.highlight ? "underline" : "none",
                  textDecorationColor: "var(--royal)",
                  textUnderlineOffset: "6px",
                  textDecorationThickness: "2px",
                }}
              >
                {word.text}
              </span>
              {" "}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}
