"use client";

import { useState, useRef, useEffect } from "react";
import { MONTHS, BG_STYLES, type SocialCard, type RowLayout } from "@/lib/social-content";

/* ── Card renderer (shared across all layouts) ── */
function Card({
  card,
  className = "",
  style = {},
  large = false,
}: {
  card: SocialCard;
  className?: string;
  style?: React.CSSProperties;
  large?: boolean;
}) {
  const s = BG_STYLES[card.bg];
  return (
    <div
      className={`relative flex flex-col justify-between rounded-lg ${className}`}
      style={{
        backgroundColor: s.bg,
        border: card.bg === "white" ? "1px solid rgba(0,0,0,0.06)" : "none",
        ...style,
      }}
    >
      {/* Label */}
      {card.label && (
        <p
          className="font-label text-[9px] uppercase tracking-[0.12em] mb-auto"
          style={{ color: s.muted }}
        >
          {card.label}
        </p>
      )}

      {/* Content */}
      <div className={card.label ? "mt-auto" : ""}>
        {card.stat && (
          <p
            className="font-sans leading-none mb-1"
            style={{
              color: s.text,
              fontSize: large ? "clamp(36px, 5vw, 60px)" : "clamp(28px, 3.5vw, 44px)",
              fontWeight: 500,
            }}
          >
            {card.stat}
          </p>
        )}
        <p
          className="font-sans leading-snug"
          style={{
            color: s.text,
            fontSize: card.quote
              ? large ? "clamp(16px, 2vw, 22px)" : "clamp(13px, 1.4vw, 16px)"
              : large ? "clamp(18px, 2.2vw, 26px)" : "clamp(14px, 1.6vw, 18px)",
            fontWeight: card.quote ? 400 : 500,
            fontStyle: card.quote ? "italic" : "normal",
          }}
        >
          {card.headline}
        </p>
        {card.attribution && (
          <p className="font-sans text-[11px] mt-2" style={{ color: s.muted }}>
            — {card.attribution}
          </p>
        )}
        {card.body && (
          <p
            className={`font-sans leading-relaxed mt-2 whitespace-pre-line ${large ? "text-[13px] md:text-[14px]" : "text-[12px]"}`}
            style={{ color: s.muted }}
          >
            {card.body}
          </p>
        )}
      </div>

      {/* CTA */}
      {card.cta && (
        <p
          className={`font-sans mt-3 ${large ? "text-[12px] md:text-[13px]" : "text-[11px]"}`}
          style={{ color: s.cta, fontWeight: 500 }}
        >
          {card.cta}
        </p>
      )}
    </div>
  );
}

/* ── Row renderers ── */
function Grid4Row({ cards }: { cards: SocialCard[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {cards.map((card, i) => (
        <Card key={i} card={card} className="p-5 md:p-6" style={{ aspectRatio: "1 / 1" }} />
      ))}
    </div>
  );
}

function FeatureRow({ hero, cards }: { hero: SocialCard; cards: SocialCard[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[auto] md:grid-rows-2 gap-2">
      {/* Hero: tall left, spans 2 rows on desktop */}
      <Card
        card={hero}
        large
        className="col-span-2 md:row-span-2 p-6 md:p-8"
        style={{ aspectRatio: undefined, minHeight: "280px" }}
      />
      {/* 4 small cards fill 2x2 on right */}
      {cards.map((card, i) => (
        <Card key={i} card={card} className="p-5 md:p-6" style={{ aspectRatio: "1 / 1" }} />
      ))}
    </div>
  );
}

function BillboardRow({ card }: { card: SocialCard }) {
  const s = BG_STYLES[card.bg];
  return (
    <div
      className="rounded-lg p-8 md:p-12 flex flex-col justify-center"
      style={{
        backgroundColor: s.bg,
        border: card.bg === "white" ? "1px solid rgba(0,0,0,0.06)" : "none",
        minHeight: "200px",
      }}
    >
      {card.label && (
        <p
          className="font-label text-[10px] uppercase tracking-[0.14em] mb-4"
          style={{ color: s.muted }}
        >
          {card.label}
        </p>
      )}
      <div className="max-w-2xl">
        {card.stat && (
          <p
            className="font-sans leading-none mb-2"
            style={{ color: s.text, fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 500 }}
          >
            {card.stat}
          </p>
        )}
        <p
          className="font-sans leading-snug mb-3"
          style={{
            color: s.text,
            fontSize: "clamp(20px, 3vw, 32px)",
            fontWeight: 500,
          }}
        >
          {card.headline}
        </p>
        {card.body && (
          <p
            className="font-sans text-sm md:text-base leading-relaxed whitespace-pre-line"
            style={{ color: s.muted }}
          >
            {card.body}
          </p>
        )}
        {card.cta && (
          <p className="font-sans text-sm mt-4" style={{ color: s.cta, fontWeight: 500 }}>
            {card.cta}
          </p>
        )}
      </div>
    </div>
  );
}

function RowRenderer({ row }: { row: RowLayout }) {
  switch (row.type) {
    case "grid4":
      return <Grid4Row cards={row.cards} />;
    case "feature":
      return <FeatureRow hero={row.hero} cards={row.cards} />;
    case "billboard":
      return <BillboardRow card={row.card} />;
  }
}

/* ── Main SocialWall component ── */
export default function SocialWall() {
  const [selectedMonth, setSelectedMonth] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  // Scroll active tab into view on change
  useEffect(() => {
    if (!tabsRef.current) return;
    const activeBtn = tabsRef.current.children[selectedMonth] as HTMLElement | undefined;
    activeBtn?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [selectedMonth]);

  const month = MONTHS[selectedMonth];

  return (
    <div className="py-14 md:py-20" style={{ backgroundColor: "#f5f4f0" }}>
      <div className="max-w-[1200px] mx-auto px-8 md:px-12">
        {/* Header */}
        <div className="max-w-[780px] mb-8">
          <h2
            className="font-sans text-navy tracking-[-0.02em] mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 500 }}
          >
            Sample Social Content
          </h2>
          <p className="font-sans text-base text-text-secondary leading-relaxed max-w-xl">
            Ready-to-adapt branded posts organized by month. Customize for your
            center, audience, and local events.
          </p>
        </div>

        {/* ── M3 Tab Bar ── */}
        <div className="relative mb-10">
          <div
            ref={tabsRef}
            className="flex overflow-x-auto no-scrollbar -mb-[1px]"
          >
            {MONTHS.map((m, i) => {
              const isActive = selectedMonth === i;
              return (
                <button
                  key={m.shortName}
                  onClick={() => setSelectedMonth(i)}
                  className={`group relative px-4 md:px-5 py-3.5 text-[13px] md:text-[14px] font-sans whitespace-nowrap transition-colors duration-200 ${
                    isActive
                      ? "text-royal"
                      : "text-navy/45 hover:text-navy/75 hover:bg-navy/[0.03]"
                  }`}
                  style={{ fontWeight: 500 }}
                >
                  {m.shortName}

                  {/* Active indicator */}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-[3px] rounded-full transition-all duration-300 ease-out ${
                      isActive
                        ? "bg-royal scale-x-100"
                        : "bg-transparent scale-x-0 group-hover:bg-navy/15 group-hover:scale-x-100"
                    }`}
                  />

                  {/* Hover bg */}
                  <span
                    className={`absolute inset-x-1 inset-y-0.5 rounded-lg transition-colors duration-200 -z-10 ${
                      isActive ? "bg-royal/[0.06]" : "group-hover:bg-navy/[0.03]"
                    }`}
                  />
                </button>
              );
            })}
          </div>
          {/* Track line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-navy/8" />
        </div>

        {/* ── Month theme label ── */}
        <p className="font-label text-[10px] uppercase tracking-[0.14em] text-navy/30 mb-6">
          {month.name} &mdash; {month.theme}
        </p>

        {/* ── Content rows ── */}
        <div className="space-y-2">
          {month.rows.map((row, i) => (
            <RowRenderer key={`${month.shortName}-${i}`} row={row} />
          ))}
        </div>
      </div>
    </div>
  );
}
