"use client";

import { useState } from "react";

interface ColorSwatchProps {
  name: string;
  hex: string;
  usage: string;
}

export default function ColorSwatch({ name, hex, usage }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  /* Light colors need dark text overlay, dark colors need white */
  const isLight = [
    "#D9D9D9", "#d9d9d9", "#ffffff", "#f5f4f0", "#85A3C8", "#85a3c8",
  ].includes(hex.toLowerCase())
    || parseInt(hex.replace("#", ""), 16) > 0xaaaaaa;

  return (
    <button
      onClick={handleCopy}
      className="group text-left w-full"
    >
      <div
        className="relative w-full aspect-video border border-black/[0.04] overflow-hidden"
        style={{ backgroundColor: hex }}
      >
        {/* Name — top left */}
        <span
          className="absolute top-3 left-3 font-sans text-[11px] font-800 uppercase tracking-[0.1em]"
          style={{ color: isLight ? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.55)" }}
        >
          {name}
        </span>

        {/* Hex — bottom left */}
        <span
          className="absolute bottom-3 left-3 font-sans text-[11px] font-500 tracking-[0.02em]"
          style={{ color: isLight ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.4)" }}
        >
          {hex}
        </span>

        {/* Copy indicator — bottom right */}
        <span
          className="absolute bottom-3 right-3 font-sans text-[10px] font-700 uppercase tracking-[0.08em] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ color: isLight ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.4)" }}
        >
          {copied ? "Copied!" : "Copy"}
        </span>
      </div>
    </button>
  );
}
