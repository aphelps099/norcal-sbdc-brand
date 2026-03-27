"use client";

import { useEffect, useState, useCallback } from "react";

const NAV_LINKS = [
  { label: "Colors", href: "/colors" },
  { label: "Typography", href: "/typography" },
  { label: "Logos", href: "/logos" },
  { label: "Voice & Tone", href: "/voice" },
  { label: "Templates", href: "/templates" },
];

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setPastHero(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const openSearch = useCallback(() => {
    setMenuOpen(false);
    setTimeout(() => window.dispatchEvent(new CustomEvent("open-search")), 50);
  }, []);

  const isDark = !pastHero && !menuOpen;

  return (
    <>
      <style jsx>{`
        .burger-bar {
          display: block;
          height: 1.5px;
          background: currentColor;
          transition: transform 0.45s cubic-bezier(0.16,1,0.3,1),
                      width 0.45s cubic-bezier(0.16,1,0.3,1),
                      opacity 0.3s ease;
          transform-origin: center center;
        }
        .burger-top { width: 20px; }
        .burger-bottom { width: 15px; }
        .burger-wrap:hover .burger-bottom { width: 20px; }
        .burger-wrap[data-open="true"] .burger-top {
          transform: translateY(4px) rotate(45deg);
          width: 18px;
        }
        .burger-wrap[data-open="true"] .burger-bottom {
          transform: translateY(-4px) rotate(-45deg);
          width: 18px;
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          menuOpen
            ? "bg-transparent"
            : scrolled
              ? pastHero
                ? "bg-white/90 backdrop-blur-2xl shadow-[0_1px_0_rgba(0,0,0,0.04)]"
                : "bg-black/30 backdrop-blur-2xl"
              : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 sm:px-12 py-5 flex items-center justify-between relative z-[60]">
          <a
            href="/"
            className={`font-sans text-[0.72rem] font-800 tracking-[0.12em] uppercase transition-colors duration-500 no-underline ${
              menuOpen ? "text-white" : isDark ? "text-white/70 hover:text-white" : "text-navy hover:text-navy"
            }`}
          >
            Brand.SBDC
          </a>

          <div className="flex items-center gap-7">
            {/* Search */}
            <button
              onClick={openSearch}
              className={`transition-all duration-500 hover:scale-110 ${
                menuOpen ? "text-white/50 hover:text-white" : isDark ? "text-white/40 hover:text-white" : "text-text-tertiary hover:text-navy"
              }`}
              aria-label="Search"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>

            {/* Hamburger — asymmetric bars */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`burger-wrap flex flex-col items-end justify-center gap-[6.5px] w-[24px] h-[24px] transition-colors duration-500 ${
                menuOpen ? "text-white/80 hover:text-white" : isDark ? "text-white/40 hover:text-white" : "text-text-tertiary hover:text-navy"
              }`}
              data-open={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span className="burger-bar burger-top" />
              <span className="burger-bar burger-bottom" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-[45] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "var(--navy-deep)" }}
      >
        <div className="h-full flex flex-col items-center justify-center px-8">
          <nav className="flex flex-col items-center gap-1">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="group block py-3 no-underline text-center"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.5s ease ${0.08 + i * 0.05}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${0.08 + i * 0.05}s`,
                }}
              >
                <span
                  className="font-serif text-white/70 group-hover:text-white transition-all duration-400 tracking-[-0.03em] inline-block group-hover:translate-x-2"
                  style={{ fontSize: "clamp(34px, 5.5vw, 64px)" }}
                >
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          <div
            className="absolute bottom-12 left-0 right-0 text-center"
            style={{
              opacity: menuOpen ? 1 : 0,
              transition: "opacity 0.5s ease 0.45s",
            }}
          >
            <a
              href="https://norcalsbdc.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-white/15 hover:text-white/35 transition-colors duration-300 no-underline font-800 uppercase"
              style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}
            >
              norcalsbdc.org
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
