import SplashIntro from "@/components/SplashIntro";
import TopNav from "@/components/TopNav";
import HeroHeadline from "@/components/HeroHeadline";
import PillNav from "@/components/PillNav";
import StatsRow from "@/components/StatsRow";
import ChapterCard from "@/components/ChapterCard";
import { chapters, stats, pillNavItems } from "@/lib/brand-tokens";
import ViewPageSections from "@/components/ViewPageSections";

export default function SplashPage() {
  return (
    <main>
      <SplashIntro />
      <TopNav />

      {/* Sections from page config */}
      <ViewPageSections />

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
            href="/builder"
            className="inline-block px-10 py-4 bg-strawberry text-white font-sans text-[0.7rem] font-800 tracking-[0.12em] uppercase rounded-full transition-all duration-400 hover:shadow-[0_8px_30px_rgba(247,2,77,0.25)] hover:-translate-y-0.5"
          >
            Open Page Builder
          </a>
        </div>
      </section>

      {/* ═══ CHAPTERS ═══ */}
      <section id="chapters" className="bg-cream-warm py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-5 mb-14">
            <div className="h-px flex-1 bg-black/[0.05]" />
            <span className="font-mono text-[0.55rem] tracking-[0.25em] uppercase text-text-tertiary/60">
              Chapters
            </span>
            <div className="h-px flex-1 bg-black/[0.05]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
