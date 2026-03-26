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

function SectionDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-4 max-w-5xl mx-auto px-6 py-4">
      <div className="h-px flex-1 bg-cream/[0.06]" />
      {label && (
        <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-cream/20">
          {label}
        </span>
      )}
      <div className="h-px flex-1 bg-cream/[0.06]" />
    </div>
  );
}

export default function SplashPage() {
  return (
    <main>
      {/* Cinematic intro overlay */}
      <SplashIntro />

      {/* Glass navigation */}
      <TopNav />

      {/* ═══ HERO — Scroll Reveal Grid ═══ */}
      <ScrollRevealGrid
        images={heroImages}
        heading="NorCal SBDC"
        subheading="Brand House"
      />

      {/* ═══ HEADLINE — Impact statement ═══ */}
      <HeroHeadline
        line1="What's free advice worth?"
        emphasis="$547 million, last year."
        stat="$547M"
        statLabel="In client revenue generated, 2024"
      />

      {/* ═══ PILL NAV — Chapter links ═══ */}
      <PillNav items={[...pillNavItems]} />

      {/* ═══ STATS — Impact metrics ═══ */}
      <StatsRow stats={[...stats]} heading="Since 1980" />

      {/* Transition divider */}
      <SectionDivider />

      {/* ═══ MANIFESTO — Royal blue full-bleed ═══ */}
      <ManifestoBlock
        text="Don't settle for generic advice. Your business deserves someone who gets it — an advisor who has been where you are, who understands the terrain, who knows what it takes to turn ambition into revenue."
        accentWords={["deserves", "advisor", "ambition", "revenue"]}
      />

      {/* Transition divider */}
      <SectionDivider />

      {/* ═══ CTA — Explore the brand ═══ */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-cream/30 mb-6">
            Ready to dive in?
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-cream leading-tight mb-10">
            Explore the brand system
          </h2>
          <a
            href="#chapters"
            className="inline-block px-10 py-4 bg-strawberry text-white font-mono text-xs tracking-[0.15em] uppercase rounded-full hover:brightness-110 transition-all duration-300 shadow-lg shadow-strawberry/20"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* ═══ CHAPTERS — Directory grid ═══ */}
      <section id="chapters" className="py-20 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionDivider label="Chapters" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
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
      <footer className="border-t border-cream/[0.04] py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="font-mono text-[0.65rem] text-cream/30 tracking-[0.15em] uppercase">
              NorCal SBDC &mdash; Brand House
            </p>
            <p className="font-mono text-[0.55rem] text-cream/15 tracking-wider">
              v2026.1 &middot; Last updated March 2026
            </p>
          </div>
          <p className="font-mono text-[0.55rem] text-cream/15 tracking-wider">
            For internal use only &middot; &copy; 2026 Northern California SBDC
          </p>
        </div>
      </footer>
    </main>
  );
}
