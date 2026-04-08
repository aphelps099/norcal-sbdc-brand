"use client";

import { useEffect, useState, useRef } from "react";
import Fuse from "fuse.js";
import { searchData, type SearchItem } from "@/lib/search-index";

const fuse = new Fuse(searchData, {
  keys: ["title", "section", "content"],
  threshold: 0.4,
});

/* 4-column nav — mirrors CA SBDC Explore / About / Impact / Connect */
const NAV_COLS = [
  {
    heading: "Explore",
    links: [
      { label: "Colors", href: "/colors" },
      { label: "Typography", href: "/typography" },
      { label: "Logos", href: "/logos" },
    ],
  },
  {
    heading: "Identity",
    links: [
      { label: "Voice & Tone", href: "/voice" },
      { label: "Photography", href: "/photography" },
      { label: "Stories", href: "/stories" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Templates", href: "/templates" },
      { label: "Content", href: "/content" },
      { label: "Calendar", href: "/calendar" },
    ],
  },
  {
    heading: "Reference",
    links: [
      { label: "Glossary", href: "/glossary" },
    ],
  },
];

/* Star SVG path from CA SBDC brand asset */
const STAR_PATH =
  "M1011.48501,11.2353369 L1169.72409,653.038218 L2091.60532,738.475943 L1226.23134,1130.98717 L1458.06865,1976.22037 L1218.31263,1579.03879 L1078.64652,1068.49933 L1637.1469,813.428761 L1067.25191,759.657045 L969.048512,364.4811 L788.430601,706.886932 L338.267364,625.263122 L26.9639197,467.282973 L10.0982009,446.966622 L717.102633,575.532031 L1011.48501,11.2353369 Z";

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);
  const [starActive, setStarActive] = useState(false);
  const [query, setQuery] = useState("");
  const [starKey, setStarKey] = useState(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const starTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
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
      if (starTimer.current) clearTimeout(starTimer.current);
      setClosing(false);
      setMounted(true);
      setStarKey((k) => k + 1);
      starTimer.current = setTimeout(() => setStarActive(true), 50);
      setTimeout(() => searchRef.current?.focus(), 500);
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setStarActive(false);
      setClosing(true);
      closeTimer.current = setTimeout(() => {
        setMounted(false);
        setClosing(false);
      }, 750);
    }
    return () => {
      document.body.style.overflow = "";
      if (closeTimer.current) clearTimeout(closeTimer.current);
      if (starTimer.current) clearTimeout(starTimer.current);
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
      <style jsx global>{`
        @keyframes star-draw {
          0%   { stroke-dashoffset: 10000; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes star-enter {
          0%   {
            transform: translate(8%, 6%) scale(0.88) rotate(3deg);
            opacity: 0;
          }
          40%  { opacity: 1; }
          100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        .sbdc-star-wrap {
          transform: translate(8%, 6%) scale(0.88) rotate(3deg);
          opacity: 0;
        }
        .sbdc-star-wrap.star-active {
          animation: star-enter 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.05s forwards;
        }

        .sbdc-star-svg {
          opacity: .2;
        }

        /* Ghost: faint static outline */
        .sbdc-star-ghost {
          fill: rgba(255, 255, 255, 0.04);
          stroke: rgba(255, 255, 255, 0.1);
          stroke-width: 2;
        }

        /* Main stroke — fast draw, no glow */
        .sbdc-star-path {
          fill: rgba(255, 255, 255, 0);
          stroke-dasharray: 10000;
          stroke-dashoffset: 10000;
          transition: fill 0s 0.1s;
        }
        .sbdc-star-path.star-active {
          animation: star-draw 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards;
          transition: fill 0.6s ease 1.2s;
          fill: #fff;
        }
      `}</style>

      <style jsx>{`
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
      `}</style>

      {/* ── Fixed top bar ── */}
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
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between relative z-[60]">
          <a
            href="/"
            className={`text-[0.65rem] tracking-[0.18em] uppercase transition-colors duration-500 no-underline ${
              menuOpen
                ? "text-white/50 hover:text-white"
                : isDark
                  ? "text-white/70 hover:text-white"
                  : "text-navy hover:text-navy"
            }`}
            style={{ fontFamily: "var(--sans)", fontWeight: 500 }}
          >
            Brand
          </a>

          <div className="flex items-center gap-5">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`burger-wrap flex flex-col items-end justify-center gap-[7px] w-[24px] h-[24px] transition-colors duration-500 ${
                menuOpen
                  ? "text-white/50 hover:text-white"
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

      {/* ── Full-screen overlay ── */}
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
          {/* BG */}
          <div className="absolute inset-0" style={{ backgroundColor: "#0b1623" }} />
          <div className="absolute inset-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photos/bg-star.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          {/* ── Star watermark (no glow, clean strokes) ── */}
          <div
            className={`absolute overflow-hidden pointer-events-none hidden lg:block sbdc-star-wrap${starActive ? " star-active" : ""}`}
            style={{ right: "-10%", top: "20%", width: "60%" }}
          >
            <div style={{ paddingTop: "95.064072%" }} />
            <svg
              key={starKey}
              className="sbdc-star-svg"
              width="2107"
              height="2003"
              viewBox="0 0 2107 2003"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }}
              aria-hidden="true"
            >
              <g stroke="none" strokeWidth="1" fillRule="evenodd">
                <path className="sbdc-star-ghost" d={STAR_PATH} />
                <path
                  className={`sbdc-star-path${starActive ? " star-active" : ""}`}
                  d={STAR_PATH}
                  stroke="#FFFFFF"
                  strokeWidth="8"
                />
              </g>
            </svg>
          </div>

          {/* ── Menu content ── */}
          <div className="relative z-10 h-full flex flex-col overflow-y-auto">
            <div className="shrink-0 h-16" />

            {/* 4-column nav grid */}
            <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16">
              <div className="max-w-[1400px] mx-auto w-full">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-12 gap-y-10">
                  {NAV_COLS.map((col, colIdx) => (
                    <div
                      key={col.heading}
                      style={{
                        opacity: menuOpen ? 1 : 0,
                        transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                        transition: menuOpen
                          ? `opacity 0.5s ease ${0.1 + colIdx * 0.1}s, transform 0.5s ease ${0.1 + colIdx * 0.1}s`
                          : "opacity 0.2s ease, transform 0.2s ease",
                      }}
                    >
                      <h3
                        className="text-white pb-3 mb-3 border-b-2 border-white"
                        style={{
                          fontFamily: "var(--serif, Georgia, serif)",
                          fontWeight: 400,
                          fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {col.heading}
                      </h3>
                      <nav className="flex flex-col gap-2 mt-3">
                        {col.links.map((link, i) => (
                          <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="block no-underline group/nav"
                            style={{
                              opacity: menuOpen ? 1 : 0,
                              transform: menuOpen ? "translateX(0)" : "translateX(20px)",
                              transition: menuOpen
                                ? `opacity 0.5s ease ${(colIdx * 0.1 + (i + 1) * 0.1)}s, transform 0.5s ease ${(colIdx * 0.1 + (i + 1) * 0.1)}s`
                                : "opacity 0.2s ease, transform 0.2s ease",
                            }}
                          >
                            <span
                              className="block text-white/80 hover:underline transition-colors duration-200 group-hover/nav:text-white"
                              style={{
                                fontFamily: "var(--sans)",
                                fontWeight: 700,
                                fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                                letterSpacing: "0.05em",
                              }}
                            >
                              {link.label}
                            </span>
                          </a>
                        ))}
                      </nav>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Search & CTA band ── */}
            <div
              className="shrink-0"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                transition: menuOpen
                  ? "opacity 0.5s ease 0.55s, transform 0.5s ease 0.55s"
                  : "opacity 0.2s ease, transform 0.2s ease",
              }}
            >
              {/* Search result cards — appear ABOVE the search bar */}
              <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
                <div
                  className="flex flex-wrap gap-3 pb-6 transition-all duration-300"
                  style={{
                    minHeight: query && results.length > 0 ? "auto" : 0,
                    opacity: query && results.length > 0 ? 1 : 0,
                    transform: query && results.length > 0 ? "translateY(0)" : "translateY(8px)",
                  }}
                >
                  {results.slice(0, 4).map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group/card flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-200 rounded px-4 py-3 no-underline"
                    >
                      <span
                        className="text-[8px] uppercase tracking-[0.15em] text-white/20 shrink-0"
                        style={{ fontFamily: "var(--sans-label)" }}
                      >
                        {item.section}
                      </span>
                      <span
                        className="text-white/50 group-hover/card:text-white/90 transition-colors duration-200 whitespace-nowrap"
                        style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", fontWeight: 500 }}
                      >
                        {item.title}
                      </span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white/10 group-hover/card:text-white/30 transition-colors duration-200 shrink-0"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                  {query && results.length === 0 && (
                    <span className="text-white/20 text-sm" style={{ fontFamily: "var(--sans)" }}>
                      No results for &ldquo;{query}&rdquo;
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom band */}
              <div className="border-t border-white/[0.1]">
                <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-7 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
                  {/* Logo */}
                  <div className="shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/logos/NCN_Band_Logo_White.png"
                      alt="NorCal SBDC"
                      className="h-12 w-auto opacity-50"
                    />
                  </div>

                  {/* Description */}
                  <p
                    className="text-white/40 flex-1 max-w-md"
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "0.85rem",
                      lineHeight: "1.55",
                      fontWeight: 400,
                    }}
                  >
                    Find what you need — colors, logos, templates, voice guidelines, and more. Everything to keep the NorCal SBDC brand sharp and consistent.
                  </p>

                  {/* Material Design search input */}
                  <div className="shrink-0 relative w-[280px] sm:w-[320px]">
                    <div className="flex items-center gap-3">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white/25 shrink-0"
                      >
                        <circle cx="11" cy="11" r="7" />
                        <path d="m20 20-3.5-3.5" />
                      </svg>
                      <input
                        ref={searchRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search brand house..."
                        className="flex-1 bg-transparent text-white/80 outline-none placeholder:text-white/25 peer"
                        style={{
                          fontFamily: "var(--sans)",
                          fontSize: "0.95rem",
                          fontWeight: 400,
                          letterSpacing: "0.01em",
                          paddingBottom: "8px",
                        }}
                      />
                    </div>
                    {/* Material underline — bold, animated color on focus */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/15 transition-colors duration-300" />
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 peer-focus:scale-x-100 transition-transform duration-300"
                      style={{ backgroundColor: "#5684BA" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
