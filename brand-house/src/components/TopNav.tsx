"use client";

import { useEffect, useState } from "react";

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setPastHero(window.scrollY > window.innerHeight * 0.9);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openSearch() {
    window.dispatchEvent(new CustomEvent("open-search"));
  }

  // Over the dark hero: white text. After hero: dark text on light bg.
  const isDark = !pastHero;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? pastHero
            ? "bg-white/80 backdrop-blur-xl border-b border-black/[0.04] shadow-[0_1px_12px_rgba(0,0,0,0.03)]"
            : "bg-navy-deep/60 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="/"
          className={`link-reveal font-sans text-[0.72rem] font-800 tracking-[0.12em] uppercase transition-colors duration-300 ${
            isDark ? "text-white/70 hover:text-white" : "text-navy hover:text-navy"
          }`}
        >
          NorCal SBDC
        </a>
        <div className="flex items-center gap-8">
          <a
            href="#chapters"
            className={`link-reveal font-sans text-[0.68rem] font-500 tracking-[0.1em] uppercase transition-colors duration-300 hidden sm:block ${
              isDark ? "text-white/50 hover:text-white" : "text-text-secondary hover:text-navy"
            }`}
          >
            Chapters
          </a>
          <button
            onClick={openSearch}
            className={`flex items-center gap-2.5 font-sans text-[0.68rem] font-500 tracking-[0.1em] uppercase transition-colors duration-300 ${
              isDark ? "text-white/50 hover:text-white" : "text-text-secondary hover:text-navy"
            }`}
            aria-label="Search"
          >
            Search
            <kbd className={`hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[0.55rem] font-mono ${
              isDark
                ? "border border-white/10 text-white/25"
                : "border border-black/10 text-text-tertiary"
            }`}>
              <span className="text-[0.5rem]">&#8984;</span>K
            </kbd>
          </button>
        </div>
      </div>
    </nav>
  );
}
