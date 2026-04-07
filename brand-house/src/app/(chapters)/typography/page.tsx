import { gradientTypography } from "@/lib/page-gradients";
import InteriorHero from "@/components/InteriorHero";
import NextSectionLink from "@/components/NextSectionLink";
import SbdcWatermark from "@/components/SbdcWatermark";

export default function TypographyPage() {
  return (
    <>
      <InteriorHero gradient={gradientTypography}
        title="Typography"
        subtitle="Two typefaces — Sofia Pro for authority, GT America Extended for precision."
      />

      {/* ── Specimens ── */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-[960px] mx-auto px-8 md:px-12">

          {/* Sofia Pro */}
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
            Sofia Pro
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

          {/* GT America Extended */}
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
              GT America Extended
            </p>
            <p className="text-navy/30 text-[13px] font-sans mt-3 mb-10">
              Regular 400 · Uppercase only
            </p>

            <p
              className="text-navy/50 uppercase leading-[1.8] mb-3"
              style={{
                fontFamily: "var(--sans-label)",
                fontWeight: 400,
                fontSize: "clamp(13px, 1.8vw, 18px)",
                letterSpacing: "0.16em",
              }}
            >
              A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
            </p>
            <p
              className="text-navy/30 uppercase leading-[1.8] mb-8"
              style={{
                fontFamily: "var(--sans-label)",
                fontWeight: 400,
                fontSize: "clamp(13px, 1.8vw, 18px)",
                letterSpacing: "0.16em",
              }}
            >
              0 1 2 3 4 5 6 7 8 9
            </p>
            <p className="font-label text-[10px] uppercase tracking-[0.14em] text-navy/25">
              Labels, eyebrows, tags, micro-copy · Always uppercase
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
              Display — Sofia Pro 500 · 40–64px · -0.03em · 1.05
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
              H1 — Sofia Pro 500 · 28–44px · -0.02em · 1.1
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
              H2 — Sofia Pro 500 · 22–32px · -0.02em · 1.15
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
              Body — Sofia Pro 500 · 16–17px · -0.01em · 1.7
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
              Label — GT America Extended 400 · 13px · 0.14em · 1.4
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

          {/* Tiny Label */}
          <div className="border-t border-black/[0.06] pt-6 pb-10">
            <p className="font-label text-[10px] uppercase tracking-[0.18em] text-navy/25 mb-4">
              Tiny Label — GT America Extended 400 · 10px · 0.18em · 1.4
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
              <strong className="text-white/80">Sofia Pro Medium</strong> is
              the primary typeface — headings, body, navigation, and display text. Weight 500
              with tight letter-spacing for a clean, confident presence.
            </p>
            <p>
              <strong className="text-white/80">GT America Extended</strong> handles
              labels, eyebrows, tags, and UI micro-copy. Always uppercase
              with generous tracking (0.14–0.18em).
            </p>
            <p>
              <strong className="text-white/80">Never</strong> mix more than
              two typefaces in a single composition. Sofia Pro + GT America Extended is the standard pairing.
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
                  className="uppercase text-white/30"
                  style={{ fontFamily: "var(--sans-label)", fontSize: "10px", letterSpacing: "0.16em" }}
                >
                  Q4 2025 · Northern California
                </p>
              </div>
              <p className="text-white/35 text-[13px] leading-relaxed font-sans">
                Pair Sofia Pro headings with GT America Extended labels. Maintain consistent tracking and clear hierarchy.
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
                Don&apos;t add tracking to headings, use Sofia Pro for labels, or mix more than two typefaces in one composition.
              </p>
            </div>
          </div>
        </div>
      </div>

      <NextSectionLink title="Logos" href="/logos" />
    </>
  );
}
