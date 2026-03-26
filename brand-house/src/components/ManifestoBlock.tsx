"use client";

import { useEffect, useRef } from "react";

interface ManifestoBlockProps {
  text: string;
  accentWords?: string[];
}

export default function ManifestoBlock({
  text,
  accentWords = [],
}: ManifestoBlockProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll<HTMLSpanElement>(".m-word");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          words.forEach((word, i) => {
            setTimeout(() => {
              word.style.opacity = "1";
              word.style.transform = "translateY(0)";
            }, i * 60);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const wordsArr = text.split(" ");

  return (
    <section className="py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <p className="font-serif text-2xl md:text-4xl lg:text-5xl leading-[1.3] text-cream/90">
          {wordsArr.map((word, i) => {
            const isAccent = accentWords.some((a) =>
              word.toLowerCase().includes(a.toLowerCase())
            );
            return (
              <span
                key={i}
                className="m-word inline-block mr-[0.3em] transition-all duration-500 ease-out"
                style={{ opacity: 0, transform: "translateY(12px)" }}
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
      </div>
    </section>
  );
}
