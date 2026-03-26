"use client";

/*
  Full-width color block band — a single horizontal stripe of color
  with centered content. Used for accent transitions between sections.
*/

interface Props {
  bg: string;
  children: React.ReactNode;
  minHeight?: string;
}

export default function ColorBlockBand({ bg, children, minHeight = "auto" }: Props) {
  return (
    <section style={{
      background: bg,
      minHeight,
      padding: "clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {children}
    </section>
  );
}
