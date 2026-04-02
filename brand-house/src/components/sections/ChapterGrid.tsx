"use client";

import { useEffect, useRef } from "react";
import type { ChapterConfig } from "@/lib/section-types";

/*
  Matches the EXACT output of Chapter-Builder.html
  - CSS grid with repeat(cols, 1fr)
  - Card entrance via opacity + transform transitions
  - Stagger via IntersectionObserver with setTimeout per card index
  - Inline SVG icons from the proven icon set
*/

/* ─── Icon SVG paths (from Chapter-Builder.html) ─── */
const ICONS: Record<string, string> = {
  layers: `<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>`,
  palette: `<circle cx="12" cy="12" r="10"/><circle cx="8" cy="14" r="1.5" fill="currentColor"/><circle cx="12" cy="9" r="1.5" fill="currentColor"/><circle cx="16" cy="14" r="1.5" fill="currentColor"/><path d="M12 2a10 10 0 00-8.95 14.45C4 18 5.5 18 6 16.5c.5-1.5 2-2.5 4-2.5h4c2 0 4-1 4-3a6 6 0 00-6-9z"/>`,
  type: `<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>`,
  shield: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
  'message-square': `<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>`,
  grid: `<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>`,
  star: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`,
  calendar: `<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>`,
  'file-text': `<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>`,
  users: `<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>`,
  zap: `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`,
  award: `<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.89"/>`,
  book: `<path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M4 19.5V4a2 2 0 012-2h13v16"/>`,
  link: `<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>`,
  'bar-chart': `<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>`,
  globe: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>`,
  rocket: `<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>`,
  megaphone: `<path d="M18 8a5 5 0 010 8"/><path d="M22 6a9 9 0 010 12"/><path d="M11 5L6 9H2v6h4l5 4V5z"/>`,
  image: `<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>`,
  mic: `<path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>`,
  layout: `<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>`,
};

function IconSVG({ name, size = 22, color = "currentColor" }: { name: string; size?: number; color?: string }) {
  const path = ICONS[name] || ICONS.star;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: path }}
    />
  );
}

function isDark(color: string): boolean {
  if (color.startsWith('rgba')) {
    const m = color.match(/rgba\((\d+)/);
    return m ? parseInt(m[1]) < 128 : false;
  }
  if (!color.startsWith('#')) return false;
  const hex = color.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return (r * 0.299 + g * 0.587 + b * 0.114) < 128;
}

interface Props {
  config: ChapterConfig;
}

export default function ChapterGrid({ config }: Props) {
  const {
    cards, cols, gap, padding,
    bgColor, cardBgColor, cardRadius,
    iconColor, textColor,
    headerText, headerStyle,
    animEnabled, animStagger,
  } = config;

  const sectionRef = useRef<HTMLElement>(null);

  const sectionDark = isDark(bgColor);
  const cardEffDark = cardBgColor === 'transparent' ||
    (cardBgColor.startsWith('rgba') && parseFloat(cardBgColor.match(/[\d.]+\)$/)?.[0] || '1') < 0.2)
    ? sectionDark : isDark(cardBgColor);

  const headerTitleColor = sectionDark ? '#e8e8e8' : '#1a1a1a';
  const cardTitleColor = textColor || (cardEffDark ? '#e8e8e8' : '#1a1a1a');
  const cardDescColor = cardEffDark ? '#aaa' : '#555';

  const gridBorder = gap > 0 ? `1px solid ${sectionDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}` : 'none';
  const cardBorder = gap > 0 ? `1px solid ${sectionDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}` : 'none';

  useEffect(() => {
    if (!animEnabled || !sectionRef.current) return;
    const cardEls = sectionRef.current.querySelectorAll<HTMLElement>('.cg-card[data-cg-idx]');
    if (!cardEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = parseInt(e.target.getAttribute('data-cg-idx') || '0');
            setTimeout(() => {
              (e.target as HTMLElement).classList.add('cg-in');
            }, idx * animStagger);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    cardEls.forEach(c => observer.observe(c));
    return () => observer.disconnect();
  }, [animEnabled, animStagger]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .cg-card[data-cg-idx] { opacity: 0; transform: translateY(20px); }
        .cg-card[data-cg-idx].cg-in { opacity: 1; transform: translateY(0); transition: opacity 500ms ease, transform 500ms ease; }
        .cg-card:hover { filter: brightness(0.97); }
      `}} />
      <section
        ref={sectionRef}
        className="cg-section"
        style={{
          background: bgColor,
          padding: "48px 40px",
          fontFamily: "var(--sans, 'DM Sans', system-ui, sans-serif)",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {/* Header */}
          {headerStyle !== 'hidden' && headerText && (
            <div style={{ marginBottom: "32px" }}>
              <div style={{ width: "100%", height: "1px", background: sectionDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)', marginBottom: "20px" }} />
              <h2 style={{
                fontSize: headerStyle === 'mono-upper' ? '0.7rem' : '1.5rem',
                fontWeight: headerStyle === 'mono-upper' ? 600 : 700,
                letterSpacing: headerStyle === 'mono-upper' ? '0.18em' : '-0.02em',
                textTransform: headerStyle === 'mono-upper' ? 'uppercase' : 'none',
                fontFamily: headerStyle === 'mono-upper' ? 'var(--mono, monospace)' : 'var(--sans, system-ui, sans-serif)',
                color: headerTitleColor,
                marginBottom: "10px",
                lineHeight: 1.15,
              }}>
                {headerText}
              </h2>
            </div>
          )}

          {/* Grid */}
          <div style={{
            border: gridBorder,
            borderRadius: `${cardRadius}px`,
            overflow: "hidden",
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gap: 0,
            }}>
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="cg-card"
                  data-cg-idx={animEnabled ? idx : undefined}
                  style={{
                    background: cardBgColor,
                    padding: `${padding}px`,
                    borderRight: cardBorder,
                    borderBottom: cardBorder,
                    transition: "background 0.2s ease",
                  }}
                >
                  <div style={{ color: iconColor, marginBottom: "16px", display: "flex", alignItems: "center" }}>
                    <IconSVG name={card.icon} size={22} color={iconColor} />
                  </div>
                  <div style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: cardTitleColor,
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "4px",
                  }}>
                    {card.title}
                    {card.tag && (
                      <span style={{
                        display: "inline-block",
                        fontSize: "0.55rem",
                        fontWeight: 700,
                        padding: "1px 6px",
                        borderRadius: "3px",
                        background: `${iconColor}22`,
                        color: iconColor,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}>
                        {card.tag}
                      </span>
                    )}
                  </div>
                  <div style={{
                    fontSize: "0.9rem",
                    color: cardDescColor,
                    lineHeight: 1.65,
                  }}>
                    {card.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
