
import InteriorHero from "@/components/InteriorHero";
import NextSectionLink from "@/components/NextSectionLink";
import SbdcWatermark from "@/components/SbdcWatermark";

export default function TypographyPage() {
  return (
    <>
      <InteriorHero
        bg="#0f1c2e"
        title="Typography"
        subtitle="Two typefaces — Proxima Nova for authority, Roboto Mono for precision."
      />

      {/* ── Specimens ── */}
      <div className="bg-cream py-16 md:py-24 overflow-hidden">
        <div className="max-w-[960px] mx-auto px-8 md:px-12">

          {/* Proxima Nova specimen */}
          <div className="mb-20 md:mb-28">
            <div className="w-8 h-[2px] bg-[#c4543a] mb-5" />
            <p className="font-label text-[10px] uppercase tracking-[0.1em] text-navy/30 mb-2">
              Primary Typeface — 01
            </p>

            {/* Giant specimen name */}
            <p
              className="text-navy tracking-[-0.04em] leading-[0.95] mb-1"
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 500,
                fontSize: "clamp(52px, 9vw, 120px)",
              }}
            >
              Proxima
            </p>
            <p
              className="text-navy/20 tracking-[-0.04em] leading-[0.95]"
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 500,
                fontSize: "clamp(52px, 9vw, 120px)",
              }}
            >
              Nova
            </p>

            {/* Metadata row */}
            <div className="mt-8 pt-5 border-t border-navy/[0.07] grid grid-cols-[1fr_1fr_1fr] gap-4 max-w-[640px]">
              {[
                { label: "Weight", val: "Medium 500" },
                { label: "Usage", val: "Headings, body, display" },
                { label: "Tracking", val: "−0.02em to −0.04em" },
              ].map((m) => (
                <div key={m.label}>
                  <p className="font-label text-[9px] uppercase tracking-[0.08em] text-navy/25 mb-1">{m.label}</p>
                  <p className="font-sans text-navy/60 text-[12px]">{m.val}</p>
                </div>
              ))}
            </div>

            {/* Alphabet */}
            <div className="mt-10">
              <p
                className="text-navy/50 leading-[1.65] mb-2"
                style={{
                  fontFamily: "var(--sans)",
                  fontWeight: 500,
                  fontSize: "clamp(16px, 2vw, 22px)",
                  letterSpacing: "-0.01em",
                }}
              >
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
              </p>
              <p
                className="text-navy/25 leading-[1.65]"
                style={{
                  fontFamily: "var(--sans)",
                  fontWeight: 500,
                  fontSize: "clamp(16px, 2vw, 22px)",
                  letterSpacing: "-0.01em",
                }}
              >
                0 1 2 3 4 5 6 7 8 9 &nbsp; ! @ # $ % & * ( ) — , . / ?
              </p>
            </div>
          </div>

          {/* Roboto Mono specimen */}
          <div>
            <div className="w-8 h-[2px] bg-[#c4543a] mb-5" />
            <p className="font-label text-[10px] uppercase tracking-[0.1em] text-navy/30 mb-2">
              Secondary Typeface — 02
            </p>

            <p
              className="text-navy uppercase leading-[1.0] mb-1"
              style={{
                fontFamily: "var(--sans-label)",
                fontWeight: 400,
                fontSize: "clamp(28px, 4.5vw, 64px)",
                letterSpacing: "0.10em",
              }}
            >
              ROBOTO
            </p>
            <p
              className="text-navy/20 uppercase leading-[1.0]"
              style={{
                fontFamily: "var(--sans-label)",
                fontWeight: 400,
                fontSize: "clamp(28px, 4.5vw, 64px)",
                letterSpacing: "0.10em",
              }}
            >
              MONO
            </p>

            {/* Metadata row */}
            <div className="mt-8 pt-5 border-t border-navy/[0.07] grid grid-cols-[1fr_1fr_1fr] gap-4 max-w-[640px]">
              {[
                { label: "Weight", val: "Regular 400" },
                { label: "Usage", val: "Labels, eyebrows, micro-copy" },
                { label: "Tracking", val: "+0.08em to +0.18em" },
              ].map((m) => (
                <div key={m.label}>
                  <p className="font-label text-[9px] uppercase tracking-[0.08em] text-navy/25 mb-1">{m.label}</p>
                  <p className="font-sans text-navy/60 text-[12px]">{m.val}</p>
                </div>
              ))}
            </div>

            {/* Alphabet */}
            <div className="mt-10">
              <p
                className="text-navy/50 leading-[1.9] mb-1 uppercase"
                style={{
                  fontFamily: "var(--sans-label)",
                  fontWeight: 400,
                  fontSize: "clamp(11px, 1.4vw, 16px)",
                  letterSpacing: "0.10em",
                }}
              >
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
              </p>
              <p
                className="text-navy/30 leading-[1.9]"
                style={{
                  fontFamily: "var(--sans-label)",
                  fontWeight: 400,
                  fontSize: "clamp(11px, 1.4vw, 16px)",
                  letterSpacing: "0.10em",
                }}
              >
                0 1 2 3 4 5 6 7 8 9 &nbsp; : ; . , / % $ —
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Type Scale ── dark, dramatic */}
      <div className="bg-[#0f1c2e] py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c4543a]" />
        <SbdcWatermark className="absolute -right-[6%] top-[6%] w-[38vw] max-w-[480px] text-white pointer-events-none select-none" opacity={0.03} />

        <div className="max-w-[780px] mx-auto px-8 md:px-12 relative z-10">
          <p className="font-label text-[10px] uppercase tracking-[0.1em] text-white/25 mb-2">Scale</p>
          <h2
            className="tracking-[-0.02em] text-white/90 mb-14"
            style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}
          >
            Type Scale
          </h2>

          {[
            {
              label: "Display",
              spec: "Proxima Nova 500 · 40–64px · −0.03em · lh 1.05",
              sample: "Your Business, Better.",
              font: "var(--sans)",
              weight: 500,
              size: "clamp(40px, 6vw, 64px)",
              tracking: "-0.03em",
              lh: "1.05",
              color: "rgba(255,255,255,0.90)",
            },
            {
              label: "H1",
              spec: "Proxima Nova 500 · 28–44px · −0.02em · lh 1.1",
              sample: "Meet Your Business People",
              font: "var(--sans)",
              weight: 500,
              size: "clamp(28px, 4vw, 44px)",
              tracking: "-0.02em",
              lh: "1.1",
              color: "rgba(255,255,255,0.85)",
            },
            {
              label: "H2",
              spec: "Proxima Nova 500 · 22–32px · −0.02em · lh 1.15",
              sample: "Capital Access Programs",
              font: "var(--sans)",
              weight: 500,
              size: "clamp(22px, 3vw, 32px)",
              tracking: "-0.02em",
              lh: "1.15",
              color: "rgba(255,255,255,0.80)",
            },
            {
              label: "Body",
              spec: "Proxima Nova 500 · 16–17px · −0.01em · lh 1.7",
              sample: "Since 1980, SBDC advisors have helped Northern California businesses raise $2.8B in capital, create 42,000+ jobs, and turn kitchen-table ideas into million-dollar companies.",
              font: "var(--sans)",
              weight: 500,
              size: "clamp(16px, 1.2vw, 17px)",
              tracking: "-0.01em",
              lh: "1.7",
              color: "rgba(255,255,255,0.55)",
            },
            {
              label: "Label",
              spec: "Roboto Mono 400 · 13px · +0.14em · lh 1.4",
              sample: "CAPITAL ACCESS · BUSINESS PLANNING · CRISIS RECOVERY",
              font: "var(--sans-label)",
              weight: 400,
              size: "13px",
              tracking: "0.14em",
              lh: "1.4",
              color: "rgba(255,255,255,0.45)",
            },
            {
              label: "Helper",
              spec: "Roboto Mono 400 · 11px · +0.02em · lh 1.5",
              sample: "Funded in part through a cooperative agreement with the US Small Business Administration.",
              font: "var(--sans-label)",
              weight: 400,
              size: "11px",
              tracking: "0.02em",
              lh: "1.5",
              color: "rgba(255,255,255,0.30)",
            },
          ].map((row, i) => (
            <div key={row.label} className={`grid grid-cols-[120px_1fr] gap-8 py-7 ${i < 5 ? "border-b border-white/[0.06]" : ""}`}>
              {/* Left: label + spec */}
              <div className="pt-1 shrink-0">
                <p className="font-label text-[10px] uppercase tracking-[0.08em] text-white/50 mb-2">{row.label}</p>
                <p className="font-label text-[9px] text-white/25 leading-relaxed" style={{ letterSpacing: "0.02em" }}>{row.spec}</p>
              </div>
              {/* Right: live specimen */}
              <div>
                <p
                  style={{
                    fontFamily: row.font,
                    fontWeight: row.weight,
                    fontSize: row.size,
                    letterSpacing: row.tracking,
                    lineHeight: row.lh,
                    color: row.color,
                    maxWidth: row.label === "Body" || row.label === "Helper" ? "600px" : undefined,
                  }}
                >
                  {row.sample}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Rules ── */}
      <div className="bg-[#0f1c2e] py-14 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c4543a]" />
        <SbdcWatermark className="absolute -right-[8%] top-[10%] w-[40vw] max-w-[500px] text-white pointer-events-none select-none" opacity={0.035} />
        <div className="max-w-[960px] mx-auto px-8 md:px-12">
          <p className="font-label text-[10px] uppercase tracking-[0.1em] text-white/25 mb-2">Rules</p>
          <h2
            className="tracking-[-0.02em] text-white/90 mb-8"
            style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}
          >
            Usage Guidelines
          </h2>

          {/* Rules prose */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mb-12">
            {[
              {
                num: "01",
                title: "Proxima Nova — primary",
                body: "Weight 500 across all headings, body copy, navigation, and display. Tight letter-spacing (−0.02em to −0.04em) for a confident, compressed presence.",
              },
              {
                num: "02",
                title: "Roboto Mono — labels only",
                body: "Regular 400 for eyebrows, helper text, footers, and UI micro-copy. Wide tracking (+0.08em to +0.18em) creates the precision contrast with Proxima Nova.",
              },
              {
                num: "03",
                title: "Two typefaces, no more",
                body: "Never introduce a third typeface. Proxima Nova + Roboto Mono is the complete pairing. Weight variation within Proxima Nova handles all hierarchy needs.",
              },
            ].map((r) => (
              <div key={r.num} className="bg-white/[0.04] p-6">
                <p className="font-label text-[9px] uppercase tracking-[0.08em] text-[#c4543a]/70 mb-3">{r.num}</p>
                <p className="font-sans text-white/80 text-[13px] mb-2" style={{ fontWeight: 500 }}>{r.title}</p>
                <p className="font-sans text-white/40 text-[13px] leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>

          {/* Do / Don't */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
            {/* Do */}
            <div className="bg-white/[0.04] p-6 md:p-8">
              <span className="inline-block font-label text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 mb-6 border border-[#4DB8AD]/30 text-[#4DB8AD]/80">
                Do
              </span>
              <div className="mb-5">
                <p
                  className="text-white/85 leading-[1.15] tracking-[-0.02em] mb-2"
                  style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: "22px" }}
                >
                  Business Growth Report
                </p>
                <p
                  className="text-white/30"
                  style={{ fontFamily: "var(--sans-label)", fontSize: "10px", letterSpacing: "0.12em" }}
                >
                  Q4 2025 · NORTHERN CALIFORNIA
                </p>
              </div>
              <p className="font-sans text-white/35 text-[13px] leading-relaxed">
                Proxima Nova headings paired with Roboto Mono labels. Consistent tracking. Clear hierarchy.
              </p>
            </div>

            {/* Don't */}
            <div className="bg-white/[0.04] p-6 md:p-8">
              <span className="inline-block font-label text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 mb-6 border border-[#D98088]/30 text-[#D98088]/80">
                Don&apos;t
              </span>
              <div className="mb-5">
                <p
                  className="text-white/85 leading-[1.15] mb-1"
                  style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: "22px", letterSpacing: "0.08em" }}
                >
                  Business Growth Report
                </p>
                <p
                  className="text-white/50"
                  style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: "14px", letterSpacing: "-0.02em" }}
                >
                  Q4 2025 · Northern California
                </p>
              </div>
              <p className="font-sans text-white/35 text-[13px] leading-relaxed">
                Don&apos;t add positive tracking to headings, use Proxima Nova for labels, or mix more than two typefaces.
              </p>
            </div>
          </div>
        </div>
      </div>

      <NextSectionLink title="Logos" href="/logos" />
    </>
  );
}
