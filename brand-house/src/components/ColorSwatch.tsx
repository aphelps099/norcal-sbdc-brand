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

  return (
    <button
      onClick={handleCopy}
      className="group text-left w-full"
    >
      <div
        className="w-full aspect-[4/3] rounded-xl mb-3 border border-black/[0.04] group-hover:scale-[1.02] transition-transform duration-300 shadow-sm"
        style={{ backgroundColor: hex }}
      />
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-sans font-800 text-navy">{name}</p>
          <p className="font-sans text-xs font-500 text-text-tertiary">{hex}</p>
        </div>
        <span className="font-sans text-[10px] font-700 uppercase tracking-[0.08em] text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {copied ? "Copied!" : "Copy"}
        </span>
      </div>
      <p className="text-xs text-text-tertiary mt-1 font-sans font-500">{usage}</p>
    </button>
  );
}
