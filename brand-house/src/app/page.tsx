import ScrollRevealGrid from "@/components/ScrollRevealGrid";
import TopNav from "@/components/TopNav";
import HeroHeadline from "@/components/HeroHeadline";
import PillNav from "@/components/PillNav";
import StatsRow from "@/components/StatsRow";
import ManifestoBlock from "@/components/ManifestoBlock";
import ChapterCard from "@/components/ChapterCard";
import { chapters, stats, pillNavItems } from "@/lib/brand-tokens";

const heroImages = [
  "/images/hero/1.jpg",
  "/images/hero/2.jpg",
  "/images/hero/3.jpg",
  "/images/hero/4.jpg",
  "/images/hero/5.jpg",
  "/images/hero/6.jpg",
  "/images/hero/7.jpg",
  "/images/hero/8.jpg",
  "/images/hero/9.jpg",
];

export default function SplashPage() {
  return (
    <main>
      <TopNav />

      {/* Hero — Scroll Reveal Grid */}
      <ScrollRevealGrid
        images={heroImages}
        heading="NorCal SBDC"
        subheading="Brand House"
      />

      {/* Headline with stat */}
      <HeroHeadline
        line1="What's free advice worth?"
        emphasis="$547 million, last year."
        stat="$547M"
        statLabel="In client revenue generated, 2024"
      />

      {/* Pill navigation */}
      <PillNav items={[...pillNavItems]} />

      {/* Impact stats */}
      <StatsRow stats={[...stats]} heading="Since 1980" />

      {/* Manifesto */}
      <ManifestoBlock
        text="Don't settle for generic advice. Your business deserves someone who gets it — an advisor who has been where you are, who understands the terrain, who knows what it takes to turn ambition into revenue."
        accentWords={["deserves", "advisor", "ambition", "revenue"]}
      />

      {/* CTA */}
      <div className="text-center py-12">
        <a
          href="#chapters"
          className="inline-block px-8 py-4 bg-strawberry text-white font-mono text-sm tracking-wider uppercase rounded-full hover:bg-strawberry/90 transition-colors duration-300"
        >
          Explore the Brand
        </a>
      </div>

      {/* Chapter directory */}
      <section id="chapters" className="py-20 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-cream/10" />
            <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-cream/40">
              Chapters
            </h2>
            <div className="h-px flex-1 bg-cream/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

      {/* Footer */}
      <footer className="border-t border-cream/5 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-cream/30 tracking-wider">
            NorCal SBDC &mdash; Brand House
          </p>
          <p className="font-mono text-xs text-cream/20">
            For internal use only
          </p>
        </div>
      </footer>
    </main>
  );
}
