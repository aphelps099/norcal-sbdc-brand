"use client";

import { useEffect, useState, useRef } from "react";
import Fuse from "fuse.js";
import { searchData, type SearchItem } from "@/lib/search-index";

const fuse = new Fuse(searchData, {
  keys: ["title", "section", "content"],
  threshold: 0.4,
});

const NAV_COL_1 = [
  { label: "Colors",       href: "/colors",     color: "#1D5AA7", desc: "Palette & usage" },
  { label: "Typography",   href: "/typography",  color: "#F7024D", desc: "Type system" },
  { label: "Logos",         href: "/logos",       color: "#0f1c2e", desc: "Downloads & rules" },
  { label: "Voice & Tone", href: "/voice",       color: "#c4543a", desc: "How we speak" },
  { label: "Templates",    href: "/templates",   color: "#8FC5D9", desc: "Copy blocks" },
];

const NAV_COL_2 = [
  { label: "Content",   href: "/content",   color: "#1D5AA7", desc: "Social & newsletter" },
  { label: "Calendar",  href: "/calendar",  color: "#c4543a", desc: "Key dates & themes" },
  { label: "Stories",   href: "/stories",   color: "#F7024D", desc: "Success stories" },
  { label: "Glossary",  href: "/glossary",  color: "#8FC5D9", desc: "Terms & definitions" },
];

const ALL_LINKS = [...NAV_COL_1, ...NAV_COL_2];

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      setMounted(true);
      setTimeout(() => searchRef.current?.focus(), 400);
    } else {
      document.body.style.overflow = "";
      setHoveredIndex(null);
      setQuery("");
      closeTimer.current = setTimeout(() => setMounted(false), 750);
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
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isDark = !pastHero && !menuOpen;

  const renderLink = (link: typeof ALL_LINKS[0], globalIdx: number, i: number) => (
    <a
      key={link.href}
      href={link.href}
      onClick={() => setMenuOpen(false)}
      onMouseEnter={() => setHoveredIndex(globalIdx)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="block no-underline group/link"
      style={{
        clipPath: menuOpen ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
        transform: menuOpen ? "translateY(0)" : "translateY(16px)",
        transition: `clip-path 0.6s cubic-bezier(0.16,1,0.3,1) ${0.12 + i * 0.045}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${0.12 + i * 0.045}s`,
      }}
    >
      <span className="flex items-baseline gap-3">
        <span
          className="font-serif block transition-colors duration-300"
          style={{
            fontSize: "clamp(24px, 3.8vw, 48px)",
            lineHeight: "1.35",
            letterSpacing: "-0.02em",
            color: hoveredIndex === globalIdx
              ? link.color
              : hoveredIndex !== null
                ? "rgba(15,28,46,0.12)"
                : "rgba(15,28,46,0.80)",
          }}
        >
          {link.label}
        </span>
        <span
          className="font-sans text-[11px] font-500 tracking-[0.01em] transition-all duration-300 hidden md:inline translate-y-[-1px]"
          style={{
            color: hoveredIndex === globalIdx
              ? link.color
              : hoveredIndex !== null
                ? "rgba(15,28,46,0.06)"
                : "rgba(15,28,46,0.25)",
          }}
        >
          {link.desc}
        </span>
      </span>
    </a>
  );

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
              menuOpen ? "text-navy" : isDark ? "text-white/70 hover:text-white" : "text-navy hover:text-navy"
            }`}
          >
            Brand.SBDC
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`burger-wrap flex flex-col items-end justify-center gap-[6.5px] w-[24px] h-[24px] transition-colors duration-500 ${
              menuOpen ? "text-navy/60 hover:text-navy" : isDark ? "text-white/40 hover:text-white" : "text-text-tertiary hover:text-navy"
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
          className={`fixed inset-0 z-[45] bg-white transition-opacity duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative z-10 h-full flex flex-col lg:flex-row pt-24 pb-8 md:pb-10 px-8 sm:px-12 md:px-16 lg:px-24">

            {/* LEFT: Nav columns */}
            <div className="flex-1 flex flex-col justify-center lg:pr-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16">
                {/* Column 1 — Brand System */}
                <div>
                  <p
                    className="font-sans text-[10px] font-800 uppercase tracking-[0.18em] text-navy/20 mb-5"
                    style={{
                      opacity: menuOpen ? 1 : 0,
                      transition: "opacity 0.4s ease 0.08s",
                    }}
                  >
                    Brand System
                  </p>
                  <nav className="flex flex-col gap-0.5">
                    {NAV_COL_1.map((link, i) => renderLink(link, i, i))}
                  </nav>
                </div>

                {/* Column 2 — Resources */}
                <div className="mt-8 md:mt-0">
                  <p
                    className="font-sans text-[10px] font-800 uppercase tracking-[0.18em] text-navy/20 mb-5"
                    style={{
                      opacity: menuOpen ? 1 : 0,
                      transition: "opacity 0.4s ease 0.08s",
                    }}
                  >
                    Resources
                  </p>
                  <nav className="flex flex-col gap-0.5">
                    {NAV_COL_2.map((link, i) =>
                      renderLink(link, NAV_COL_1.length + i, i)
                    )}
                  </nav>
                </div>
              </div>
            </div>

            {/* RIGHT: Search */}
            <div
              className="lg:w-[340px] xl:w-[400px] lg:border-l lg:border-navy/[0.06] lg:pl-16 flex flex-col justify-center order-first lg:order-last mb-10 lg:mb-0"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.5s ease 0.1s, transform 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s",
              }}
            >
              <div className="flex items-center gap-3 border-b-2 border-navy/10 pb-3 focus-within:border-navy/30 transition-colors duration-300">
                <svg
                  width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="text-navy/25 flex-shrink-0"
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
                  className="flex-1 bg-transparent font-serif text-navy text-lg outline-none placeholder:text-navy/20 tracking-[-0.02em]"
                />
                <span className="font-sans text-[10px] font-800 uppercase tracking-[0.1em] text-navy/15 hidden sm:block">
                  {"\u2318"}K
                </span>
              </div>

              {/* Search results */}
              {query && (
                <div className="mt-4 space-y-0.5">
                  {results.length === 0 ? (
                    <p className="font-sans text-sm text-navy/30 font-500 py-2">
                      No results for &ldquo;{query}&rdquo;
                    </p>
                  ) : (
                    results.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-baseline gap-3 py-2.5 px-1 no-underline group/result hover:bg-navy/[0.03] -mx-1 transition-colors duration-200"
                      >
                        <span className="font-sans text-[9px] font-800 uppercase tracking-[0.14em] text-navy/20 w-14 shrink-0">
                          {item.section}
                        </span>
                        <span className="font-serif text-navy text-base group-hover/result:text-royal transition-colors duration-200">
                          {item.title}
                        </span>
                      </a>
                    ))
                  )}
                </div>
              )}

              {/* Quick hint when not searching */}
              {!query && (
                <p className="mt-5 font-sans text-[11px] text-navy/15 font-500 leading-relaxed">
                  Search colors, typography, logos, voice guidelines, templates, and more.
                </p>
              )}
            </div>

            {/* Bottom bar */}
            <div
              className="absolute bottom-8 md:bottom-10 left-8 sm:left-12 md:left-16 lg:left-24 right-8 sm:right-12 md:right-16 lg:right-24 flex items-end justify-between border-t border-navy/[0.06] pt-5"
              style={{
                opacity: menuOpen ? 1 : 0,
                transition: "opacity 0.4s ease 0.5s",
              }}
            >
              <a
                href="https://norcalsbdc.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-navy/20 hover:text-navy/50 transition-colors duration-300 no-underline font-800 uppercase"
                style={{ fontSize: "0.6rem", letterSpacing: "0.12em" }}
              >
                norcalsbdc.org
              </a>
              <span
                className="font-sans text-navy/12 uppercase font-800"
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
