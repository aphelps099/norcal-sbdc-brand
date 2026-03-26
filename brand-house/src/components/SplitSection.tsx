"use client";

/*
  Asymmetric 50/50 color-block split section.
  Two side-by-side panels, each with its own bg color, eyebrow, heading, body.
  Optional CTA button (pill-shaped, solid coral/white).
*/

interface PanelConfig {
  bg: string;
  eyebrow: string;
  heading: string;
  body: string;
  cta?: { label: string; href: string };
}

interface Props {
  left: PanelConfig;
  right: PanelConfig;
}

function isDark(bg: string): boolean {
  return bg.includes("navy") || bg.includes("royal") || bg.includes("#0") || bg.includes("#1") || bg.includes("coral");
}

function Panel({ config }: { config: PanelConfig }) {
  const dark = isDark(config.bg);
  const textColor = dark ? "#fff" : "var(--navy)";
  const mutedColor = dark ? "rgba(255,255,255,0.4)" : "var(--text-tertiary)";
  const bodyColor = dark ? "rgba(255,255,255,0.7)" : "var(--text-secondary)";

  return (
    <div style={{
      background: config.bg,
      padding: "clamp(48px, 6vw, 80px) clamp(32px, 5vw, 64px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      minHeight: "340px",
    }}>
      <p style={{
        fontFamily: "var(--mono)",
        fontSize: "0.6rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: mutedColor,
        marginBottom: "20px",
      }}>
        {config.eyebrow}
      </p>
      <h3 style={{
        fontFamily: "var(--serif)",
        fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
        lineHeight: 1.1,
        letterSpacing: "-0.02em",
        color: textColor,
        marginBottom: "16px",
      }}>
        {config.heading}
      </h3>
      <p style={{
        fontFamily: "var(--sans)",
        fontSize: "0.95rem",
        lineHeight: 1.6,
        color: bodyColor,
        maxWidth: "400px",
      }}>
        {config.body}
      </p>
      {config.cta && (
        <a
          href={config.cta.href}
          style={{
            display: "inline-block",
            marginTop: "28px",
            padding: "14px 36px",
            background: dark ? "#fff" : "var(--coral)",
            color: dark ? "var(--navy)" : "#fff",
            fontFamily: "var(--sans)",
            fontSize: "0.7rem",
            fontWeight: 800,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: "999px",
          }}
        >
          {config.cta.label}
        </a>
      )}
    </div>
  );
}

export default function SplitSection({ left, right }: Props) {
  return (
    <section style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    }}>
      <Panel config={left} />
      <Panel config={right} />
    </section>
  );
}
