import Link from "next/link";

/*
  Flat cards with sharp corners — no rounded edges, no shadows.
  Background color contrast defines card edges.
  Matches the "Real Clients, Real Results" cards in the aesthetic spec.
*/

interface Props {
  chapters: { title: string; description: string; href: string }[];
}

export default function FlatCards({ chapters }: Props) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "1px",
      background: "rgba(0,0,0,0.06)",
      border: "1px solid rgba(0,0,0,0.06)",
    }}>
      {chapters.map((ch, i) => (
        <Link
          key={ch.title}
          href={ch.href}
          style={{
            display: "block",
            background: "#fff",
            padding: "32px 28px",
            textDecoration: "none",
            transition: "background 0.2s ease",
          }}
        >
          <span style={{
            fontFamily: "var(--mono)",
            fontSize: "0.55rem",
            letterSpacing: "0.15em",
            color: "var(--text-tertiary)",
          }}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 style={{
            fontFamily: "var(--sans)",
            fontSize: "1.25rem",
            color: "var(--navy)",
            marginTop: "16px",
            marginBottom: "10px",
            letterSpacing: "-0.01em",
          }}>
            {ch.title}
          </h3>
          <p style={{
            fontFamily: "var(--sans)",
            fontSize: "0.85rem",
            color: "var(--text-secondary)",
            lineHeight: 1.5,
            fontWeight: 400,
          }}>
            {ch.description}
          </p>
          <span style={{
            display: "inline-block",
            marginTop: "20px",
            fontFamily: "var(--sans-label)",
            fontSize: "0.6rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--royal)",
            fontWeight: 500,
          }}>
            Explore &rarr;
          </span>
        </Link>
      ))}
    </div>
  );
}
