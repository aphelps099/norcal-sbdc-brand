"use client";

import { useEffect, useState, useRef } from "react";
import Fuse from "fuse.js";
import { searchData, type SearchItem } from "@/lib/search-index";

const fuse = new Fuse(searchData, {
  keys: ["title", "section", "content"],
  threshold: 0.4,
});

const NAV_SECTIONS = [
  {
    group: "Identity",
    links: [
      { label: "Colors", href: "/colors", num: "01" },
      { label: "Typography", href: "/typography", num: "02" },
      { label: "Logos", href: "/logos", num: "03" },
      { label: "Photography", href: "/photography", num: "04" },
    ],
  },
  {
    group: "Voice",
    links: [
      { label: "Voice & Tone", href: "/voice", num: "05" },
      { label: "Content", href: "/content", num: "06" },
      { label: "Templates", href: "/templates", num: "07" },
    ],
  },
  {
    group: "Program",
    links: [
      { label: "Calendar", href: "/calendar", num: "08" },
      { label: "Stories", href: "/stories", num: "09" },
      { label: "Glossary", href: "/glossary", num: "10" },
    ],
  },
];

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
      setTimeout(() => searchRef.current?.focus(), 600);
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setClosing(true);
      closeTimer.current = setTimeout(() => {
        setMounted(false);
        setClosing(false);
      }, 850);
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
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isDark = !pastHero && !menuOpen;

  return (
    <>
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
        .burger-top {
          width: 22px;
        }
        .burger-bottom {
          width: 14px;
        }
        .burger-wrap:hover .burger-bottom {
          width: 22px;
        }
        .burger-wrap[data-open="true"] .burger-top {
          transform: translateY(4.5px) rotate(45deg);
          width: 18px;
        }
        .burger-wrap[data-open="true"] .burger-bottom {
          transform: translateY(-4.5px) rotate(-45deg);
          width: 18px;
        }
      `}</style>

      {/* Fixed nav bar */}
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
            className={`font-sans text-[0.72rem] font-800 tracking-[0.14em] uppercase transition-colors duration-500 no-underline ${
              menuOpen
                ? "text-cream/70 hover:text-cream"
                : isDark
                  ? "text-white/70 hover:text-white"
                  : "text-navy hover:text-navy"
            }`}
          >
            Brand.SBDC
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`burger-wrap flex flex-col items-end justify-center gap-[7px] w-[24px] h-[24px] transition-colors duration-500 ${
              menuOpen
                ? "text-cream/40 hover:text-cream"
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
      </nav>

      {/* Full-screen menu overlay — dark, editorial, Collins-level */}
      {mounted && (
        <div
          className="fixed inset-0 z-[45] overflow-auto"
          style={{
            background: "#0f1c2e",
            clipPath: menuOpen
              ? "inset(0 0 0 0)"
              : closing
                ? "inset(0 0 100% 0)"
                : "inset(100% 0 0 0)",
            transition:
              "clip-path 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {/* Content container */}
          <div className="relative z-10 min-h-full flex flex-col pt-28 pb-12 md:pb-16 px-8 sm:px-12 md:px-16 lg:px-24">
            {/* Main — nav groups + search */}
            <div className="flex-1 flex flex-col lg:flex-row gap-16 lg:gap-8 max-w-[1400px] mx-auto w-full">
              {/* Left — grouped nav links */}
              <div className="flex-[2] flex flex-col lg:flex-row gap-12 lg:gap-0">
                {NAV_SECTIONS.map((section, sIdx) => (
                  <div key={section.group} className="flex-1">
                    {/* Group label */}
                    <p
                      className="font-sans text-[10px] font-800 uppercase tracking-[0.25em] text-cream/20 mb-6 md:mb-8"
                      style={{
                        opacity: menuOpen ? 1 : 0,
                        transform: menuOpen
                          ? "translateY(0)"
                          : "translateY(6px)",
                        transition: menuOpen
                          ? `opacity 0.5s ease ${0.3 + sIdx * 0.08}s, transform 0.5s ease ${0.3 + sIdx * 0.08}s`
                          : "opacity 0.2s ease, transform 0.2s ease",
                      }}
                    >
                      {section.group}
                    </p>

                    {/* Links */}
                    <nav className="flex flex-col gap-0">
                      {section.links.map((link, i) => {
                        const delay = 0.35 + sIdx * 0.08 + i * 0.04;
                        return (
                          <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="block no-underline group/link py-2"
                            style={{
                              opacity: menuOpen ? 1 : 0,
                              transform: menuOpen
                                ? "translateY(0)"
                                : "translateY(8px)",
                              transition: menuOpen
                                ? `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`
                                : "opacity 0.15s ease, transform 0.15s ease",
                            }}
                          >
                            <div className="flex items-baseline gap-4">
                              <span className="font-mono text-[10px] text-cream/15 tabular-nums shrink-0 w-5">
                                {link.num}
                              </span>
                              <span
                                className="transition-all duration-300 text-cream/50 group-hover/link:text-cream"
                                style={{
                                  fontFamily:
                                    "'Tiempos Headline', 'Tiempos', Georgia, serif",
                                  fontWeight: 500,
                                  fontSize: "clamp(22px, 2.4vw, 32px)",
                                  lineHeight: "1.4",
                                  letterSpacing: "-0.02em",
                                }}
                              >
                                {link.label}
                              </span>
                            </div>
                          </a>
                        );
                      })}
                    </nav>
                  </div>
                ))}
              </div>

              {/* Right — search + quick info */}
              <div className="flex-1 flex flex-col justify-between lg:pl-12 lg:border-l lg:border-cream/[0.06]">
                {/* Search */}
                <div
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen
                      ? "translateY(0)"
                      : "translateY(8px)",
                    transition: menuOpen
                      ? "opacity 0.5s ease 0.55s, transform 0.5s ease 0.55s"
                      : "opacity 0.15s ease, transform 0.15s ease",
                  }}
                >
                  <div className="flex items-center gap-3 border-b border-cream/[0.1] pb-4 focus-within:border-cream/25 transition-colors duration-300">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-cream/20 flex-shrink-0"
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
                      className="flex-1 bg-transparent text-cream text-base md:text-lg outline-none placeholder:text-cream/20 tracking-[-0.01em] font-sans font-500"
                    />
                    <span className="font-mono text-[9px] text-cream/15 hidden sm:block">
                      {"\u2318"}K
                    </span>
                  </div>

                  {/* Search results */}
                  {query && (
                    <div className="mt-3 space-y-0">
                      {results.length === 0 ? (
                        <p className="font-sans text-sm text-cream/20 font-500 py-3">
                          No results for &ldquo;{query}&rdquo;
                        </p>
                      ) : (
                        results.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-baseline gap-3 py-3 no-underline group/result hover:bg-cream/[0.04] px-3 -mx-3 transition-colors duration-200 rounded-sm"
                          >
                            <span className="font-sans text-[9px] font-800 uppercase tracking-[0.14em] text-cream/15 w-16 shrink-0">
                              {item.section}
                            </span>
                            <span className="font-serif text-cream/50 text-sm group-hover/result:text-cream transition-colors duration-200">
                              {item.title}
                            </span>
                          </a>
                        ))
                      )}
                    </div>
                  )}
                </div>

                {/* Bottom info — quick stats + external link */}
                <div
                  className="mt-12 lg:mt-0"
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen
                      ? "translateY(0)"
                      : "translateY(8px)",
                    transition: menuOpen
                      ? "opacity 0.5s ease 0.65s, transform 0.5s ease 0.65s"
                      : "opacity 0.15s ease, transform 0.15s ease",
                  }}
                >
                  {/* Stat */}
                  <div className="mb-8">
                    <p className="font-serif text-cream/10 tracking-[-0.03em] leading-none" style={{ fontSize: "clamp(48px, 5vw, 72px)" }}>
                      40+
                    </p>
                    <p className="font-sans text-[10px] font-800 uppercase tracking-[0.2em] text-cream/15 mt-2">
                      Years of impact
                    </p>
                  </div>

                  {/* External link */}
                  <a
                    href="https://norcalsbdc.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans text-[10px] font-800 uppercase tracking-[0.2em] text-cream/20 hover:text-cream/50 transition-colors duration-300 no-underline"
                  >
                    norcalsbdc.org
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Footer — tagline */}
            <div
              className="mt-16 md:mt-20 max-w-[1400px] mx-auto w-full"
              style={{
                opacity: menuOpen ? 1 : 0,
                transition: menuOpen
                  ? "opacity 0.6s ease 0.7s"
                  : "opacity 0.15s ease",
              }}
            >
              <div className="border-t border-cream/[0.06] pt-6 flex items-center justify-between">
                <p
                  className="text-cream/[0.07] tracking-[-0.04em] leading-none select-none"
                  style={{
                    fontFamily:
                      "'Tiempos Fine', 'Tiempos', Georgia, serif",
                    fontWeight: 300,
                    fontStyle: "italic",
                    fontSize: "clamp(24px, 3vw, 40px)",
                  }}
                >
                  Your Business Better
                </p>
                <p className="font-sans text-[9px] font-800 uppercase tracking-[0.2em] text-cream/10">
                  &copy; 2026 NorCal SBDC
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
