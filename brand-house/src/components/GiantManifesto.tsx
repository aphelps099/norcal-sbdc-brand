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
        const words = sectionRef.current!.querySelectorAll<HTMLElement>(".m-word");
        words.forEach((word, i) => {
          gsap.fromTo(
            word,
            { opacity: 0.08 },
            {
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: word,
                start: "top 82%",
                end: "top 50%",
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
    "Don't settle for generic advice. Your business deserves someone who gets it — an advisor who has been where you are, who understands the terrain, who knows what it takes to turn ambition into revenue.";

  const words = text.split(" ");

  return (
    <section ref={sectionRef} className="bg-navy-deep">
      <div className="max-w-[1100px] mx-auto px-8 sm:px-12 py-36 sm:py-52">
        <p
          className="font-sans text-white/30 uppercase font-600 mb-12"
          style={{ fontSize: "0.6rem", letterSpacing: "0.22em" }}
        >
          Our Manifesto
        </p>

        <h2 className="leading-[1.18] tracking-[-0.03em]" style={{ fontSize: "clamp(28px, 4.5vw, 56px)" }}>
          {words.map((word, i) => {
            // Highlight key words
            const highlights = ["deserves", "ambition", "revenue"];
            const isHighlight = highlights.includes(word.toLowerCase().replace(/[.,]/g, ""));

            return (
              <span key={i}>
                <span
                  className={`m-word font-serif inline-block ${isHighlight ? "text-royal-light" : "text-white"}`}
                  style={{ opacity: 0.08 }}
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
