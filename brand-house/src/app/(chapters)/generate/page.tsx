import InteriorHero from "@/components/InteriorHero";
import NextSectionLink from "@/components/NextSectionLink";
import ContentGenerator from "@/components/ContentGenerator";


export default function GeneratePage() {
  return (
    <>
      <InteriorHero
        chapterNumber="10"
        category="tools"
        title="generate"
        subtitle="Create on-brand content in seconds. Select a format, answer a few questions, and get copy that sounds like us."
      />

      <div className="bg-white py-16 md:py-24">
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
          <p className="text-navy/50 text-base md:text-[17px] leading-relaxed font-sans mb-12">
            Powered by Claude. Every output follows our brand voice, tone guidelines, and messaging framework.
          </p>

          <ContentGenerator />
        </div>
      </div>

      <NextSectionLink title="Content" href="/content" />
    </>
  );
}
