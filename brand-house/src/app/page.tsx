import SplashIntro from "@/components/SplashIntro";
import ScrollRevealGrid from "@/components/ScrollRevealGrid";
import TopNav from "@/components/TopNav";
import HeroHeadline from "@/components/HeroHeadline";
import PillNav from "@/components/PillNav";
import StatsRow from "@/components/StatsRow";
import ManifestoBlock from "@/components/ManifestoBlock";
import ChapterCard from "@/components/ChapterCard";
import { chapters, stats, pillNavItems } from "@/lib/brand-tokens";

const heroImages = [
  { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80&fit=crop&auto=format", pos: "center 40%" },
  { src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80&fit=crop&auto=format", pos: "center center" },
  { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&fit=crop&auto=format", pos: "center center" },
  { src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80&fit=crop&auto=format", pos: "center center" },
  { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&fit=crop&auto=format", pos: "center center" },
  { src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80&fit=crop&auto=format", pos: "center 30%" },
  { src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&fit=crop&auto=format", pos: "center center" },
  { src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80&fit=crop&auto=format", pos: "center center" },
  { src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80&fit=crop&auto=format", pos: "center center" },
];

function Divider({ label }: { label?: string }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-2">
      <div className="flex items-center gap-5">
        <div className="h-px flex-1 bg-black/[0.05]" />
        {label && (
          <span className="font-mono text-[0.55rem] tracking-[0.25em] uppercase text-text-tertiary/60">
            {label}
          </span>
        )}
        <div className="h-px flex-1 bg-black/[0.05]" />
      </div>
    </div>
  );
}

export default function SplashPage() {
  return (
    <main>
      <SplashIntro />
      <TopNav />

      {/* ═══ HERO — Dark cinematic grid (the one dark section) ═══ */}
      <ScrollRevealGrid
        images={heroImages}
        heading="NorCal SBDC"
        subheading="Brand House"
      />

      {/* ═══ HEADLINE — Light, clean, editorial ═══ */}
      <HeroHeadline
        line1="What's free advice worth?"
        emphasis="$547 million, last year."
        stat="$547M"
        statLabel="In client revenue generated, 2024"
      />

      {/* ═══ PILLS ═══ */}
      <PillNav items={[...pillNavItems]} />

      {/* ═══ STATS — White bg, clean serif numbers ═══ */}
      <StatsRow stats={[...stats]} heading="Since 1980" />

      {/* ═══ MANIFESTO — Dark contrast section ═══ */}
      <ManifestoBlock
        text="Don't settle for generic advice. Your business deserves someone who gets it — an advisor who has been where you are, who understands the terrain, who knows what it takes to turn ambition into revenue."
        accentWords={["deserves", "advisor", "ambition", "revenue"]}
      />

      {/* ═══ CTA ═══ */}
      <section className="bg-cream py-28 md:py-36 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-text-tertiary mb-8">
            Ready to dive in?
          </p>
          <h2 className="font-serif text-navy leading-tight tracking-[-0.01em] mb-12"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}
          >
            Explore the brand system
          </h2>
          <a
            href="#chapters"
            className="inline-block px-10 py-4 bg-strawberry text-white font-sans text-[0.7rem] font-800 tracking-[0.12em] uppercase rounded-full transition-all duration-400 hover:shadow-[0_8px_30px_rgba(247,2,77,0.25)] hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* ═══ CHAPTERS ═══ */}
      <section id="chapters" className="bg-cream-warm py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <Divider label="Chapters" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {chapters.map((ch, i) => (
              <ChapterCard
                key={ch.title}
                title={ch.title}
                description={ch.description}
                href={ch.href}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-cream border-t border-black/[0.04] py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <p className="font-sans text-[0.7rem] font-800 tracking-[0.1em] uppercase text-navy/40">
              NorCal SBDC
            </p>
            <p className="font-mono text-[0.55rem] text-text-tertiary/50 tracking-wider">
              Brand House &middot; v2026.1 &middot; March 2026
            </p>
          </div>
          <p className="font-mono text-[0.55rem] text-text-tertiary/40 tracking-wider">
            For internal use only &middot; &copy; 2026 Northern California SBDC
          </p>
        </div>
      </footer>
    </main>
  );
}
