"use client";

import { useEffect, useRef } from "react";

interface ManifestoBlockProps {
  text: string;
  accentWords?: string[];
  label?: string;
  pillars?: string[];
}

export default function ManifestoBlock({
  text,
  accentWords = [],
  label = "Our Manifesto",
  pillars = ["Your Business, Better", "Your Business, Funded", "Your Business, People"],
}: ManifestoBlockProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll<HTMLSpanElement>(".m-word");
    const labelEl = el.querySelector<HTMLElement>(".manifesto-label");
    const ruleEl = el.querySelector<HTMLElement>(".manifesto-rule");
    const pillarsEl = el.querySelector<HTMLElement>(".manifesto-pillars");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Label fades in
          if (labelEl) {
            labelEl.style.opacity = "1";
            labelEl.style.transform = "translateY(0)";
          }

          // Words stagger in
          words.forEach((word, i) => {
            setTimeout(() => {
              word.style.opacity = "1";
              word.style.transform = "translateY(0)";
            }, 200 + i * 50);
          });

          // Rule extends
          if (ruleEl) {
            setTimeout(() => {
              ruleEl.style.opacity = "1";
              ruleEl.style.transform = "scaleX(1)";
            }, 200 + words.length * 50);
          }

          // Pillars fade in
          if (pillarsEl) {
            setTimeout(() => {
              pillarsEl.style.opacity = "1";
              pillarsEl.style.transform = "translateY(0)";
            }, 400 + words.length * 50);
          }

          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const wordsArr = text.split(" ");

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: "85vh",
        background: "var(--royal)",
        padding: "140px var(--pad)",
      }}
    >
      <div className="max-w-[1100px] mx-auto text-center">
        {/* Label */}
        <div
          className="manifesto-label font-mono text-[0.65rem] font-medium uppercase tracking-[0.3em] text-white/40 mb-14 transition-all duration-600 ease-out"
          style={{ opacity: 0, transform: "translateY(20px)", transitionDuration: "0.6s" }}
        >
          {label}
        </div>

        {/* Statement — word by word */}
        <p className="font-sans text-[clamp(1.6rem,4vw,3rem)] font-normal leading-[1.45] text-white tracking-[-0.015em]">
          {wordsArr.map((word, i) => {
            const isAccent = accentWords.some((a) =>
              word.toLowerCase().replace(/[^a-z]/g, "").includes(a.toLowerCase())
            );
            return (
              <span
                key={i}
                className="m-word inline-block mr-[0.3em] transition-all ease-out"
                style={{
                  opacity: 0,
                  transform: "translateY(14px)",
                  transitionDuration: "0.5s",
                }}
              >
                {isAccent ? (
                  <strong className="font-extrabold text-white">{word}</strong>
                ) : (
                  word
                )}
              </span>
            );
          })}
        </p>

        {/* Rule */}
        <div
          className="manifesto-rule w-16 h-px bg-white/25 mx-auto transition-all ease-out"
          style={{
            marginTop: "56px",
            marginBottom: "48px",
            opacity: 0,
            transform: "scaleX(0)",
            transformOrigin: "center",
            transitionDuration: "0.6s",
            transitionDelay: "0.6s",
          }}
        />

        {/* Pillars */}
        <div
          className="manifesto-pillars flex items-center justify-center gap-6 flex-wrap transition-all ease-out"
          style={{
            opacity: 0,
            transform: "translateY(12px)",
            transitionDuration: "0.6s",
            transitionDelay: "0.75s",
          }}
        >
          {pillars.map((pillar, i) => (
            <span key={pillar} className="flex items-center gap-6">
              {i > 0 && (
                <span className="w-[3px] h-[3px] rounded-full bg-white/20 flex-shrink-0" />
              )}
              <span className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-white/45">
                {pillar}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
