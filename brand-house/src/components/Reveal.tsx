"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal wrapper. Fades + rises the child when it enters viewport.
 * - Editorial feel: 0.75s ease-out, 20px translate, subtle.
 * - Respects prefers-reduced-motion.
 * - Stagger: pass `delay={n}` (ms) to sequence multiple reveals.
 * - Once only: element stays revealed after first entry (no re-trigger).
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  style,
  threshold = 0.12,
  y = 20,
}: {
  children: React.ReactNode;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  threshold?: number;
  y?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
  }, []);

  useEffect(() => {
    if (reduced) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, reduced]);

  const baseStyle: React.CSSProperties = {
    opacity: shown ? 1 : 0,
    transform: shown ? "translate3d(0,0,0)" : `translate3d(0,${y}px,0)`,
    transition: `opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
    willChange: "opacity, transform",
    ...(style || {}),
  };

  const Component = Tag as React.ElementType;
  return (
    <Component
      ref={ref as never}
      className={className}
      style={baseStyle}
    >
      {children}
    </Component>
  );
}
