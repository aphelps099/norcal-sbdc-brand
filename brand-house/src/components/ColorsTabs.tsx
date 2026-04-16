"use client";

import { useState } from "react";
import ColorSwatch from "@/components/ColorSwatch";
import ColorSwatchGrid from "@/components/ColorSwatchGrid";
import { colors, colorGroups } from "@/lib/brand-tokens";

type Tab = "colors" | "accessibility";

const wcagPairs = [
  { fg: "Navy", bg: "White", fgHex: "#0f1c2e", bgHex: "#FFFFFF", ratio: "17.08", grade: "AAA" },
  { fg: "Navy", bg: "Cloud", fgHex: "#0f1c2e", bgHex: "#F2F4F7", ratio: "15.50", grade: "AAA" },
  { fg: "Cobalt", bg: "White", fgHex: "#004290", bgHex: "#FFFFFF", ratio: "9.62", grade: "AAA" },
  { fg: "Berry", bg: "White", fgHex: "#A73B44", bgHex: "#FFFFFF", ratio: "6.26", grade: "AA" },
  { fg: "Evergreen", bg: "White", fgHex: "#00685E", bgHex: "#FFFFFF", ratio: "6.68", grade: "AA" },
  { fg: "White", bg: "Navy", fgHex: "#FFFFFF", bgHex: "#0f1c2e", ratio: "17.08", grade: "AAA" },
  { fg: "White", bg: "Cobalt", fgHex: "#FFFFFF", bgHex: "#004290", ratio: "9.62", grade: "AAA" },
  { fg: "White", bg: "Evergreen", fgHex: "#FFFFFF", bgHex: "#00685E", ratio: "6.68", grade: "AA" },
  { fg: "Cloud", bg: "Navy", fgHex: "#F2F4F7", bgHex: "#0f1c2e", ratio: "15.50", grade: "AAA" },
  { fg: "Fog", bg: "White", fgHex: "#85A3C8", bgHex: "#FFFFFF", ratio: "2.60", grade: "Fail" },
];

export default function ColorsTabs() {
  const [tab, setTab] = useState<Tab>("colors");

  return (
    <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
      {/* Section heading — clean, no eyebrow number */}
      <h2
        className="text-navy tracking-[-0.015em] mb-8 md:mb-10"
        style={{
          fontFamily: "var(--sans)",
          fontWeight: 500,
          fontSize: "clamp(28px, 3.2vw, 40px)",
          lineHeight: 1.05,
        }}
      >
        Brand Colors
      </h2>

      {/* Tab bar — outlined chips, active has underline lip */}
      <div className="flex items-stretch gap-0 mb-10 md:mb-12">
        <TabButton
          label="Brand Colors"
          active={tab === "colors"}
          onClick={() => setTab("colors")}
        />
        <TabButton
          label="Accessibility"
          active={tab === "accessibility"}
          onClick={() => setTab("accessibility")}
        />
      </div>

      {tab === "colors" ? (
        <div>
          <p className="text-navy/50 text-[13px] leading-relaxed font-sans mb-10 max-w-[520px]">
            Hover any swatch to see its intended usage. Click to copy the hex value.
          </p>

          {colorGroups.map((group) => (
            <div key={group.label} className="mb-10 last:mb-0">
              <h3 className="font-label text-[10px] uppercase tracking-[0.14em] text-navy/40 mb-3">
                {group.label}
              </h3>
              <ColorSwatchGrid>
                {group.keys.map((key) => {
                  const color = colors[key];
                  return (
                    <ColorSwatch
                      key={color.hex}
                      name={color.name}
                      hex={color.hex}
                      usage={color.usage}
                    />
                  );
                })}
              </ColorSwatchGrid>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p className="text-navy/50 text-[13px] leading-relaxed font-sans mb-10 max-w-[520px]">
            WCAG 2.1 contrast ratios for key brand color pairings. All primary text
            combinations meet AA or higher.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {wcagPairs.map((pair) => (
              <div key={`${pair.fg}-${pair.bg}`}>
                <div
                  className="px-5 py-4 flex items-center justify-between"
                  style={{
                    backgroundColor: pair.bgHex,
                    ...(pair.bgHex === "#FFFFFF"
                      ? { border: "1px solid rgba(15,28,46,0.08)" }
                      : {}),
                  }}
                >
                  <span
                    className="font-sans text-[15px] tracking-[-0.01em]"
                    style={{ color: pair.fgHex, fontWeight: 500 }}
                  >
                    Aa
                  </span>
                  <span
                    className="font-label text-[11px] uppercase tracking-[0.1em]"
                    style={{ color: pair.fgHex, opacity: 0.55 }}
                  >
                    {pair.ratio}:1 {pair.grade}
                  </span>
                </div>
                <p className="px-1 pt-2 text-navy/45 text-[11px] font-label uppercase tracking-[0.1em]">
                  {pair.fg} on {pair.bg}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-navy/10">
            <p className="text-navy/55 text-[13px] leading-relaxed font-sans max-w-lg">
              <strong className="text-navy font-sans">Note:</strong> Fog (#85A3C8)
              does not meet WCAG contrast requirements for text on white backgrounds.
              Use Fog only for decorative fills, large background areas, or non-text
              elements.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function TabButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative px-5 md:px-6 py-3 md:py-3.5 transition-colors duration-200"
      style={{
        color: active ? "#0f1c2e" : "rgba(15,28,46,0.5)",
        fontFamily: "var(--sans)",
        fontWeight: 500,
        fontSize: "14px",
        letterSpacing: "-0.005em",
        border: "1px solid rgba(15,28,46,0.18)",
        marginRight: -1,
        backgroundColor: "transparent",
      }}
    >
      {label}
      {/* Active underline lip — sits on bottom border */}
      <span
        aria-hidden
        className="absolute left-[-1px] right-[-1px] -bottom-px h-[2px] transition-transform duration-300 origin-left"
        style={{
          backgroundColor: "#0f1c2e",
          transform: active ? "scaleX(1)" : "scaleX(0)",
        }}
      />
    </button>
  );
}
