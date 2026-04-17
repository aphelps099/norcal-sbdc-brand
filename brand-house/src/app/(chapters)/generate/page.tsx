import InteriorHero from "@/components/InteriorHero";
import NextSectionLink from "@/components/NextSectionLink";
import ContentGenerator from "@/components/ContentGenerator";
import BlueprintBackdrop from "@/components/BlueprintBackdrop";
import GrainBackdrop from "@/components/GrainBackdrop";
import ThinkingCluster from "@/components/ThinkingCluster";


export default function GeneratePage() {
  return (
    <>
      {/* Blueprint paper bg (zIndex 0) + film grain over it (zIndex 0 too,
          painted after). Both are fixed/pointer-events-none. Content sits
          above at zIndex 1. */}
      <BlueprintBackdrop />
      <GrainBackdrop intensity={0.7} />

      <div className="relative" style={{ zIndex: 1 }}>
        <div className="relative">
          <InteriorHero
            chapterNumber="11"
            category="tools"
            title="Generate"
            subtitle="Create on-brand content in seconds. Select a format, answer a few questions, and get copy that sounds like us."
            bgColor="transparent"
          />
          {/* Claude-style "thinking" cluster — hovers next to the title.
              Positioned in the hero's right column, above the rule. */}
          <div className="pointer-events-none absolute right-[6vw] md:right-[8vw] lg:right-[10vw] top-[clamp(180px,24vw,360px)] hidden md:block z-20">
            <ThinkingCluster size={200} />
          </div>
        </div>

        <div className="py-16 md:py-24" style={{ backgroundColor: "transparent" }}>
          <div className="max-w-[1200px] mx-auto px-8 md:px-12">
            <h2
              className="tracking-[-0.02em] mb-2 text-navy"
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 500,
                fontSize: "clamp(28px, 3.5vw, 40px)",
              }}
            >
              Content Generator
            </h2>
            <p className="text-navy/55 text-base md:text-[17px] leading-relaxed font-sans mb-12">
              Powered by Claude. Every output follows our brand voice, tone guidelines, and messaging framework.
            </p>

            <ContentGenerator />
          </div>
        </div>

        <NextSectionLink title="Content" href="/content" />
      </div>

    </>
  );
}
