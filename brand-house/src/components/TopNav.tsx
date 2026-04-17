"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { STAR_PATH } from "@/lib/brand-tokens";

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
      { label: "Media", href: "/photography" },
      { label: "Stories", href: "/stories" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Templates", href: "/templates" },
      { label: "Content", href: "/content" },
      { label: "Email", href: "/email" },
      { label: "Generate", href: "/generate" },
    ],
  },
  {
    heading: "Reference",
    links: [
      { label: "Glossary", href: "/glossary" },
      { label: "Calendar", href: "/calendar" },
    ],
  },
];

/* Star SVG path imported from brand-tokens */

export default function TopNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);
  const [starActive, setStarActive] = useState(false);
  const [starKey, setStarKey] = useState(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const starTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  /* Dark-hero routes render their hero on navy — keep nav text light (cream) while above that hero.
     Homepage has its own dark hero; Voice chapter is navy-on-navy and needs the light variant too. */
  const darkHeroRoutes = ["/voice"];
  const onDarkHero = darkHeroRoutes.includes(pathname);
  const isDark = ((isHome && !pastHero) || (onDarkHero && !pastHero)) && !menuOpen;

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
              ? onDarkHero && !pastHero
                ? "bg-[#0f1c2e]/80 backdrop-blur-2xl border-b border-white/[0.06]"
                : !isHome || pastHero
                  ? "bg-white/90 backdrop-blur-2xl border-b border-black/[0.06]"
                  : "bg-black/30 backdrop-blur-2xl"
              : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between relative z-[60]">
          <a
            href="/"
            className={`uppercase transition-colors duration-500 no-underline ${
              menuOpen
                ? "text-white/70 hover:text-white"
                : isDark
                  ? "text-white/75 hover:text-white"
                  : "text-navy hover:text-navy"
            }`}
            style={{
              fontFamily: "var(--font-wide)",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "0.22em",
            }}
          >
            NORCAL SBDC
            <span
              aria-hidden
              style={{
                display: "inline-block",
                margin: "0 0.6em",
                fontSize: "9px",
                fontWeight: 700,
                verticalAlign: "middle",
                transform: "translateY(-1px)",
                letterSpacing: 0,
              }}
            >
              •
            </span>
            BRAND
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
                        className="text-white uppercase pb-3 mb-3 border-b-2 border-white"
                        style={{
                          fontFamily: "var(--font-wide)",
                          fontWeight: 700,
                          fontSize: "clamp(13px, 1.4vw, 16px)",
                          letterSpacing: "0.22em",
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
                              className="block text-white/75 transition-colors duration-200 group-hover/nav:text-white"
                              style={{
                                fontFamily: "var(--sans)",
                                fontWeight: 500,
                                fontSize: "clamp(1.25rem, 1.75vw, 1.5rem)",
                                letterSpacing: "-0.015em",
                                lineHeight: 1.3,
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

            {/* ── Bottom band — logo + tagline ── */}
            <div
              className="shrink-0 border-t border-white/[0.1]"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                transition: menuOpen
                  ? "opacity 0.5s ease 0.55s, transform 0.5s ease 0.55s"
                  : "opacity 0.2s ease, transform 0.2s ease",
              }}
            >
              <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-8 flex items-center justify-between gap-6">
                {/* Logo */}
                <div className="shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logos/NCN_Band_Logo_White.png"
                    alt="NorCal SBDC"
                    className="h-12 w-auto opacity-60"
                  />
                </div>

                {/* Tagline — the one line that matters */}
                <p
                  className="text-right text-white/80"
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 500,
                    fontSize: "clamp(1rem, 1.6vw, 1.5rem)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  Your business,{" "}
                  <em
                    style={{
                      fontFamily: "var(--serif)",
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
