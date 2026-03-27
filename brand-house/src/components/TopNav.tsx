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
    setTimeout(() => window.dispatchEvent(new CustomEvent("open-search")), 50);
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

        /* ── Menu overlay grain ── */
        .menu-overlay {
          position: relative;
        }
        .menu-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(165deg, rgba(29,90,167,0.08) 0%, transparent 40%, rgba(143,197,217,0.04) 100%);
          pointer-events: none;
          z-index: 1;
        }
        .menu-overlay::after {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.06;
          pointer-events: none;
          z-index: 2;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E");
          background-size: 200px 200px;
          mix-blend-mode: overlay;
        }

        /* ── Menu link hover line ── */
        .menu-link {
          position: relative;
        }
        .menu-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: rgba(143,197,217,0.3);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
        }
        .menu-link:hover::after {
          transform: scaleX(1);
        }

        /* ── Statement italic entrance ── */
        @keyframes statement-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .menu-statement {
          animation: statement-in 0.4s cubic-bezier(0.16,1,0.3,1) 0.5s both;
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
              menuOpen ? "text-white" : isDark ? "text-white/70 hover:text-white" : "text-navy hover:text-navy"
            }`}
          >
            Brand.SBDC
          </a>

          <div className="flex items-center gap-7">
            {/* Search */}
            <button
              onClick={openSearch}
              className={`transition-all duration-500 hover:scale-110 ${
                menuOpen ? "text-white/50 hover:text-white" : isDark ? "text-white/40 hover:text-white" : "text-text-tertiary hover:text-navy"
              }`}
              aria-label="Search"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>

            {/* Hamburger — asymmetric bars */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`burger-wrap flex flex-col items-end justify-center gap-[6.5px] w-[24px] h-[24px] transition-colors duration-500 ${
                menuOpen ? "text-white/80 hover:text-white" : isDark ? "text-white/40 hover:text-white" : "text-text-tertiary hover:text-navy"
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
      <div
        className={`menu-overlay fixed inset-0 z-[45] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "linear-gradient(180deg, #060e18 0%, #091422 50%, #0c1a2e 100%)" }}
      >
        <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-16 md:px-24">
          {/* Left-aligned nav links */}
          <div className="max-w-[600px]">
            <nav className="flex flex-col gap-0">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="menu-link group block py-3 md:py-4 no-underline border-b border-white/[0.04] first:border-t"
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 0.4s ease ${0.06 + i * 0.04}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${0.06 + i * 0.04}s`,
                  }}
                >
                  <span className="flex items-baseline justify-between">
                    <span
                      className="font-sans text-white/80 font-800 uppercase tracking-[0.06em] group-hover:text-white group-hover:tracking-[0.1em] transition-all duration-500"
                      style={{ fontSize: "clamp(14px, 2vw, 18px)" }}
                    >
                      {link.label}
                    </span>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                      className="text-white/0 group-hover:text-pool/60 transition-all duration-500 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </a>
              ))}
            </nav>

            {/* Statement — Tiempos italic */}
            {menuOpen && (
              <p
                className="menu-statement font-serif italic text-pool/30 mt-10 leading-relaxed"
                style={{ fontSize: "clamp(18px, 2.5vw, 26px)" }}
              >
                Your business deserves someone<br />
                who <span className="text-pool/50">gets it.</span>
              </p>
            )}
          </div>

          {/* Bottom bar */}
          <div
            className="absolute bottom-10 left-8 sm:left-16 md:left-24 right-8 sm:right-16 md:right-24 flex items-end justify-between"
            style={{
              opacity: menuOpen ? 1 : 0,
              transition: "opacity 0.4s ease 0.4s",
            }}
          >
            <a
              href="https://norcalsbdc.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-white/12 hover:text-white/30 transition-colors duration-300 no-underline font-800 uppercase"
              style={{ fontSize: "0.6rem", letterSpacing: "0.12em" }}
            >
              norcalsbdc.org
            </a>
            <span
              className="font-sans text-white/8 uppercase font-800"
              style={{ fontSize: "0.55rem", letterSpacing: "0.1em" }}
            >
              &copy; 2026
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
