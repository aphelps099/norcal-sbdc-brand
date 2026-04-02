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
        gsap.fromTo(
          ".cap-header",
          { opacity: 0, y: 28 },
          {
            opacity: 1, y: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
          }
        );

        const cols = sectionRef.current!.querySelectorAll<HTMLElement>(".cap-col");
        cols.forEach((col, i) => {
          gsap.fromTo(
            col,
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0, duration: 1, ease: "power3.out",
              delay: i * 0.12,
              scrollTrigger: { trigger: sectionRef.current, start: "top 62%" },
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
      <div className="max-w-[1200px] mx-auto px-8 sm:px-12 py-28 sm:py-36">
        {/* Header */}
        <div className="cap-header text-center mb-20 sm:mb-28">
          <p
            className="font-sans text-text-tertiary uppercase font-600"
            style={{ fontSize: "0.6rem", letterSpacing: "0.22em" }}
          >
            Capabilities
          </p>
          <h2
            className="font-sans text-navy mt-5 leading-[1.12] tracking-[-0.025em]"
            style={{ fontSize: "clamp(26px, 3.8vw, 48px)" }}
          >
            Elevate your brand with our<br />
            tailored solutions.
          </h2>
        </div>

        {/* 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10 lg:gap-20">
          {capabilities.map((cap, i) => (
            <div key={i} className="cap-col">
              <h3 className="font-sans text-[0.88rem] text-navy tracking-[-0.01em]">
                {cap.title}
              </h3>
              <p className="font-sans text-[0.8rem] text-text-secondary leading-[1.65] mt-3">
                {cap.description}
              </p>
              <ul className="mt-6 space-y-3">
                {cap.items.map((item, j) => (
                  <li
                    key={j}
                    className="font-sans text-[0.74rem] text-navy/80 pb-3 border-b border-black/[0.05]"
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
