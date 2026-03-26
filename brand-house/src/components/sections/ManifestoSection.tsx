"use client";

import { useEffect, useRef, useMemo } from "react";
import type { ManifestoConfig } from "@/lib/section-types";

/*
  Matches the EXACT output of Manifesto-Builder.html
  - CSS custom properties for all configurable values
  - IntersectionObserver (threshold 0.2) for scroll-triggered animations
  - Word stagger via inline transitionDelay
  - Underlines via text-decoration or background-image gradient
  - Film grain via SVG data URI
*/

interface Props {
  config: ManifestoConfig;
}

function getEasingCSS(easing: string): string {
  switch (easing) {
    case 'ease-out': return 'cubic-bezier(0.16, 1, 0.3, 1)';
    case 'ease-in-out': return 'cubic-bezier(0.45, 0, 0.55, 1)';
    case 'ease-in': return 'cubic-bezier(0.55, 0, 1, 0.45)';
    default: return 'ease-out';
  }
}

function staggerWordsHTML(html: string): string {
  // Regex-based word wrapping that works on both server and client
  // Strip tags to get plain text, then wrap each word
  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = text.split(' ').filter(Boolean);
  return words.map(w => `<span class="manifesto-word">${w}</span>`).join(' ');
}

export default function ManifestoSection({ config }: Props) {
  const {
    editorHTML, eyebrow, subtitle,
    bgColor, textColor, accentColor,
    fontSize, lineHeight, letterSpacing, alignment,
    eyebrowStyle, maxWidth, fontFamily,
    paddingTop, paddingBottom,
    grainEnabled, grainOpacity,
    underlineWords, underlineStyle, underlineColor, underlineCustomColor,
    ulThickness, ulOffset, ulAnimate, ulSpeed,
    animType, animTrigger, staggerDelay, animDuration, easing,
  } = config;

  const sectionRef = useRef<HTMLElement>(null);
  const dur = animDuration / 1000;
  const easingCSS = getEasingCSS(easing);

  const resolvedUlColor = underlineColor === 'accent' ? accentColor
    : underlineColor === 'text' ? textColor
    : underlineCustomColor;

  // Process HTML: apply underlines to marked words
  const processedHTML = useMemo(() => {
    let html = editorHTML;

    // Apply underlines
    if (underlineWords.length > 0 && underlineStyle !== 'none') {
      underlineWords.forEach(word => {
        const regex = new RegExp(`(${word})`, 'gi');
        html = html.replace(regex, `<span class="manifesto-ul">$1</span>`);
      });
    }

    // Wrap words for stagger animation
    if (animType === 'stagger-words') {
      html = staggerWordsHTML(html);
    }

    return html;
  }, [editorHTML, underlineWords, underlineStyle, animType]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const textEl = el.querySelector<HTMLElement>('.manifesto-text');
    if (!textEl) return;

    if (animType === 'stagger-words') {
      const words = textEl.querySelectorAll<HTMLElement>('.manifesto-word');
      words.forEach((w, i) => {
        w.style.transitionDelay = `${i * staggerDelay}ms`;
      });
    }

    if (animTrigger === 'on-scroll' && animType !== 'none') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              if (animType === 'stagger-words') {
                textEl.classList.add('is-visible');
              } else {
                textEl.style.animationPlayState = 'running';
              }
              observer.disconnect();
            }
          });
        },
        { threshold: 0.2 }
      );
      if (animType !== 'stagger-words') {
        textEl.style.animationPlayState = 'paused';
      }
      observer.observe(textEl);
      return () => observer.disconnect();
    } else if (animType === 'stagger-words' && animTrigger === 'on-load') {
      setTimeout(() => textEl.classList.add('is-visible'), 100);
    }
  }, [animType, animTrigger, staggerDelay]);

  // Underline styles
  let underlineCSSBlock = '';
  if (underlineStyle === 'solid' || underlineStyle === 'dashed') {
    underlineCSSBlock = `.manifesto-ul { text-decoration: underline ${underlineStyle}; text-decoration-color: ${resolvedUlColor}; text-underline-offset: ${ulOffset}; text-decoration-thickness: ${ulThickness}; }`;
  } else if (underlineStyle === 'gradient') {
    underlineCSSBlock = `.manifesto-ul { background-image: linear-gradient(90deg, ${resolvedUlColor}, ${accentColor}, ${resolvedUlColor}); background-size: 200% ${ulThickness}; background-position: 0 calc(100% - 2px); background-repeat: no-repeat; ${ulAnimate ? `animation: gradientUnderlineAnim ${ulSpeed}s linear infinite;` : ''} }`;
  }

  // Animation CSS
  let animCSS = '';
  if (animType === 'fade-up') {
    animCSS = `@keyframes manifestoFadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }`;
  } else if (animType === 'snap-scale') {
    animCSS = `@keyframes manifestoSnap { from { opacity:0; transform:scale(0.92); } to { opacity:1; transform:scale(1); } }`;
  }

  // Stagger CSS
  const staggerCSS = animType === 'stagger-words'
    ? `.manifesto-word { display: inline-block; opacity: 0; transform: translateY(12px); transition: opacity ${dur}s ${easingCSS}, transform ${dur}s ${easingCSS}; } .manifesto-text.is-visible .manifesto-word { opacity: 1; transform: translateY(0); }`
    : '';

  // Grain CSS
  const grainCSSBlock = grainEnabled
    ? `.manifesto-section::before { content:''; position:absolute; inset:0; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E"); opacity:${grainOpacity / 100}; pointer-events:none; }`
    : '';

  // Eyebrow style
  const eyebrowCSS = eyebrowStyle === 'mono-upper'
    ? { fontFamily: 'var(--mono, monospace)', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.18em' }
    : { fontFamily: 'var(--sans, sans-serif)', fontWeight: 300, textTransform: 'none' as const, letterSpacing: '0.04em' };

  const textAnimStyle: React.CSSProperties = {};
  if (animType === 'fade-up') {
    textAnimStyle.opacity = 0;
    textAnimStyle.animation = `manifestoFadeUp ${dur}s ${easingCSS} forwards`;
  } else if (animType === 'snap-scale') {
    textAnimStyle.opacity = 0;
    textAnimStyle.animation = `manifestoSnap ${dur}s ${easingCSS} forwards`;
  }

  const fontFam = fontFamily === 'serif'
    ? "var(--serif, 'Newsreader', Georgia, serif)"
    : "var(--sans, system-ui, sans-serif)";

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        ${animCSS}
        ${staggerCSS}
        ${underlineCSSBlock}
        ${grainCSSBlock}
        @keyframes gradientUnderlineAnim { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
        @media (max-width: 768px) {
          .manifesto-section { padding: 50px 24px !important; }
          .manifesto-text { font-size: clamp(1.6rem, 5vw, ${fontSize}px) !important; }
        }
      `}} />
      <section
        ref={sectionRef}
        className="manifesto-section"
        style={{
          background: bgColor,
          color: textColor,
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: alignment === 'center' ? 'center' : 'flex-start',
          justifyContent: "center",
          padding: `${paddingTop}px 60px ${paddingBottom}px`,
          textAlign: alignment,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Eyebrow */}
        {eyebrowStyle !== 'hidden' && eyebrow && (
          <p
            className="manifesto-eyebrow"
            style={{
              fontSize: "0.75rem",
              opacity: 0.7,
              marginBottom: "28px",
              ...eyebrowCSS,
            }}
          >
            {eyebrow}
          </p>
        )}

        {/* Main text */}
        <div
          className="manifesto-text"
          style={{
            fontFamily: fontFam,
            fontSize: `${fontSize}px`,
            lineHeight,
            letterSpacing: `${letterSpacing}em`,
            maxWidth,
            color: textColor,
            ...textAnimStyle,
          }}
          dangerouslySetInnerHTML={{ __html: processedHTML }}
        />

        {/* Subtitle */}
        {subtitle && (
          <p
            className="manifesto-subtitle"
            style={{
              fontSize: "1rem",
              marginTop: "32px",
              opacity: 0.6,
              maxWidth: "600px",
            }}
          >
            {subtitle}
          </p>
        )}
      </section>
    </>
  );
}
