"use client";

import { useEffect } from "react";

interface SetupGuideModalProps {
  open: boolean;
  onClose: () => void;
}

const STEPS = [
  {
    title: "Gmail",
    steps: [
      'Go to Settings (gear icon) → "See all settings"',
      "Scroll to the Signature section",
      'Click "Copy Signature" in the Brand House',
      "Paste into the signature editor — Gmail preserves formatting",
      "Save Changes at the bottom of the page",
    ],
  },
  {
    title: "Outlook (Web)",
    steps: [
      "Settings → View all Outlook settings → Mail → Compose and reply",
      'Click "Copy Signature" in the Brand House',
      "Paste into the signature editor",
      "Click Save",
    ],
  },
  {
    title: "Outlook (Desktop)",
    steps: [
      "File → Options → Mail → Signatures",
      'Create a new signature, name it "NorCal SBDC"',
      'Click "Copy Signature" in the Brand House',
      "Paste into the signature editor",
      "Set as default for new messages and replies",
    ],
  },
  {
    title: "Apple Mail",
    steps: [
      "Mail → Settings → Signatures",
      'Click "+" to add a new signature',
      'Click "Copy Signature" in the Brand House',
      "Paste into the signature area",
      'Uncheck "Always match my default message font"',
    ],
  },
];

export default function SetupGuideModal({ open, onClose }: SetupGuideModalProps) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Card */}
      <div
        className="relative bg-white rounded-xl max-w-[640px] w-full max-h-[85vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white px-8 pt-8 pb-4 border-b border-black/[0.06] flex items-center justify-between z-10">
          <h2
            className="text-navy text-[20px] tracking-[-0.01em]"
            style={{ fontFamily: "var(--sans)", fontWeight: 500 }}
          >
            Set Up Your Signature
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-navy/30 hover:text-navy/70 hover:bg-navy/[0.04] transition-all"
          >
            <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>close</span>
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-6 space-y-8">
          {STEPS.map((section) => (
            <div key={section.title}>
              <h3 className="font-label text-[11px] uppercase tracking-[0.12em] text-royal font-semibold mb-3">
                {section.title}
              </h3>
              <ol className="list-decimal pl-5 space-y-1.5">
                {section.steps.map((step, i) => (
                  <li
                    key={i}
                    className="text-navy/60 text-[14px] font-sans leading-relaxed"
                  >
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}

          {/* Tip callout */}
          <div className="bg-royal/[0.04] border-l-3 border-royal px-5 py-4 rounded-r-lg">
            <h4 className="font-label text-[10px] uppercase tracking-[0.12em] text-royal mb-2">
              Tip
            </h4>
            <p className="text-navy/55 text-[13px] font-sans leading-relaxed">
              The <strong className="text-navy/80">Copy Signature</strong> button copies formatted HTML — not plain text. When you paste it into your email client, the logo, colors, and links should all carry over automatically.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
