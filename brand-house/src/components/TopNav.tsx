"use client";

import { useEffect, useState } from "react";

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setPastHero(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openSearch() {
    window.dispatchEvent(new CustomEvent("open-search"));
  }

  const isDark = !pastHero;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? pastHero
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]"
            : "bg-black/40 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-5 flex items-center justify-between">
        {/* Brand mark */}
        <a
          href="/"
          className={`font-sans text-[0.68rem] font-800 tracking-[0.14em] uppercase transition-colors duration-300 no-underline ${
            isDark ? "text-white/80 hover:text-white" : "text-navy hover:text-navy"
          }`}
        >
          Brand.SBDC
        </a>

        {/* Right side — search + menu */}
        <div className="flex items-center gap-5">
          <button
            onClick={openSearch}
            className={`transition-colors duration-300 ${
              isDark ? "text-white/50 hover:text-white" : "text-text-tertiary hover:text-navy"
            }`}
            aria-label="Search"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>

          <button
            className={`transition-colors duration-300 ${
              isDark ? "text-white/50 hover:text-white" : "text-text-tertiary hover:text-navy"
            }`}
            aria-label="Menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 8h16" />
              <path d="M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
