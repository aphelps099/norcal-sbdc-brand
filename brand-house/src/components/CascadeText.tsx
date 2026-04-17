"use client";

import { ReactNode } from "react";

/**
 * Splits a string into per-word <span>s with class `cascade-word` and an
 * initial opacity:0 / translateY(22px) inline style. Whitespace is preserved.
 *
 * Paired with GSAP: gsap.to(".cascade-word", { opacity: 1, y: 0, stagger: 0.028 })
 * Use the same scope parent (e.g. gsap.context scoped to rootRef) so the
 * selector doesn't leak across heroes on the page.
 *
 * initialY lets you match the motion language of the enclosing type size
 * (bigger type → larger y offset feels natural).
 */
export function cascadeWords(
  text: string,
  opts?: { initialY?: number; className?: string }
): ReactNode[] {
  const y = opts?.initialY ?? 22;
  const extraClass = opts?.className ?? "";
  const out: ReactNode[] = [];
  const parts = text.split(/(\s+)/);
  parts.forEach((p, i) => {
    if (p.length === 0) return;
    if (/^\s+$/.test(p)) {
      out.push(<span key={`s-${i}`}>{p}</span>);
    } else {
      out.push(
        <span
          key={`w-${i}`}
          className={`cascade-word ${extraClass}`.trim()}
          style={{
            display: "inline-block",
            opacity: 0,
            transform: `translateY(${y}px)`,
            willChange: "opacity, transform",
          }}
        >
          {p}
        </span>
      );
    }
  });
  return out;
}
