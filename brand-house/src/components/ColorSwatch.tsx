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

  const textColor = isLight ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.6)";
  const subColor = isLight ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.4)";

  return (
    <button
      onClick={handleCopy}
      className="group text-left flex-1 min-w-0 relative"
    >
      <div
        className="relative w-full h-[140px] md:h-[180px] overflow-hidden flex flex-col justify-end p-4"
        style={{ backgroundColor: hex }}
      >
        {/* Hover helper text — stacked mono, light grey bg, black text */}
        <div
          className="absolute top-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        >
          <div
            className="px-2.5 py-2 inline-block max-w-full"
            style={{
              backgroundColor: "#e8e8e5",
              color: "#0a0a0a",
              fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
              fontSize: "10px",
              lineHeight: 1.55,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
            }}
          >
            {usage}.
          </div>
        </div>

        {/* Bottom label row — name / hex */}
        <span
          className="font-sans text-[13px] mb-0.5"
          style={{ color: textColor, fontWeight: 500 }}
        >
          {name}
        </span>
        <span
          className="font-label text-[11px] tracking-[0.02em]"
          style={{ color: subColor }}
        >
          {hex}
        </span>

        {/* Copy indicator — bottom right */}
        <span
          className="absolute bottom-4 right-4 font-sans text-[10px] uppercase tracking-[0.08em] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ color: subColor, fontWeight: 500 }}
        >
          {copied ? "Copied!" : "Copy"}
        </span>
      </div>
    </button>
  );
}
