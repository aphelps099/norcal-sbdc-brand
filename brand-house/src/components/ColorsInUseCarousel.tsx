"use client";

import { useRef, useState, useCallback } from "react";

interface ColorsInUseCarouselProps {
  children: React.ReactNode;
}

export default function ColorsInUseCarousel({ children }: ColorsInUseCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 400, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Track */}
      <div
        ref={trackRef}
        onScroll={updateButtons}
        className="flex gap-6 overflow-x-auto no-scrollbar"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          paddingBottom: 4,
        }}
      >
        {children}
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center gap-3 mt-6">
        <button
          onClick={() => scroll(-1)}
          disabled={!canPrev}
          aria-label="Previous"
          className="w-10 h-10 flex items-center justify-center border border-navy/10 transition-all duration-300 hover:border-navy/25 disabled:opacity-20 disabled:cursor-default"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-navy/60">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={() => scroll(1)}
          disabled={!canNext}
          aria-label="Next"
          className="w-10 h-10 flex items-center justify-center border border-navy/10 transition-all duration-300 hover:border-navy/25 disabled:opacity-20 disabled:cursor-default"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-navy/60">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
