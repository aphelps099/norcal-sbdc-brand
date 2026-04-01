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
      }, 700);
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
      {/* Fixed bar */}
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
                ? "text-white/50 hover:text-white"
                : isDark
                  ? "text-white/70 hover:text-white"
                  : "text-navy hover:text-navy"
            }`}
          >
            Brand.SBDC
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex items-center gap-2 transition-colors duration-500 ${
              menuOpen
                ? "text-white/30 hover:text-white"
                : isDark
                  ? "text-white/40 hover:text-white"
                  : "text-text-tertiary hover:text-navy"
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="font-sans text-[10px] font-800 uppercase tracking-[0.18em]">
              {menuOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Full-screen overlay */}
      {mounted && (
        <div
          className="fixed inset-0 z-[45] overflow-auto"
          style={{
            background: "#0f1c2e",
            opacity: menuOpen ? 1 : closing ? 0 : 0,
            transition: "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
            pointerEvents: menuOpen ? "auto" : "none",
          }}
        >
          <div className="min-h-full flex flex-col justify-center px-8 sm:px-12 md:px-20 lg:px-32 py-28">
            {/* Search — top, minimal */}
            <div
              className="mb-12 md:mb-16 max-w-md"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(6px)",
                transition: menuOpen
                  ? "opacity 0.4s ease 0.25s, transform 0.4s ease 0.25s"
                  : "opacity 0.15s ease",
              }}
            >
              <div className="flex items-center gap-3 border-b border-white/[0.08] pb-3 focus-within:border-white/20 transition-colors duration-300">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/15 shrink-0"
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
                  className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-white/15 tracking-[-0.01em] font-sans font-500"
                />
                <span className="font-mono text-[9px] text-white/10 hidden sm:block">
                  {"\u2318"}K
                </span>
              </div>

              {query && (
                <div className="mt-2 space-y-0">
                  {results.length === 0 ? (
                    <p className="font-sans text-xs text-white/15 py-2">
                      No results
                    </p>
                  ) : (
                    results.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 font-sans text-sm text-white/30 hover:text-white transition-colors duration-200 no-underline"
                      >
                        {item.title}
                      </a>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Links — single column, large, clean sans-serif */}
            <nav className="flex flex-col">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block no-underline group/link border-b border-white/[0.04] first:border-t first:border-white/[0.04]"
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateY(0)" : "translateY(8px)",
                    transition: menuOpen
                      ? `opacity 0.4s ease ${0.15 + i * 0.03}s, transform 0.4s ease ${0.15 + i * 0.03}s`
                      : "opacity 0.1s ease",
                  }}
                >
                  <div className="py-3 md:py-4 flex items-center justify-between">
                    <span
                      className="font-sans font-700 text-white/30 group-hover/link:text-white transition-colors duration-300 tracking-[-0.02em]"
                      style={{ fontSize: "clamp(24px, 3.5vw, 44px)" }}
                    >
                      {link.label}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white/0 group-hover/link:text-white/20 transition-all duration-300 group-hover/link:translate-x-1"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
