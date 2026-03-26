import SplashIntro from "@/components/SplashIntro";
import TopNav from "@/components/TopNav";
import ViewPageSections from "@/components/ViewPageSections";
import ColorBlockBand from "@/components/ColorBlockBand";
import SplitSection from "@/components/SplitSection";
import BentoGrid from "@/components/BentoGrid";
import FlatCards from "@/components/FlatCards";
import { chapters, stats } from "@/lib/brand-tokens";

export default function SplashPage() {
  return (
    <main>
      <SplashIntro />
      <TopNav />

      {/* ═══ BAND 1 — DARK NAVY: Hero Grid (SRG) ═══ */}
      <ViewPageSections />

      {/* ═══ BAND 2 — WHITE: Headline + Stat ═══ */}
      <section style={{ background: "#fff", padding: "clamp(80px, 12vw, 160px) clamp(24px, 5vw, 64px)" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "var(--navy)",
            }}
          >
            What&apos;s free advice worth?
          </h2>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "var(--royal)",
              fontStyle: "italic",
              marginTop: "8px",
            }}
          >
            $547 million, last year.
          </p>
          <div style={{ marginTop: "clamp(40px, 6vw, 80px)" }}>
            <span
              style={{
                fontFamily: "var(--sans)",
                fontSize: "clamp(3rem, 8vw, 6rem)",
                fontWeight: 900,
                color: "var(--coral)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              $547M
            </span>
            <p style={{
              fontFamily: "var(--mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--text-tertiary)",
              marginTop: "12px",
            }}>
              In client revenue generated, 2024
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BAND 3 — ROYAL BLUE: Impact Statement ═══ */}
      <section style={{
        background: "var(--royal)",
        padding: "clamp(80px, 10vw, 140px) clamp(24px, 5vw, 64px)",
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{
            fontFamily: "var(--mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            marginBottom: "32px",
          }}>
            Our Impact
          </p>
          <p style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
            lineHeight: 1.4,
            color: "#fff",
            letterSpacing: "-0.01em",
          }}>
            Don&apos;t settle for generic advice. Your business <em style={{ color: "var(--pool-bright)", fontStyle: "italic" }}>deserves</em> someone who gets it — an advisor who has been where you are, who knows what it takes to turn <em style={{ color: "var(--pool-bright)", fontStyle: "italic" }}>ambition</em> into <em style={{ color: "var(--pool-bright)", fontStyle: "italic" }}>revenue</em>.
          </p>
        </div>
      </section>

      {/* ═══ BAND 4 — CORAL / NAVY SPLIT ═══ */}
      <SplitSection
        left={{
          bg: "var(--coral)",
          eyebrow: "Since 1980",
          heading: "$2.8B raised",
          body: "Capital secured for Northern California small businesses through expert advising and strategic connections.",
        }}
        right={{
          bg: "var(--navy)",
          eyebrow: "And counting",
          heading: "42,000+ jobs",
          body: "Created by our clients across the region — from kitchen-table startups to established enterprises.",
        }}
      />

      {/* ═══ BAND 5 — WARM BEIGE: Stats Grid ═══ */}
      <section style={{
        background: "var(--cream)",
        padding: "clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px)",
      }}>
        <div style={{
          maxWidth: "960px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "clamp(24px, 4vw, 48px)",
        }}>
          {stats.map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                color: "var(--navy)",
              }}>
                {stat.value}
              </div>
              <div style={{
                fontFamily: "var(--mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--text-tertiary)",
                marginTop: "12px",
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ BAND 6 — BLUE / DARK SPLIT: CTA ═══ */}
      <SplitSection
        left={{
          bg: "var(--royal)",
          eyebrow: "Ready to dive in?",
          heading: "Explore the brand",
          body: "Everything you need to represent NorCal SBDC — from logos to voice guidelines.",
          cta: { label: "Open Page Builder", href: "/builder" },
        }}
        right={{
          bg: "var(--navy)",
          eyebrow: "Real Clients",
          heading: "Real Results",
          body: "64,000+ entrepreneurs served with free, confidential business advising across Northern California.",
        }}
      />

      {/* ═══ BAND 7 — WHITE: Chapter Directory ═══ */}
      <section id="chapters" style={{
        background: "#fff",
        padding: "clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px)",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "48px",
          }}>
            <div style={{ height: "1px", flex: 1, background: "rgba(0,0,0,0.06)" }} />
            <span style={{
              fontFamily: "var(--mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--text-tertiary)",
            }}>
              Brand Toolkit
            </span>
            <div style={{ height: "1px", flex: 1, background: "rgba(0,0,0,0.06)" }} />
          </div>
          <FlatCards chapters={chapters as unknown as { title: string; description: string; href: string }[]} />
        </div>
      </section>

      {/* ═══ BAND 8 — DARK NAVY: Bento Grid ═══ */}
      <BentoGrid />

      {/* ═══ BAND 9 — CREAM: Footer ═══ */}
      <footer style={{
        background: "var(--cream)",
        borderTop: "1px solid rgba(0,0,0,0.04)",
        padding: "64px clamp(24px, 5vw, 64px)",
      }}>
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "24px",
        }}>
          <div>
            <p style={{
              fontFamily: "var(--sans)",
              fontSize: "0.7rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(15,28,46,0.35)",
            }}>
              NorCal SBDC
            </p>
            <p style={{
              fontFamily: "var(--mono)",
              fontSize: "0.55rem",
              color: "rgba(0,0,0,0.25)",
              letterSpacing: "0.05em",
              marginTop: "4px",
            }}>
              Brand House &middot; v2026.1
            </p>
          </div>
          <p style={{
            fontFamily: "var(--mono)",
            fontSize: "0.55rem",
            color: "rgba(0,0,0,0.2)",
            letterSpacing: "0.05em",
          }}>
            For internal use only &middot; &copy; 2026 Northern California SBDC
          </p>
        </div>
      </footer>
    </main>
  );
}
