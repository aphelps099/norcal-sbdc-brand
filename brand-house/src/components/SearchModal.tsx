"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { searchData, type SearchItem } from "@/lib/search-index";

const fuse = new Fuse(searchData, {
  keys: ["title", "section", "content"],
  threshold: 0.4,
});

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results: SearchItem[] = query
    ? fuse.search(query).map((r) => r.item)
    : searchData;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpenSearch = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-search", onOpenSearch);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-search", onOpenSearch);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery("");
      setActiveIndex(0);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const navigate = useCallback((href: string) => {
    setOpen(false);
    router.push(href);
  }, [router]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && results[activeIndex]) {
      navigate(results[activeIndex].href);
    }
  }, [results, activeIndex, navigate]);

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setOpen(false)}
      style={{ background: "var(--navy-deep)" }}
    >
      {/* Full-page search layout */}
      <div
        className="h-full flex flex-col items-center justify-center px-8"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Close hint — top right */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-8 sm:right-12 z-10 font-sans text-white/20 hover:text-white/50 transition-colors duration-300 font-label uppercase"
          style={{ fontSize: "0.65rem", letterSpacing: "0.1em" }}
        >
          Close
        </button>

        {/* Search input — large, centered */}
        <div className="w-full max-w-[700px]">
          <div className="flex items-center gap-5 border-b border-white/10 pb-4">
            <svg
              width="22" height="22" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="text-white/25 flex-shrink-0"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="flex-1 bg-transparent text-white font-sans outline-none placeholder:text-white/20 tracking-[-0.03em]"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            />
          </div>

          {/* Results */}
          <div className="mt-8 max-h-[40vh] overflow-y-auto">
            {query && results.length === 0 ? (
              <p className="font-sans text-white/20 text-lg">No results found.</p>
            ) : (
              results.map((item, i) => (
                <button
                  key={item.href}
                  onClick={() => navigate(item.href)}
                  className={`w-full text-left py-4 flex items-center gap-6 transition-all duration-200 group ${
                    i === activeIndex ? "opacity-100" : "opacity-40 hover:opacity-70"
                  }`}
                  style={{
                    opacity: open ? undefined : 0,
                    transform: open ? "translateY(0)" : "translateY(12px)",
                    transition: `opacity 0.4s ease ${0.1 + i * 0.04}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.04}s`,
                  }}
                >
                  <span
                    className="font-sans text-white/40 uppercase font-label w-20 shrink-0"
                    style={{ fontSize: "0.62rem", letterSpacing: "0.14em" }}
                  >
                    {item.section}
                  </span>
                  <span
                    className="font-sans text-white tracking-[-0.02em] group-hover:translate-x-1 transition-transform duration-300"
                    style={{ fontSize: "clamp(18px, 2.5vw, 28px)" }}
                  >
                    {item.title}
                  </span>
                  {i === activeIndex && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/30 ml-auto flex-shrink-0">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  )}
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
