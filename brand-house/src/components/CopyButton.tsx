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
      className="font-mono text-[0.65rem] tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-lg border border-black/[0.08] text-text-secondary hover:text-navy hover:border-black/15 hover:bg-black/[0.02] transition-all duration-200"
    >
      {copied ? "Copied!" : label}
    </button>
  );
}
