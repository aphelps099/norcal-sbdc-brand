import { gradientTypography } from "@/lib/page-gradients";
import InteriorHero from "@/components/InteriorHero";
import NextSectionLink from "@/components/NextSectionLink";
import SbdcWatermark from "@/components/SbdcWatermark";

export default function TypographyPage() {
  return (
    <>
      <InteriorHero gradient={gradientTypography}
        title="Typography"
        subtitle="Two typefaces — Proxima Nova for authority, Roboto Mono for precision."
      />

      {/* ── Specimens ── */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-[960px] mx-auto px-8 md:px-12">

          {/* Proxima Nova */}
          <p className="font-label text-[11px] uppercase tracking-[0.12em] text-navy/40 mb-4">
            Primary Typeface
          </p>
          <p
            className="text-navy tracking-[-0.04em] leading-[1.0]"
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 500,
              fontSize: "clamp(56px, 8vw, 96px)",
            }}
          >
            Proxima Nova
          </p>
          <p className="text-navy/30 text-[13px] font-sans mt-3 mb-10">
            Medium 500 · Regular &amp; Italic
          </p>

          <p
            className="text-navy/60 leading-[1.6] mb-3"
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 500,
              fontSize: "clamp(18px, 2.5vw, 24px)",
              letterSpacing: "-0.01em",
            }}
          >
            Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm
          </p>
          <p
            className="text-navy/60 leading-[1.6] mb-6"
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 500,
              fontSize: "clamp(18px, 2.5vw, 24px)",
              letterSpacing: "-0.01em",
            }}
          >
            Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
          </p>
          <p
            className="text-navy/35 leading-[1.6] mb-8"
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 500,
              fontSize: "clamp(18px, 2.5vw, 24px)",
              letterSpacing: "-0.01em",
            }}
          >
            0 1 2 3 4 5 6 7 8 9
          </p>
          <p className="font-label text-[10px] uppercase tracking-[0.14em] text-navy/25">
            Headings, body text, navigation, display
          </p>

          {/* Roboto Mono */}
          <div className="mt-20 md:mt-28">
            <p className="font-label text-[11px] uppercase tracking-[0.12em] text-navy/40 mb-4">
              Secondary Typeface
            </p>
            <p
              className="text-navy uppercase leading-[1.1]"
              style={{
                fontFamily: "var(--sans-label)",
                fontWeight: 400,
                fontSize: "clamp(20px, 3vw, 32px)",
                letterSpacing: "0.12em",
              }}
            >
              Roboto Mono
            </p>
            <p className="text-navy/30 text-[13px] font-sans mt-3 mb-10">
              Regular 400 · Labels, helper text, footers
            </p>

            <p
              className="text-navy/50 leading-[1.8] mb-3"
              style={{
                fontFamily: "var(--sans-label)",
                fontWeight: 400,
                fontSize: "clamp(13px, 1.8vw, 18px)",
                letterSpacing: "0.08em",
              }}
            >
              A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
            </p>
            <p
              className="text-navy/50 leading-[1.8] mb-3"
              style={{
                fontFamily: "var(--sans-label)",
                fontWeight: 400,
                fontSize: "clamp(13px, 1.8vw, 18px)",
                letterSpacing: "0.08em",
              }}
            >
              a b c d e f g h i j k l m n o p q r s t u v w x y z
            </p>
            <p
              className="text-navy/30 leading-[1.8] mb-8"
              style={{
                fontFamily: "var(--sans-label)",
                fontWeight: 400,
                fontSize: "clamp(13px, 1.8vw, 18px)",
                letterSpacing: "0.08em",
              }}
            >
              0 1 2 3 4 5 6 7 8 9
            </p>
            <p className="font-label text-[10px] uppercase tracking-[0.14em] text-navy/25">
              Labels, eyebrows, helper text, footers, micro-copy
            </p>
          </div>
        </div>
      </div>

      {/* ── Type Scale ── */}
      <div className="bg-white pb-16 md:pb-24">
        <div className="max-w-[960px] mx-auto px-8 md:px-12">
          <p className="font-label text-[11px] uppercase tracking-[0.12em] text-navy/40 mb-10">
            Type Scale
          </p>

          {/* Display */}
          <div className="border-t border-black/[0.06] pt-6 pb-10">
            <p className="font-label text-[10px] uppercase tracking-[0.18em] text-navy/25 mb-4">
              Display — Proxima Nova 500 · 40–64px · -0.03em · 1.05
            </p>
            <p
              className="text-navy leading-[1.05] tracking-[-0.03em]"
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 500,
                fontSize: "clamp(40px, 6vw, 64px)",
              }}
            >
              Your Business, Better.
            </p>
          </div>

          {/* H1 */}
          <div className="border-t border-black/[0.06] pt-6 pb-10">
            <p className="font-label text-[10px] uppercase tracking-[0.18em] text-navy/25 mb-4">
              H1 — Proxima Nova 500 · 28–44px · -0.02em · 1.1
            </p>
            <p
              className="text-navy leading-[1.1] tracking-[-0.02em]"
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 500,
                fontSize: "clamp(28px, 4vw, 44px)",
              }}
            >
              Meet Your Business People
            </p>
          </div>

          {/* H2 */}
          <div className="border-t border-black/[0.06] pt-6 pb-10">
            <p className="font-label text-[10px] uppercase tracking-[0.18em] text-navy/25 mb-4">
              H2 — Proxima Nova 500 · 22–32px · -0.02em · 1.15
            </p>
            <p
              className="text-navy leading-[1.15] tracking-[-0.02em]"
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 500,
                fontSize: "clamp(22px, 3vw, 32px)",
              }}
            >
              Capital Access Programs
            </p>
          </div>

          {/* Body */}
          <div className="border-t border-black/[0.06] pt-6 pb-10">
            <p className="font-label text-[10px] uppercase tracking-[0.18em] text-navy/25 mb-4">
              Body — Proxima Nova 500 · 16–17px · -0.01em · 1.7
            </p>
            <p
              className="text-navy/80 leading-[1.7] tracking-[-0.01em] max-w-prose"
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 500,
                fontSize: "clamp(16px, 1.2vw, 17px)",
              }}
            >
              Since 1980, SBDC advisors have helped Northern California businesses
              raise $2.8B in capital, create 42,000+ jobs, and turn kitchen-table
              ideas into million-dollar companies.
            </p>
          </div>

          {/* Label */}
          <div className="border-t border-black/[0.06] pt-6 pb-10">
            <p className="font-label text-[10px] uppercase tracking-[0.18em] text-navy/25 mb-4">
              Label — Roboto Mono 400 · 13px · 0.14em · 1.4
            </p>
            <p
              className="text-navy/60 uppercase"
              style={{
                fontFamily: "var(--sans-label)",
                fontWeight: 400,
                fontSize: "13px",
                letterSpacing: "0.14em",
                lineHeight: "1.4",
              }}
            >
              Capital Access · Business Planning · Crisis Recovery
            </p>
          </div>

          {/* Helper / Footer */}
          <div className="border-t border-black/[0.06] pt-6 pb-10">
            <p className="font-label text-[10px] uppercase tracking-[0.18em] text-navy/25 mb-4">
              Helper Text — Roboto Mono 400 · 11px · 0.02em · 1.5
            </p>
            <p
              className="text-navy/40"
              style={{
                fontFamily: "var(--sans-label)",
                fontWeight: 400,
                fontSize: "11px",
                letterSpacing: "0.02em",
                lineHeight: "1.5",
              }}
            >
              Funded in part through a cooperative agreement with the US Small Business Administration.
            </p>
          </div>

          {/* Tiny Label */}
          <div className="border-t border-black/[0.06] pt-6 pb-10">
            <p className="font-label text-[10px] uppercase tracking-[0.18em] text-navy/25 mb-4">
              Tiny Label — Roboto Mono 400 · 10px · 0.18em · 1.4
            </p>
            <p
              className="text-navy/40 uppercase"
              style={{
                fontFamily: "var(--sans-label)",
                fontWeight: 400,
                fontSize: "10px",
                letterSpacing: "0.18em",
                lineHeight: "1.4",
              }}
            >
              Since 1980 — Northern California
            </p>
          </div>
        </div>
      </div>

      {/* ── Rules ── */}
      <div className="bg-[#0f1c2e] py-14 md:py-20 relative overflow-hidden">
        <SbdcWatermark className="absolute -right-[8%] top-[10%] w-[40vw] max-w-[500px] text-white pointer-events-none select-none" opacity={0.035} />
        <div className="max-w-[960px] mx-auto px-8 md:px-12">
          <h2
            className="tracking-[-0.02em] text-white/90 mb-7"
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 500,
              fontSize: "clamp(28px, 3.5vw, 40px)",
            }}
          >
            Rules
          </h2>
          <div className="space-y-3 text-white/50 text-base leading-relaxed font-sans max-w-xl mb-14">
            <p>
              <strong className="text-white/80">Proxima Nova Medium</strong> is
              the primary typeface — headings, body, navigation, and display text. Weight 500
              with tight letter-spacing for a clean, confident presence.
            </p>
            <p>
              <strong className="text-white/80">Roboto Mono</strong> handles
              labels, eyebrows, helper text, footers, and UI micro-copy. Use it for
              anything that needs a precise, technical feel.
            </p>
            <p>
              <strong className="text-white/80">Never</strong> mix more than
              two typefaces in a single composition. Proxima Nova + Roboto Mono is the standard pairing.
            </p>
          </div>

          {/* Do / Don't */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Do */}
            <div className="border border-white/[0.06] p-6 md:p-8">
              <span className="inline-block font-label text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 mb-6 bg-[#00685E]/20 text-[#4DB8AD]">
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
                  Q4 2025 · Northern California
                </p>
              </div>
              <p className="text-white/35 text-[13px] leading-relaxed font-sans">
                Pair Proxima Nova headings with Roboto Mono labels. Maintain consistent tracking and clear hierarchy.
              </p>
            </div>

            {/* Don't */}
            <div className="border border-white/[0.06] p-6 md:p-8">
              <span className="inline-block font-label text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 mb-6 bg-[#A73B44]/20 text-[#D98088]">
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
              <p className="text-white/35 text-[13px] leading-relaxed font-sans">
                Don&apos;t add tracking to headings, use Proxima Nova for labels, or mix more than two typefaces in one composition.
              </p>
            </div>
          </div>
        </div>
      </div>

      <NextSectionLink title="Logos" href="/logos" />
    </>
  );
}
