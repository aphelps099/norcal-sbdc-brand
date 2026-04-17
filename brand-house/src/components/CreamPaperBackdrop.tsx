/**
 * CreamPaperBackdrop
 * ──────────────────
 * A fixed-to-viewport, six-layer backdrop that gives a digital page the feel
 * of fine paper under diffused overhead light. Does not scroll, does not
 * animate. Sits behind all content via a negative z-index.
 *
 * Layers (bottom → top):
 *   A. Base cream fill (solid fallback)
 *   B. Top-weighted warmth gradient, resolving into pure cream by mid-page
 *   C. Top-center soft highlight (ambient light)
 *   D. Top-weighted vignette (subtle framing)
 *   E. Paper fiber — coarse substrate noise
 *   F. Film grain — fine digital noise
 *
 * Usage:
 *   <CreamPaperBackdrop />
 *   // ...rest of page content.
 *
 * For any non-cream section (navy/steel/etc.), wrap with:
 *   <section style={{ position: "relative", zIndex: 1, background: "#0f1c2e" }}>
 * so the grain/warmth stops at that section's edge.
 */
export default function CreamPaperBackdrop() {
  return (
    <>
      <style jsx>{`
        .cpb-stack {
          position: fixed;
          inset: 0;
          z-index: -10;
          pointer-events: none;
          overflow: hidden;
        }

        /* A — Base cream */
        .cpb-base {
          position: absolute;
          inset: 0;
          background: #f5f4f0;
        }

        /* B — Top-weighted warmth resolving into cream */
        .cpb-warmth {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            #fcf9f1 0%,
            #f8f6f0 20%,
            #f5f4f0 55%,
            #f5f4f0 100%
          );
        }

        /* C — Top-center soft highlight */
        .cpb-highlight {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 80% 50% at 50% -10%,
            rgba(255, 247, 230, 0.5) 0%,
            rgba(255, 247, 230, 0.2) 30%,
            transparent 60%
          );
          mix-blend-mode: soft-light;
        }

        /* D — Top-weighted vignette */
        .cpb-vignette {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              rgba(15, 28, 46, 0.04) 0%,
              transparent 25%,
              transparent 100%
            ),
            radial-gradient(
              ellipse 120% 80% at 50% 30%,
              transparent 55%,
              rgba(15, 28, 46, 0.025) 85%,
              rgba(15, 28, 46, 0.04) 100%
            );
        }

        /* E — Paper fiber (coarse noise) */
        .cpb-fiber {
          position: absolute;
          inset: 0;
          opacity: 0.12;
          mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'><filter id='f'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch' seed='4'/><feColorMatrix values='0 0 0 0 0.08 0 0 0 0 0.13 0 0 0 0 0.18 0 0 0 0.35 0'/></filter><rect width='100%25' height='100%25' filter='url(%23f)'/></svg>");
          background-size: 400px 400px;
          background-repeat: repeat;
        }

        /* F — Film grain (fine noise) */
        .cpb-grain {
          position: absolute;
          inset: 0;
          opacity: 0.18;
          mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='2.2' numOctaves='2' stitchTiles='stitch' seed='8'/><feColorMatrix values='0 0 0 0 0.06 0 0 0 0 0.11 0 0 0 0 0.18 0 0 0 0.28 0'/></filter><rect width='100%25' height='100%25' filter='url(%23g)'/></svg>");
          background-size: 120px 120px;
          background-repeat: repeat;
        }
      `}</style>

      <div className="cpb-stack" aria-hidden="true">
        <div className="cpb-base" />
        <div className="cpb-warmth" />
        <div className="cpb-highlight" />
        <div className="cpb-vignette" />
        <div className="cpb-fiber" />
        <div className="cpb-grain" />
      </div>
    </>
  );
}
