"use client";

import { useRef, useState, useCallback, useEffect } from "react";

interface ColorsInUseCarouselProps {
  children: React.ReactNode;
  bgColor?: string;
}

export default function ColorsInUseCarousel({ children, bgColor = "#f5f4f0" }: ColorsInUseCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    updateButtons();
  }, [updateButtons]);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 440, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Track — bleeds to right viewport edge */}
      <div
        ref={trackRef}
        onScroll={updateButtons}
        className="flex gap-5 overflow-x-auto no-scrollbar"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          paddingRight: "0px",
        }}
      >
        {children}
        {/* Spacer so last card isn't flush against edge */}
        <div className="shrink-0 w-8 md:w-12" aria-hidden="true" />
      </div>

      {/* Right-edge fade gradient */}
      <div
        className="absolute top-0 right-0 bottom-0 pointer-events-none"
        style={{
          width: "clamp(60px, 8vw, 120px)",
          background: `linear-gradient(to right, transparent, ${bgColor})`,
        }}
      />

      {/* Navigation — pill buttons, bottom-left */}
      <div className="flex items-center gap-2 mt-8">
        <button
          onClick={() => scroll(-1)}
          disabled={!canPrev}
          aria-label="Previous"
          className="group relative w-10 h-10 flex items-center justify-center transition-all duration-200 disabled:cursor-default"
        >
          <span
            className={`absolute inset-0 rounded-full transition-all duration-200 ${
              canPrev
                ? "bg-[#0f1c2e] group-hover:bg-[#1D5AA7]"
                : "bg-navy/10"
            }`}
          />
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`relative z-10 transition-colors duration-200 ${canPrev ? "text-white" : "text-navy/30"}`}
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={() => scroll(1)}
          disabled={!canNext}
          aria-label="Next"
          className="group relative w-10 h-10 flex items-center justify-center transition-all duration-200 disabled:cursor-default"
        >
          <span
            className={`absolute inset-0 rounded-full transition-all duration-200 ${
              canNext
                ? "bg-[#0f1c2e] group-hover:bg-[#1D5AA7]"
                : "bg-navy/10"
            }`}
          />
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`relative z-10 transition-colors duration-200 ${canNext ? "text-white" : "text-navy/30"}`}
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        {/* Scroll progress indicator */}
        <div className="ml-3 flex gap-1 items-center">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-[2px] rounded-full transition-all duration-300"
              style={{
                width: i === 0 && !canPrev ? 16 : 6,
                backgroundColor: i === 0 && !canPrev ? "#0f1c2e" : "rgba(15,28,46,0.15)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
