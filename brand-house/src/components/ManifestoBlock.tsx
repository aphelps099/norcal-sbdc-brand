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
          if (labelEl) {
            labelEl.style.opacity = "1";
            labelEl.style.transform = "translateY(0)";
          }
          words.forEach((word, i) => {
            setTimeout(() => {
              word.style.opacity = "1";
              word.style.transform = "translateY(0)";
            }, 200 + i * 45);
          });
          if (ruleEl) {
            setTimeout(() => {
              ruleEl.style.opacity = "1";
              ruleEl.style.transform = "scaleX(1)";
            }, 200 + words.length * 45);
          }
          if (pillarsEl) {
            setTimeout(() => {
              pillarsEl.style.opacity = "1";
              pillarsEl.style.transform = "translateY(0)";
            }, 400 + words.length * 45);
          }
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
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
        minHeight: "80vh",
        background: "var(--navy)",
        padding: "120px var(--pad)",
      }}
    >
      <div className="max-w-[960px] mx-auto text-center">
        {/* Label */}
        <div
          className="manifesto-label font-mono text-[0.6rem] font-500 uppercase tracking-[0.3em] text-white/30 mb-16"
          style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.6s var(--ease-out)" }}
        >
          {label}
        </div>

        {/* Statement */}
        <p className="font-serif leading-[1.5] text-white/90"
          style={{ fontSize: "clamp(1.4rem, 3.2vw, 2.4rem)" }}
        >
          {wordsArr.map((word, i) => {
            const isAccent = accentWords.some((a) =>
              word.toLowerCase().replace(/[^a-z]/g, "").includes(a.toLowerCase())
            );
            return (
              <span
                key={i}
                className="m-word inline-block mr-[0.28em]"
                style={{
                  opacity: 0,
                  transform: "translateY(12px)",
                  transition: "all 0.5s var(--ease-out)",
                }}
              >
                {isAccent ? (
                  <em className="text-pool italic">{word}</em>
                ) : (
                  word
                )}
              </span>
            );
          })}
        </p>

        {/* Rule */}
        <div
          className="manifesto-rule w-12 h-px bg-white/15 mx-auto"
          style={{
            marginTop: "48px", marginBottom: "40px",
            opacity: 0, transform: "scaleX(0)", transformOrigin: "center",
            transition: "all 0.6s var(--ease-out)",
          }}
        />

        {/* Pillars */}
        <div
          className="manifesto-pillars flex items-center justify-center gap-5 flex-wrap"
          style={{
            opacity: 0, transform: "translateY(10px)",
            transition: "all 0.6s var(--ease-out)",
          }}
        >
          {pillars.map((pillar, i) => (
            <span key={pillar} className="flex items-center gap-5">
              {i > 0 && (
                <span className="w-[3px] h-[3px] rounded-full bg-white/15" />
              )}
              <span className="font-sans text-[0.6rem] font-500 uppercase tracking-[0.15em] text-white/35">
                {pillar}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
