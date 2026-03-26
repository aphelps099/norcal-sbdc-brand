"use client";

import { useState } from "react";

interface CopyButtonProps {
  text: string;
  label?: string;
}

export default function CopyButton({ text, label = "Copy" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="font-mono text-xs tracking-wider uppercase px-3 py-1.5 rounded border border-cream/10 text-cream/50 hover:text-cream hover:border-cream/30 transition-all duration-200"
    >
      {copied ? "Copied!" : label}
    </button>
  );
}
