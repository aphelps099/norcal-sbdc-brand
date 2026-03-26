"use client";

import { useEffect, useState } from "react";

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openSearch() {
    window.dispatchEvent(new CustomEvent("open-search"));
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-navy-deep/70 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="/"
          className="font-mono text-[0.7rem] tracking-[0.25em] uppercase text-cream/50 hover:text-cream transition-colors duration-300"
        >
          NorCal SBDC
        </a>
        <div className="flex items-center gap-8">
          <a
            href="#chapters"
            className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-cream/40 hover:text-cream transition-colors duration-300 hidden sm:block"
          >
            Chapters
          </a>
          <button
            onClick={openSearch}
            className="flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.15em] uppercase text-cream/40 hover:text-cream transition-colors duration-300"
            aria-label="Search"
          >
            Search
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded border border-cream/10 text-[0.55rem] text-cream/25 font-mono">
              <span className="text-[0.5rem]">&#8984;</span>K
            </kbd>
          </button>
        </div>
      </div>
    </nav>
  );
}
