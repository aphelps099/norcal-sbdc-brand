"use client";

import { useEffect, useState, useRef } from "react";
import Fuse from "fuse.js";
import { searchData, type SearchItem } from "@/lib/search-index";

const fuse = new Fuse(searchData, {
  keys: ["title", "section", "content"],
  threshold: 0.4,
});

const NAV_LINKS = [
  { label: "Colors",       href: "/colors" },
  { label: "Typography",   href: "/typography" },
  { label: "Logos",         href: "/logos" },
  { label: "Voice & Tone", href: "/voice" },
  { label: "Templates",    href: "/templates" },
  { label: "Content",      href: "/content" },
  { label: "Calendar",     href: "/calendar" },
  { label: "Stories",      href: "/stories" },
  { label: "Glossary",     href: "/glossary" },
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
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
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
          className="fixed inset-0 z-[45] overflow-hidden"
          style={{
            background: "#8FC5D9",
            clipPath: menuOpen
              ? "inset(0 0 0 0)"
              : closing
                ? "inset(0 0 0 100%)"
                : "inset(0 100% 0 0)",
            transition: "clip-path 0.7s cubic-bezier(0.25,0.1,0.25,1)",
          }}
        >
          {/* Giant "Explore" watermark */}
          <div
            className="absolute bottom-[-6vw] left-[-2vw] pointer-events-none select-none"
            style={{
              fontFamily: "'Tiempos Fine', 'Tiempos', Georgia, serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(160px, 22vw, 320px)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "rgba(15,28,46,0.045)",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.8s ease 0.3s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.3s",
            }}
          >
            Explore
          </div>

          <div className="relative z-10 h-full flex flex-col pt-24 pb-8 md:pb-10 px-8 sm:px-12 md:px-16 lg:px-24">

            {/* Main content — split: links left, search right */}
            <div className="flex-1 flex flex-col lg:flex-row items-start lg:items-center">

              {/* Left half — all nav links in single column */}
              <div className="flex-1 flex flex-col justify-center lg:pr-16">
                <nav className="flex flex-col">
                  {NAV_LINKS.map((link, i) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block no-underline group/nav"
                      style={{
                        opacity: menuOpen ? 1 : 0,
                        transform: menuOpen ? "translateY(0)" : "translateY(8px)",
                        transition: menuOpen
                          ? `opacity 0.5s ease ${0.3 + i * 0.04}s, transform 0.5s ease ${0.3 + i * 0.04}s`
                          : `opacity 0.25s ease, transform 0.25s ease`,
                      }}
                    >
                      <span
                        className="block py-1 transition-all duration-200 text-navy/55 group-hover/nav:text-navy group-hover/nav:underline underline-offset-4 decoration-navy/25"
                        style={{
                          fontFamily: "'Tiempos Headline', 'Tiempos', Georgia, serif",
                          fontWeight: 500,
                          fontSize: "clamp(20px, 2.6vw, 34px)",
                          lineHeight: "1.5",
                          letterSpacing: "-0.015em",
                        }}
                      >
                        {link.label}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Right half — search */}
              <div
                className="flex-1 flex flex-col justify-center lg:pl-16 mt-10 lg:mt-0 w-full lg:w-auto"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(8px)",
                  transition: menuOpen
                    ? "opacity 0.5s ease 0.45s, transform 0.5s ease 0.45s"
                    : "opacity 0.2s ease, transform 0.2s ease",
                }}
              >
                <div className="max-w-[440px]">
                  <div className="flex items-center gap-3 border-b-[3px] border-navy/25 pb-3 focus-within:border-navy/50 transition-colors duration-300">
                    <svg
                      width="22" height="22" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      className="text-navy/40 flex-shrink-0"
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
                      className="flex-1 bg-transparent text-navy text-xl md:text-2xl outline-none placeholder:text-navy/30 tracking-[-0.02em]"
                      style={{ fontFamily: "'Tiempos', Georgia, serif" }}
                    />
                    <span className="font-sans text-[10px] font-800 uppercase tracking-[0.1em] text-navy/20 hidden sm:block">
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
                            className="flex items-baseline gap-3 py-2.5 no-underline group/result hover:bg-navy/[0.06] px-2 -mx-2 transition-colors duration-200"
                          >
                            <span className="font-sans text-[9px] font-800 uppercase tracking-[0.14em] text-navy/25 w-14 shrink-0">
                              {item.section}
                            </span>
                            <span className="font-serif text-navy text-base group-hover/result:text-navy transition-colors duration-200">
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
        </div>
      )}
    </>
  );
}
