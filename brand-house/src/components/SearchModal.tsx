"use client";

import { useEffect, useState, useRef } from "react";
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
    }
  }, [open]);

  const navigate = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[18vh]"
      onClick={() => setOpen(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg mx-4 bg-white rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-black/[0.06]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-black/[0.04]">
          <svg
            width="16" height="16" fill="none" stroke="currentColor"
            strokeWidth="2" className="text-text-tertiary" viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search brand guide..."
            className="flex-1 bg-transparent text-navy text-sm font-sans font-500 outline-none placeholder:text-text-tertiary"
          />
          <kbd className="font-mono text-[10px] text-text-tertiary border border-black/[0.06] rounded px-1.5 py-0.5">
            esc
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto py-2">
          {results.length === 0 ? (
            <p className="px-5 py-8 text-center text-sm text-text-tertiary">
              No results found
            </p>
          ) : (
            results.map((item) => (
              <button
                key={item.href}
                onClick={() => navigate(item.href)}
                className="w-full text-left px-5 py-3.5 hover:bg-cream transition-colors duration-200 flex items-center gap-4"
              >
                <span className="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-text-tertiary w-20 shrink-0">
                  {item.section}
                </span>
                <span className="text-sm text-navy font-sans font-500">{item.title}</span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
