"use client";

import { useEffect, useState, useCallback } from "react";

const NAV_LINKS = [
  { label: "Colors", href: "/colors" },
  { label: "Typography", href: "/typography" },
  { label: "Logos", href: "/logos" },
  { label: "Voice & Tone", href: "/voice" },
  { label: "Templates", href: "/templates" },
];

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setPastHero(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const openSearch = useCallback(() => {
    setMenuOpen(false);
    window.dispatchEvent(new CustomEvent("open-search"));
  }, []);

  const isDark = !pastHero && !menuOpen;

  return (
    <>
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
            className={`font-sans text-[0.7rem] font-800 tracking-[0.12em] uppercase transition-colors duration-500 no-underline ${
              menuOpen ? "text-white" : isDark ? "text-white/70 hover:text-white" : "text-navy hover:text-navy"
            }`}
          >
            Brand.SBDC
          </a>

          <div className="flex items-center gap-6">
            <button
              onClick={openSearch}
              className={`transition-colors duration-500 ${
                menuOpen ? "text-white/50 hover:text-white" : isDark ? "text-white/40 hover:text-white" : "text-text-tertiary hover:text-navy"
              }`}
              aria-label="Search"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`transition-colors duration-500 ${
                menuOpen ? "text-white/80 hover:text-white" : isDark ? "text-white/40 hover:text-white" : "text-text-tertiary hover:text-navy"
              }`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 8h16" />
                  <path d="M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-[45] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "var(--navy-deep)" }}
      >
        <div className="h-full flex flex-col items-center justify-center px-8">
          <div className="flex flex-col items-center gap-1">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="group block py-3 no-underline text-center"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${0.1 + i * 0.06}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.06}s`,
                }}
              >
                <span
                  className="font-serif text-white/80 group-hover:text-white transition-colors duration-300 tracking-[-0.03em]"
                  style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
                >
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          {/* Bottom info */}
          <div
            className="absolute bottom-12 left-0 right-0 text-center"
            style={{
              opacity: menuOpen ? 1 : 0,
              transition: "opacity 0.5s ease 0.5s",
            }}
          >
            <a
              href="https://norcalsbdc.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-white/20 hover:text-white/40 transition-colors duration-300 no-underline"
              style={{ fontSize: "0.6rem", letterSpacing: "0.1em" }}
            >
              norcalsbdc.org
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
