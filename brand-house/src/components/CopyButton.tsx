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
      className="font-sans text-[11px] font-label tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-lg border border-transparent text-fog hover:text-white hover:bg-royal hover:border-royal transition-all duration-200"
    >
      {copied ? "Copied!" : label}
    </button>
  );
}
