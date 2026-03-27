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
      inputRef.current?.focus();
      setQuery("");
      setActiveIndex(0);
    }
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

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center"
      onClick={() => setOpen(false)}
      style={{ paddingTop: "16vh" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(15,28,46,0.85)",
          backdropFilter: "blur(20px) saturate(1.5)",
          WebkitBackdropFilter: "blur(20px) saturate(1.5)",
        }}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-xl mx-5 bg-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        style={{
          borderRadius: "16px",
          boxShadow: "0 40px 100px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.08)",
          animation: "searchIn 0.3s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Input */}
        <div className="flex items-center gap-4 px-6 py-5">
          <svg
            width="18" height="18" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="text-royal flex-shrink-0"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the brand guide..."
            className="flex-1 bg-transparent text-navy font-serif outline-none placeholder:text-text-tertiary/50 tracking-[-0.02em]"
            style={{ fontSize: "1.15rem" }}
          />
          <kbd
            className="font-sans text-[0.5rem] font-600 text-text-tertiary/60 uppercase tracking-[0.06em] border border-black/[0.06] px-2 py-1"
            style={{ borderRadius: "6px" }}
          >
            esc
          </kbd>
        </div>

        <div className="h-px bg-black/[0.04]" />

        {/* Results */}
        <div className="max-h-[360px] overflow-y-auto py-2">
          {results.length === 0 ? (
            <div className="px-6 py-14 text-center">
              <p className="font-serif text-text-tertiary/60 text-lg">No results</p>
              <p className="font-sans text-text-tertiary/40 text-[0.75rem] mt-2">Try a different search term</p>
            </div>
          ) : (
            results.map((item, i) => (
              <button
                key={item.href}
                onClick={() => navigate(item.href)}
                className={`w-full text-left px-6 py-4 flex items-center gap-5 transition-colors duration-150 ${
                  i === activeIndex ? "bg-cream" : "hover:bg-cream/60"
                }`}
              >
                <span
                  className="font-sans text-text-tertiary/50 uppercase font-600 w-20 shrink-0"
                  style={{ fontSize: "0.55rem", letterSpacing: "0.14em" }}
                >
                  {item.section}
                </span>
                <div className="flex-1 min-w-0">
                  <span className="font-sans text-[0.88rem] text-navy font-600 tracking-[-0.01em]">
                    {item.title}
                  </span>
                </div>
                {i === activeIndex && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-royal/40 flex-shrink-0">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                )}
              </button>
            ))
          )}
        </div>

        {/* Footer hints */}
        <div className="px-6 py-3 border-t border-black/[0.04] flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <kbd className="font-sans text-[0.45rem] font-600 text-text-tertiary/40 bg-cream px-1.5 py-0.5" style={{ borderRadius: "4px" }}>&uarr;&darr;</kbd>
            <span className="font-sans text-[0.5rem] text-text-tertiary/40">navigate</span>
          </span>
          <span className="flex items-center gap-1.5">
            <kbd className="font-sans text-[0.45rem] font-600 text-text-tertiary/40 bg-cream px-1.5 py-0.5" style={{ borderRadius: "4px" }}>&crarr;</kbd>
            <span className="font-sans text-[0.5rem] text-text-tertiary/40">open</span>
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes searchIn {
          from { opacity: 0; transform: scale(0.96) translateY(-8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
