"use client";

import { useEffect, useState, useRef } from "react";
import { STAR_PATH } from "@/lib/brand-tokens";

/* 4-column editorial nav — Identity / Voice / Make / Library */
const NAV_COLS = [
  {
    heading: "Identity",
    links: [
      { label: "Logos", href: "/logos" },
      { label: "Colors", href: "/colors" },
      { label: "Typography", href: "/typography" },
    ],
  },
  {
    heading: "Voice",
    links: [
      { label: "Voice & Tone", href: "/voice" },
      { label: "Stories", href: "/stories" },
      { label: "Glossary", href: "/glossary" },
    ],
  },
  {
    heading: "Make",
    links: [
      { label: "Templates", href: "/templates" },
      { label: "Email", href: "/email" },
      { label: "Generate", href: "/generate" },
    ],
  },
  {
    heading: "Library",
    links: [
      { label: "Photography", href: "/photography" },
      { label: "Calendar", href: "/calendar" },
      { label: "Content", href: "/content" },
    ],
  },
];

/* Star SVG path imported from brand-tokens */

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);
  const [starActive, setStarActive] = useState(false);
  const [starKey, setStarKey] = useState(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const starTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      if (closeTimer.current) clearTimeout(closeTimer.current);
      if (starTimer.current) clearTimeout(starTimer.current);
      setClosing(false);
      setMounted(true);
      setStarKey((k) => k + 1);
      starTimer.current = setTimeout(() => setStarActive(true), 50);
    } else {
      document.body.style.overflow = "";
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
          opacity: .1;
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
          height: 2px;
          background: currentColor;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            width 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.3s ease;
          transform-origin: center center;
        }
        .burger-top { width: 32px; }
        .burger-bottom { width: 20px; }
        .burger-wrap:hover .burger-bottom { width: 32px; }
        .burger-wrap[data-open="true"] .burger-top {
          transform: translateY(6px) rotate(45deg);
          width: 26px;
        }
        .burger-wrap[data-open="true"] .burger-bottom {
          transform: translateY(-6px) rotate(-45deg);
          width: 26px;
        }
      `}</style>

      {/* ── Minimal floating burger ─ no bar, no wordmark, adaptive via mix-blend-difference ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
        aria-label="Primary"
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-5 flex items-center justify-end relative z-[60]">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="burger-wrap pointer-events-auto flex flex-col items-end justify-center gap-[10px] w-[36px] h-[36px] hover:opacity-80 transition-opacity"
            style={{
              /* Difference blend inverts against whatever's behind the icon,
                 so it stays readable on both light and dark sections. */
              color: "#ffffff",
              mixBlendMode: menuOpen ? "normal" : "difference",
            }}
            data-open={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="burger-bar burger-top" />
            <span className="burger-bar burger-bottom" />
          </button>
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
          {/* BG — flat navy, no gradient, no rings */}
          <div className="absolute inset-0" style={{ backgroundColor: "#0f1c2e" }} />

          {/* ── Star watermark (30% opacity per brand — kept as signature mark) ── */}
          <div
            className={`absolute overflow-hidden pointer-events-none hidden lg:block sbdc-star-wrap${starActive ? " star-active" : ""}`}
            style={{ left: "50%", top: "38%", width: "min(52vw, 640px)", transform: "translate(-50%, -50%)" }}
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

          {/* ── Menu content ──
             Note: the fixed top bar (wordmark + animated burger→X) sits above this overlay
             at z-60, so we reserve space for it and let it play the role of the
             wordmark/close row shown in the reference mock. */}
          <div className="relative z-10 h-full flex flex-col overflow-y-auto">
            {/* Reserve space for the fixed top bar + push grid below the ring watermark */}
            <div className="shrink-0" style={{ height: "clamp(240px, 42vh, 460px)" }} />

            {/* 4-column editorial nav grid */}
            <div className="px-6 sm:px-10 lg:px-16">
              <div className="max-w-[1400px] mx-auto w-full">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-12 gap-y-12">
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
                        className="uppercase mb-6"
                        style={{
                          fontFamily: "var(--font-wide)",
                          fontWeight: 700,
                          fontSize: "11px",
                          letterSpacing: "0.24em",
                          color: "rgba(133,163,200,0.75)",
                        }}
                      >
                        {col.heading}
                      </h3>
                      <nav className="flex flex-col gap-3">
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
                              className="block text-white/85 transition-colors duration-200 group-hover/nav:text-white"
                              style={{
                                fontFamily: "proxima-sera, var(--serif)",
                                fontWeight: 300,
                                fontSize: "clamp(1.75rem, 2.4vw, 2.25rem)",
                                letterSpacing: "-0.02em",
                                lineHeight: 1.15,
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

            {/* Flex filler pushes the footer to the bottom */}
            <div className="flex-1" style={{ minHeight: "4rem" }} />

            {/* ── Bottom band — editorial credit + tagline ── */}
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
              <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-8 flex items-center justify-between gap-6">
                <p
                  className="uppercase"
                  style={{
                    fontFamily: "var(--font-wide)",
                    fontWeight: 700,
                    fontSize: "11px",
                    letterSpacing: "0.24em",
                    color: "rgba(133,163,200,0.75)",
                  }}
                >
                  AMERICA&rsquo;S SBDC
                  <span
                    aria-hidden
                    style={{
                      display: "inline-block",
                      margin: "0 0.6em",
                      fontSize: "9px",
                      verticalAlign: "middle",
                      transform: "translateY(-1px)",
                      letterSpacing: 0,
                    }}
                  >
                    •
                  </span>
                  CALIFORNIA
                </p>

                <p
                  className="text-right text-white/80"
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 500,
                    fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
                    letterSpacing: "-0.015em",
                    lineHeight: 1.1,
                  }}
                >
                  Your business,{" "}
                  <em
                    style={{
                      fontFamily: "proxima-sera, var(--serif)",
                      fontStyle: "italic",
                      fontWeight: 400,
                    }}
                  >
                    better.
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
