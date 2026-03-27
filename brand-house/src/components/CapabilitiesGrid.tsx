"use client";

import { useEffect, useRef } from "react";

const capabilities = [
  {
    title: "Social Media",
    description: "Engaging content that resonates with your audience, fostering community engagement and brand loyalty.",
    items: ["Content Creation and Curation", "Social Media Strategy", "Community Management"],
  },
  {
    title: "SEO Auditing",
    description: "Thorough keyword research to identify the most relevant and high-traffic terms for your business.",
    items: ["Keyword Research / Optimization", "Technical SEO Audits", "Link Building and Outreach"],
  },
  {
    title: "Advertising",
    description: "Maximize your return on investment through strategic ad campaigns and ensure your ads reach the right audience.",
    items: ["Campaign Management", "Creative Development", "Tracking and Reporting"],
  },
];

export default function CapabilitiesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;

      ctx = gsap.context(() => {
        // Header
        gsap.fromTo(
          ".cap-header",
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
          }
        );

        // Columns stagger
        const cols = sectionRef.current!.querySelectorAll<HTMLElement>(".cap-col");
        cols.forEach((col, i) => {
          gsap.fromTo(
            col,
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
              delay: i * 0.15,
              scrollTrigger: { trigger: sectionRef.current, start: "top 60%" },
            }
          );
        });
      }, sectionRef.current);
    }

    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24 sm:py-32">
        {/* Header */}
        <div className="cap-header text-center mb-16 sm:mb-24">
          <p
            className="font-mono text-text-tertiary uppercase"
            style={{ fontSize: "0.6rem", letterSpacing: "0.25em" }}
          >
            Capabilities
          </p>
          <h2
            className="font-serif text-navy mt-4 leading-[1.15] tracking-[-0.02em]"
            style={{ fontSize: "clamp(24px, 3.5vw, 44px)" }}
          >
            Elevate your brand with our
            <br />
            tailored solutions.
          </h2>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {capabilities.map((cap, i) => (
            <div key={i} className="cap-col">
              <h3 className="font-sans text-[0.85rem] font-800 text-navy tracking-[-0.01em]">
                {cap.title}
              </h3>
              <p className="font-sans text-[0.78rem] text-text-secondary leading-[1.6] mt-3">
                {cap.description}
              </p>
              <ul className="mt-5 space-y-2.5">
                {cap.items.map((item, j) => (
                  <li
                    key={j}
                    className="font-sans text-[0.72rem] text-navy pb-2.5 border-b border-black/[0.06]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
