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
        className="w-full aspect-[4/3] rounded-xl mb-3 border border-white/5 group-hover:scale-[1.02] transition-transform duration-300"
        style={{ backgroundColor: hex }}
      />
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-cream">{name}</p>
          <p className="font-mono text-xs text-cream/40">{hex}</p>
        </div>
        <span className="font-mono text-[10px] text-cream/30 opacity-0 group-hover:opacity-100 transition-opacity">
          {copied ? "Copied!" : "Click to copy"}
        </span>
      </div>
      <p className="text-xs text-cream/30 mt-1">{usage}</p>
    </button>
  );
}
