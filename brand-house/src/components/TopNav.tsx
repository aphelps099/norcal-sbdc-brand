"use client";

import { useEffect, useState, useRef } from "react";
import Fuse from "fuse.js";
import { searchData, type SearchItem } from "@/lib/search-index";

const fuse = new Fuse(searchData, {
  keys: ["title", "section", "content"],
  threshold: 0.4,
});

const NAV_LINKS = [
  { label: "Colors", href: "/colors" },
  { label: "Typography", href: "/typography" },
  { label: "Logos", href: "/logos" },
  { label: "Voice & Tone", href: "/voice" },
  { label: "Photography", href: "/photography" },
  { label: "Templates", href: "/templates" },
  { label: "Content", href: "/content" },
  { label: "Calendar", href: "/calendar" },
  { label: "Stories", href: "/stories" },
  { label: "Glossary", href: "/glossary" },
];

/* ── Inline star SVG (from CA SBDC brand asset) ── */
function AnimatedStar({ active }: { active: boolean }) {
  return (
    <svg
      width="2107"
      height="2003"
      viewBox="0 0 2107 2003"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animated-star"
      aria-hidden="true"
    >
      <g id="star" stroke="none" strokeWidth="1" fillRule="evenodd">
        <path
          d="M1011.48501,11.2353369 L1169.72409,653.038218 L2091.60532,738.475943 L1226.23134,1130.98717 L1458.06865,1976.22037 L1218.31263,1579.03879 L1078.64652,1068.49933 L1637.1469,813.428761 L1067.25191,759.657045 L969.048512,364.4811 L788.430601,706.886932 L338.267364,625.263122 L26.9639197,467.282973 L10.0982009,446.966622 L717.102633,575.532031 L1011.48501,11.2353369 Z"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="8"
          fill="none"
          className={`star-path ${active ? "star-path--active" : ""}`}
        />
      </g>
    </svg>
  );
}

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);
  const [query, setQuery] = useState("");
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const results: SearchItem[] = query
    ? fuse.search(query).map((r) => r.item)
    : [];

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
      setClosing(false);
      setMounted(true);
      setTimeout(() => searchRef.current?.focus(), 500);
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setClosing(true);
      closeTimer.current = setTimeout(() => {
        setMounted(false);
        setClosing(false);
      }, 750);
    }
    return () => {
      document.body.style.overflow = "";
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setMenuOpen(true);
      }
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isDark = !pastHero && !menuOpen;

  return (
    <>
      <style jsx>{`
        /* ── Burger bars ── */
        .burger-bar {
          display: block;
          height: 1.5px;
          background: currentColor;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            width 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.3s ease;
          transform-origin: center center;
        }
        .burger-top { width: 22px; }
        .burger-bottom { width: 14px; }
        .burger-wrap:hover .burger-bottom { width: 22px; }
        .burger-wrap[data-open="true"] .burger-top {
          transform: translateY(4.5px) rotate(45deg);
          width: 18px;
        }
        .burger-wrap[data-open="true"] .burger-bottom {
          transform: translateY(-4.5px) rotate(-45deg);
          width: 18px;
        }

        /* ── Star drawing animation (ported from CA SBDC) ── */
        @keyframes star-dash {
          to {
            stroke-dashoffset: 0;
          }
        }

        .animated-star {
          position: absolute;
          right: -10%;
          top: 15%;
          width: 65%;
          height: auto;
          opacity: 0.12;
          pointer-events: none;
        }

        .star-path {
          fill: rgba(255, 255, 255, 0);
          stroke-dasharray: 10000;
          stroke-dashoffset: 10000;
          transition: fill 0s 0.2s;
        }

        .star-path--active {
          animation: star-dash 3s linear forwards;
          animation-delay: 0.3s;
          fill: rgba(255, 255, 255, 0.06);
          transition: fill 1s 3.4s;
        }
      `}</style>

      {/* Fixed nav bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          menuOpen
            ? "bg-transparent"
            : scrolled
              ? pastHero
                ? "bg-white/90 backdrop-blur-2xl border-b border-black/[0.06]"
                : "bg-black/30 backdrop-blur-2xl"
              : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-8 sm:px-12 py-4 flex items-center justify-between relative z-[60]">
          <a
            href="/"
            className={`text-[0.65rem] tracking-[0.18em] uppercase transition-colors duration-500 no-underline ${
              menuOpen
                ? "text-white/50 hover:text-white"
                : isDark
                  ? "text-white/70 hover:text-white"
                  : "text-navy hover:text-navy"
            }`}
            style={{ fontFamily: "var(--sans-label)" }}
          >
            SBDC
          </a>

          <div className="flex items-center gap-6">
            {/* MENU label */}
            <span
              className={`hidden sm:block text-[0.6rem] tracking-[0.2em] uppercase transition-colors duration-500 select-none ${
                menuOpen
                  ? "text-white/30"
                  : isDark
                    ? "text-white/30"
                    : "text-text-tertiary"
              }`}
              style={{ fontFamily: "var(--sans-label)" }}
            >
              {menuOpen ? "CLOSE" : "MENU"}
            </span>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`burger-wrap flex flex-col items-end justify-center gap-[7px] w-[24px] h-[24px] transition-colors duration-500 ${
                menuOpen
                  ? "text-white/30 hover:text-white"
                  : isDark
                    ? "text-white/40 hover:text-white"
                    : "text-text-tertiary hover:text-navy"
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
      {mounted && (
        <div
          className="fixed inset-0 z-[45] overflow-hidden"
          style={{
            clipPath: menuOpen
              ? "inset(0 0 0 0)"
              : closing
                ? "inset(0 0 0 100%)"
                : "inset(0 100% 0 0)",
            transition: "clip-path 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
        >
          {/* Dark gradient background */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(160deg, #091422 0%, #0d1926 35%, #0f1c2e 65%, #0a1520 100%)",
            }}
          />

          {/* ── Animated star watermark ── */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <AnimatedStar active={menuOpen} />
          </div>

          <div className="relative z-10 h-full flex flex-col pt-24 pb-8 md:pb-10 px-8 sm:px-12 md:px-16 lg:px-24 overflow-y-auto">
            {/* Nav columns */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-10 max-w-[900px]">
                {/* Left column — Brand House */}
                <div
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                    transition: menuOpen
                      ? "opacity 0.5s ease 0.25s, transform 0.5s ease 0.25s"
                      : "opacity 0.2s ease, transform 0.2s ease",
                  }}
                >
                  <h3
                    className="text-white/20 mb-4 uppercase"
                    style={{
                      fontFamily: "var(--sans-label)",
                      fontWeight: 500,
                      fontSize: "10px",
                      letterSpacing: "0.15em",
                    }}
                  >
                    Explore
                  </h3>
                  <div className="h-[1px] bg-white/[0.08] mb-5" />
                  <nav className="flex flex-col">
                    {NAV_LINKS.slice(0, 5).map((link, i) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block no-underline group/nav"
                        style={{
                          opacity: menuOpen ? 1 : 0,
                          transform: menuOpen ? "translateY(0)" : "translateY(6px)",
                          transition: menuOpen
                            ? `opacity 0.4s ease ${0.35 + i * 0.04}s, transform 0.4s ease ${0.35 + i * 0.04}s`
                            : "opacity 0.2s ease, transform 0.2s ease",
                        }}
                      >
                        <span
                          className="block py-[0.3em] transition-colors duration-200 text-white/30 group-hover/nav:text-white/80"
                          style={{
                            fontFamily: "var(--sans)",
                            fontWeight: 500,
                            fontSize: "clamp(20px, 2.8vw, 34px)",
                            lineHeight: "1.35",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {link.label}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Right column — Resources */}
                <div
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                    transition: menuOpen
                      ? "opacity 0.5s ease 0.35s, transform 0.5s ease 0.35s"
                      : "opacity 0.2s ease, transform 0.2s ease",
                  }}
                >
                  <h3
                    className="text-white/20 mb-4 uppercase"
                    style={{
                      fontFamily: "var(--sans-label)",
                      fontWeight: 500,
                      fontSize: "10px",
                      letterSpacing: "0.15em",
                    }}
                  >
                    Resources
                  </h3>
                  <div className="h-[1px] bg-white/[0.08] mb-5" />
                  <nav className="flex flex-col">
                    {NAV_LINKS.slice(5).map((link, i) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block no-underline group/nav"
                        style={{
                          opacity: menuOpen ? 1 : 0,
                          transform: menuOpen ? "translateY(0)" : "translateY(6px)",
                          transition: menuOpen
                            ? `opacity 0.4s ease ${0.45 + i * 0.04}s, transform 0.4s ease ${0.45 + i * 0.04}s`
                            : "opacity 0.2s ease, transform 0.2s ease",
                        }}
                      >
                        <span
                          className="block py-[0.3em] transition-colors duration-200 text-white/30 group-hover/nav:text-white/80"
                          style={{
                            fontFamily: "var(--sans)",
                            fontWeight: 500,
                            fontSize: "clamp(20px, 2.8vw, 34px)",
                            lineHeight: "1.35",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {link.label}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Search bar below columns */}
              <div
                className="mt-12 max-w-[440px]"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(8px)",
                  transition: menuOpen
                    ? "opacity 0.5s ease 0.6s, transform 0.5s ease 0.6s"
                    : "opacity 0.2s ease, transform 0.2s ease",
                }}
              >
                <div className="flex items-center gap-3 border-b border-white/[0.1] pb-3 focus-within:border-white/25 transition-colors duration-300">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white/20 shrink-0"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" />
                  </svg>
                  <input
                    ref={searchRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    className="flex-1 bg-transparent text-white/70 text-base outline-none placeholder:text-white/15 tracking-[-0.01em]"
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 400,
                    }}
                  />
                  <span className="text-[9px] uppercase tracking-[0.12em] text-white/10 hidden sm:block" style={{ fontFamily: "var(--sans-label)" }}>
                    {"\u2318"}K
                  </span>
                </div>

                {/* Search results */}
                {query && (
                  <div className="mt-4 space-y-0.5">
                    {results.length === 0 ? (
                      <p className="font-sans text-sm text-white/20 font-400 py-2">
                        No results for &ldquo;{query}&rdquo;
                      </p>
                    ) : (
                      results.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-baseline gap-3 py-2.5 no-underline group/result hover:bg-white/[0.04] px-2 -mx-2 transition-colors duration-200 rounded-sm"
                        >
                          <span className="text-[9px] uppercase tracking-[0.15em] text-white/15 w-14 shrink-0" style={{ fontFamily: "var(--sans-label)" }}>
                            {item.section}
                          </span>
                          <span className="font-sans text-white/50 text-base group-hover/result:text-white/80 transition-colors duration-200">
                            {item.title}
                          </span>
                        </a>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
