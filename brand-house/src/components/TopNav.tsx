"use client";

import { useEffect, useState, useRef } from "react";
import Fuse from "fuse.js";
import { searchData, type SearchItem } from "@/lib/search-index";

const fuse = new Fuse(searchData, {
  keys: ["title", "section", "content"],
  threshold: 0.4,
});

const NAV_COLS = [
  {
    heading: "Explore",
    links: [
      { label: "Colors", href: "/colors" },
      { label: "Typography", href: "/typography" },
      { label: "Logos", href: "/logos" },
      { label: "Voice & Tone", href: "/voice" },
      { label: "Photography", href: "/photography" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Templates", href: "/templates" },
      { label: "Content", href: "/content" },
      { label: "Calendar", href: "/calendar" },
      { label: "Stories", href: "/stories" },
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
      /* Small RAF delay so the SVG mounts first in inactive state,
         then we flip the class to trigger CSS transitions properly */
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
      {/*
        ── Global styles for the star animation ──
        Must be global so they reach the SVG element inside the overlay.
        This mirrors the exact CA SBDC SCSS:
          - SVG at opacity .2
          - Path starts with transparent fill + hidden stroke (dashoffset)
          - On .star-active: stroke draws over 3s, fill fades to white after 3.2s
      */}
      <style jsx global>{`
        @keyframes star-draw {
          0%   { stroke-dashoffset: 10000; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes star-scale {
          0%   { transform: scale(0.96); opacity: 0; }
          30%  { opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }

        .sbdc-star-wrap {
          transform: scale(0.96);
          opacity: 0;
        }
        .sbdc-star-wrap.star-active {
          animation: star-scale 2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
        }

        .sbdc-star-svg {
          opacity: .2;
        }

        /* Ghost: faint full star visible immediately */
        .sbdc-star-ghost {
          fill: rgba(255, 255, 255, 0.06);
          stroke: rgba(255, 255, 255, 0.15);
          stroke-width: 4;
        }

        /* Animated stroke that draws over the ghost */
        .sbdc-star-path {
          fill: rgba(255, 255, 255, 0);
          stroke-dasharray: 10000;
          stroke-dashoffset: 10000;
          transition: fill 0s 0.1s;
        }
        .sbdc-star-path.star-active {
          animation: star-draw 2s cubic-bezier(0.4, 0, 0.2, 1) 0.15s forwards;
          transition: fill 1.2s ease 2.2s;
          fill: #fff;
        }

        /* Soft glow behind the stroke */
        .sbdc-star-glow {
          fill: none;
          stroke: rgba(255, 255, 255, 0);
          stroke-width: 20;
          stroke-dasharray: 10000;
          stroke-dashoffset: 10000;
          filter: url(#star-blur);
        }
        .sbdc-star-glow.star-active {
          stroke: rgba(255, 255, 255, 0.5);
          animation: star-draw 2s cubic-bezier(0.4, 0, 0.2, 1) 0.15s forwards;
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
            style={{ fontFamily: "var(--sans-label)" }}
          >
            SBDC
          </a>

          <div className="flex items-center gap-5">
            <span
              className={`hidden sm:block text-[0.65rem] tracking-[0.15em] uppercase font-bold transition-colors duration-500 select-none ${
                menuOpen
                  ? "text-white/50 hover:text-white"
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
          {/* BG: dark navy base */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#0b1623" }}
          />

          {/* BG photo overlay */}
          <div className="absolute inset-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photos/bg-star.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          {/* ── Animated star watermark ──
              Matches CA SBDC exactly:
              - Container: right:-10%, top:20%, width:60%, only on lg+
              - Aspect ratio: 95.064072% padding
              - SVG: opacity .2
              - Path: stroke draws over 3s, fill fades in at 3.2s
          */}
          <div
            className={`absolute overflow-hidden pointer-events-none hidden lg:block sbdc-star-wrap${starActive ? " star-active" : ""}`}
            style={{
              right: "-10%",
              top: "20%",
              width: "60%",
            }}
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
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
              }}
              aria-hidden="true"
            >
              <defs>
                <filter id="star-blur">
                  <feGaussianBlur stdDeviation="6" />
                </filter>
              </defs>
              <g stroke="none" strokeWidth="1" fillRule="evenodd">
                {/* Ghost: faint static outline always visible */}
                <path className="sbdc-star-ghost" d={STAR_PATH} />
                {/* Glow: blurred trail that follows the draw */}
                <path
                  className={`sbdc-star-glow${starActive ? " star-active" : ""}`}
                  d={STAR_PATH}
                />
                {/* Main stroke draw + fill */}
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

            <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16">
              <div className="max-w-[1400px] mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 max-w-[700px]">
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

                {/* Search */}
                <div
                  className="mt-14 max-w-[400px]"
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateY(0)" : "translateY(8px)",
                    transition: menuOpen
                      ? "opacity 0.5s ease 0.6s, transform 0.5s ease 0.6s"
                      : "opacity 0.2s ease, transform 0.2s ease",
                  }}
                >
                  <div className="flex items-center gap-3 border-b border-white/[0.15] pb-3 focus-within:border-white/30 transition-colors duration-300">
                    <svg
                      width="18"
                      height="18"
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
                      placeholder="Search..."
                      className="flex-1 bg-transparent text-white/70 text-sm outline-none placeholder:text-white/20 tracking-[0.02em]"
                      style={{ fontFamily: "var(--sans)", fontWeight: 400 }}
                    />
                    <span
                      className="text-[9px] uppercase tracking-[0.12em] text-white/10 hidden sm:block"
                      style={{ fontFamily: "var(--sans-label)" }}
                    >
                      {"\u2318"}K
                    </span>
                  </div>

                  {query && (
                    <div className="mt-4 space-y-0.5">
                      {results.length === 0 ? (
                        <p className="font-sans text-sm text-white/20 py-2">
                          No results for &ldquo;{query}&rdquo;
                        </p>
                      ) : (
                        results.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-baseline gap-3 py-2 no-underline group/result hover:bg-white/[0.04] px-2 -mx-2 transition-colors duration-200 rounded-sm"
                          >
                            <span
                              className="text-[9px] uppercase tracking-[0.15em] text-white/15 w-14 shrink-0"
                              style={{ fontFamily: "var(--sans-label)" }}
                            >
                              {item.section}
                            </span>
                            <span className="font-sans text-white/50 text-sm group-hover/result:text-white/80 transition-colors duration-200">
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

            <div className="shrink-0 h-10" />
          </div>
        </div>
      )}
    </>
  );
}
