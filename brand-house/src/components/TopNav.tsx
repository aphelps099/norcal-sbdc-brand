"use client";

import { useEffect, useState } from "react";

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-deep/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-mono text-xs tracking-[0.2em] uppercase text-cream/60 hover:text-cream transition-colors">
          NorCal SBDC
        </a>
        <div className="flex items-center gap-6">
          <a href="#chapters" className="font-mono text-xs tracking-wider uppercase text-cream/50 hover:text-cream transition-colors">
            Chapters
          </a>
          <button
            className="font-mono text-xs tracking-wider uppercase text-cream/50 hover:text-cream transition-colors"
            aria-label="Search"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}
