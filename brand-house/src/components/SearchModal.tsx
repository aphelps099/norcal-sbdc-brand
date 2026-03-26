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
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
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
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]"
      onClick={() => setOpen(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy-deep/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg mx-4 bg-navy border border-cream/10 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-cream/5">
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-cream/30"
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
            placeholder="Search brand guide..."
            className="flex-1 bg-transparent text-cream text-sm outline-none placeholder:text-cream/30"
          />
          <kbd className="font-mono text-[10px] text-cream/20 border border-cream/10 rounded px-1.5 py-0.5">
            esc
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto py-2">
          {results.length === 0 ? (
            <p className="px-5 py-8 text-center text-sm text-cream/30">
              No results found
            </p>
          ) : (
            results.map((item) => (
              <button
                key={item.href}
                onClick={() => navigate(item.href)}
                className="w-full text-left px-5 py-3 hover:bg-white/[0.03] transition-colors flex items-center gap-3"
              >
                <span className="font-mono text-[10px] tracking-wider uppercase text-cream/30 w-20 shrink-0">
                  {item.section}
                </span>
                <span className="text-sm text-cream/70">{item.title}</span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
