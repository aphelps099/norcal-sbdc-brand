"use client";

import { useEffect, useState, useCallback, useRef } from "react";

const NAV_LINKS = [
  { label: "Colors",      href: "/colors",     color: "#8FC5D9" },  // Pool
  { label: "Typography",  href: "/typography",  color: "#F7024D" },  // Strawberry
  { label: "Logos",        href: "/logos",       color: "#1D5AA7" },  // Royal
  { label: "Voice & Tone", href: "/voice",      color: "#c4543a" },  // Coral
  { label: "Templates",   href: "/templates",   color: "#a8d8e8" },  // Pool-bright
];

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
      if (closeTimer.current) clearTimeout(closeTimer.current);
      setMounted(true);
    } else {
      document.body.style.overflow = "";
      setHoveredIndex(null);
      closeTimer.current = setTimeout(() => setMounted(false), 750);
    }
    return () => {
      document.body.style.overflow = "";
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
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

          {/* Hamburger only — search moved into menu */}
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
      </nav>

      {/* Full-screen menu overlay */}
      {mounted && (
        <div
          className={`fixed inset-0 z-[45] transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ background: "linear-gradient(180deg, #060e18 0%, #091422 50%, #0c1a2e 100%)" }}
        >
          {/* Gradient accent */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(165deg, rgba(29,90,167,0.08) 0%, transparent 40%, rgba(143,197,217,0.04) 100%)",
              zIndex: 1,
            }}
          />
          {/* Film grain */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.06,
              zIndex: 2,
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E\")",
              backgroundSize: "200px 200px",
              mixBlendMode: "overlay" as const,
            }}
          />

          <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-24">
            {/* Nav links — massive Tiempos serif */}
            <nav className="flex flex-col">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="block no-underline"
                  style={{
                    clipPath: menuOpen
                      ? "inset(0 0 0% 0)"
                      : "inset(0 0 100% 0)",
                    transform: menuOpen ? "translateY(0)" : "translateY(30px)",
                    transition: `clip-path 0.7s cubic-bezier(0.16,1,0.3,1) ${0.08 + i * 0.06}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${0.08 + i * 0.06}s`,
                  }}
                >
                  <span
                    className="font-serif block transition-colors duration-350"
                    style={{
                      fontSize: "clamp(48px, 11vw, 140px)",
                      lineHeight: "0.92",
                      letterSpacing: "-0.03em",
                      color: hoveredIndex === i
                        ? link.color
                        : hoveredIndex !== null
                          ? "rgba(255,255,255,0.15)"
                          : "rgba(255,255,255,0.50)",
                    }}
                  >
                    {link.label}
                  </span>
                </a>
              ))}
            </nav>

            {/* Bottom bar — search + links */}
            <div
              className="absolute bottom-8 md:bottom-10 left-8 sm:left-12 md:left-16 lg:left-24 right-8 sm:right-12 md:right-16 lg:right-24 flex items-end justify-between"
              style={{
                opacity: menuOpen ? 1 : 0,
                transition: "opacity 0.5s ease 0.5s",
              }}
            >
              {/* Search trigger */}
              <button
                onClick={openSearch}
                className="font-sans text-white/20 hover:text-white/50 transition-colors duration-300 font-800 uppercase flex items-center gap-2.5"
                style={{ fontSize: "0.62rem", letterSpacing: "0.12em" }}
              >
                <svg
                  width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
                Search
                <span className="text-white/10 ml-0.5">{"\u2318"}K</span>
              </button>

              {/* External link */}
              <a
                href="https://norcalsbdc.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-white/12 hover:text-white/30 transition-colors duration-300 no-underline font-800 uppercase hidden sm:block"
                style={{ fontSize: "0.6rem", letterSpacing: "0.12em" }}
              >
                norcalsbdc.org
              </a>

              {/* Copyright */}
              <span
                className="font-sans text-white/8 uppercase font-800"
                style={{ fontSize: "0.55rem", letterSpacing: "0.1em" }}
              >
                &copy; 2026
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
