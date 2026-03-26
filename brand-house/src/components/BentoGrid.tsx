"use client";

/*
  Bento box / modular grid with duotone color overlays.
  Dark navy background, strict geometric tiles with
  blue/coral/navy color-treated image slots.
*/

const bentoItems = [
  { span: "col-span-2 row-span-2", overlay: "var(--royal)", label: "Brand Story", sub: "Our mission and history" },
  { span: "col-span-1 row-span-1", overlay: "var(--coral)", label: "Logos", sub: "Marks & assets" },
  { span: "col-span-1 row-span-1", overlay: "var(--navy)", label: "Colors", sub: "Palette system" },
  { span: "col-span-1 row-span-2", overlay: "var(--coral)", label: "Voice", sub: "Tone & messaging" },
  { span: "col-span-1 row-span-1", overlay: "var(--royal)", label: "Typography", sub: "Type specimens" },
  { span: "col-span-1 row-span-1", overlay: "var(--navy)", label: "Templates", sub: "Decks & kits" },
  { span: "col-span-2 row-span-1", overlay: "var(--royal)", label: "Success Stories", sub: "Client spotlights and impact metrics" },
  { span: "col-span-1 row-span-1", overlay: "var(--coral)", label: "Campaigns", sub: "SBDC Day toolkit" },
];

export default function BentoGrid() {
  return (
    <section style={{
      background: "var(--navy)",
      padding: "clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "40px",
        }}>
          <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.06)" }} />
          <span style={{
            fontFamily: "var(--mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
          }}>
            Folio
          </span>
          <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.06)" }} />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridAutoRows: "160px",
          gap: "2px",
        }}>
          {bentoItems.map((item, i) => (
            <div
              key={i}
              className={item.span}
              style={{
                background: item.overlay,
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "clamp(16px, 2vw, 28px)",
              }}
            >
              <p style={{
                fontFamily: "var(--sans)",
                fontSize: "0.75rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#fff",
              }}>
                {item.label}
              </p>
              <p style={{
                fontFamily: "var(--sans)",
                fontSize: "0.7rem",
                color: "rgba(255,255,255,0.5)",
                marginTop: "4px",
              }}>
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
