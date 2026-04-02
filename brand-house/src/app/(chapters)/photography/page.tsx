import { gradientPhotography } from "@/lib/page-gradients";
import InteriorHero from "@/components/InteriorHero";
import NextSectionLink from "@/components/NextSectionLink";
import SbdcWatermark from "@/components/SbdcWatermark";

const doList = [
  "Show real people in real work environments — not posed, not stock.",
  "Capture connection between people: advisor and client, business partners, teams.",
  "Feature authentic emotion — pride, focus, determination, laughter.",
  "Photograph people in action: working, serving customers, building, creating.",
  "Use natural light whenever possible. It reads as honest.",
  "Include diversity of businesses, industries, geographies, and people.",
  "Show the advisor and client together when telling SBDC stories.",
];

const dontList = [
  "Use generic stock photography of 'business people in suits shaking hands.'",
  "Stage group photos where everyone stares at the camera.",
  "Use photos where the SBDC logo is the subject — the person is the subject.",
  "Crop so tightly that the environment disappears. Context matters.",
  "Use photos with busy, cluttered backgrounds that distract from the subject.",
  "Apply heavy filters or extreme color grading. Keep it natural.",
  "Use AI-generated photos for client stories. Authenticity is non-negotiable.",
];

const overlaySpecs = [
  {
    name: "Dark editorial",
    bg: "linear-gradient(180deg, rgba(15,28,46,0.3) 0%, rgba(15,28,46,0.7) 100%)",
    css: "background: linear-gradient(180deg, rgba(15,28,46,0.3) 0%, rgba(15,28,46,0.7) 100%)",
    use: "Hero images, event coverage, full-bleed backgrounds",
  },
  {
    name: "Brand gradient",
    bg: "linear-gradient(135deg, rgba(29,90,167,0.6) 0%, rgba(15,28,46,0.8) 100%)",
    css: "background: linear-gradient(135deg, rgba(29,90,167,0.6) 0%, rgba(15,28,46,0.8) 100%)",
    use: "Social media covers, presentation slides",
  },
  {
    name: "Light wash",
    bg: "rgba(245,244,240,0.85)",
    css: "background: rgba(245,244,240,0.85)",
    use: "Text-heavy layouts where photo is ambient background",
  },
];

const compositionRules = [
  {
    title: "The Two-Third Rule",
    desc: "Place the subject at the intersection points of a rule-of-thirds grid. Avoid dead center unless it's a deliberate portrait.",
  },
  {
    title: "Environmental Context",
    desc: "Show enough of the workspace, storefront, or community to ground the person in their world. The setting tells half the story.",
  },
  {
    title: "Eye Level or Slightly Below",
    desc: "Photograph at eye level or slightly below to convey respect and authority. Never shoot down on a subject — it diminishes them.",
  },
  {
    title: "Leading Lines & Depth",
    desc: "Use architectural lines, countertops, or pathways to draw the viewer's eye toward the subject. Create depth, not flatness.",
  },
];

export default function PhotographyPage() {
  return (
    <>
      <InteriorHero gradient={gradientPhotography}
        title="Photography"
        subtitle="People, not programs. Faces, not buildings. Every image should make the person visible — because the service is the person."
      />

      <div className="bg-white py-12 md:py-16">
        {/* Philosophy */}
        <div className="max-w-[780px] mx-auto px-8 md:px-12 mb-16">
          <h2 className="font-sans text-2xl md:text-3xl text-navy tracking-[-0.02em] font-500 mb-6">
            Seeing Is Believing
          </h2>
          <div className="space-y-5 font-serif text-base md:text-lg text-text-secondary leading-[1.7] max-w-[640px]">
            <p>
              Research shows that we&rsquo;re attracted to people&rsquo;s faces
              and more likely to be motivated by seeing images of people in
              groups. A person&rsquo;s face communicates the spirit, personality,
              and character of the NorCal SBDC Network better than any logo or
              statistic ever could.
            </p>
            <p>
              As much as possible,{" "}
              <strong className="font-800 text-navy">
                use photos of people rather than places
              </strong>{" "}
              — to show that our work is about people in business and the people
              who help make them successful.
            </p>
          </div>
        </div>

      </div>

      {/* Do / Don't — dark navy bg */}
      <div className="bg-[#0f1c2e] py-12 md:py-16 relative overflow-hidden">
        <SbdcWatermark className="absolute -right-[8%] top-[10%] w-[40vw] max-w-[500px] text-white pointer-events-none select-none" opacity={0.035} />
        <div className="max-w-[960px] mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Do */}
            <div className="p-8 md:p-10 border border-white/[0.06] border-b-0 md:border-b md:border-r-0">
              <span className="inline-block px-3 py-1.5 bg-[#00685E]/20 font-sans text-[10px] font-800 uppercase tracking-[0.14em] text-[#4DB8AD] mb-6">
                Do
              </span>
              <ul className="space-y-4">
                {doList.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4DB8AD"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="font-serif text-sm text-white/50 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Don't */}
            <div className="p-8 md:p-10 border border-white/[0.06]">
              <span className="inline-block px-3 py-1.5 bg-[#A73B44]/20 font-sans text-[10px] font-800 uppercase tracking-[0.14em] text-[#D98088] mb-6">
                Don&rsquo;t
              </span>
              <ul className="space-y-4">
                {dontList.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#D98088"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    <span className="font-serif text-sm text-white/50 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12 md:py-16">

        {/* Composition */}
        <div className="max-w-[780px] mx-auto px-8 md:px-12 mb-16">
          <h2 className="font-sans text-2xl md:text-3xl text-navy tracking-[-0.02em] font-500 mb-10">
            Composition Guidelines
          </h2>
          <div className="space-y-8">
            {compositionRules.map((rule) => (
              <div key={rule.title}>
                <h3 className="font-sans text-sm font-800 text-navy uppercase tracking-[0.06em] mb-2">
                  {rule.title}
                </h3>
                <p className="font-serif text-sm text-text-secondary leading-relaxed max-w-xl">
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Overlay Treatments */}
        <div className="max-w-[960px] mx-auto px-8 md:px-12 mb-16">
          <h2 className="font-sans text-2xl md:text-3xl text-navy tracking-[-0.02em] font-500 mb-4">
            Overlay Treatments
          </h2>
          <p className="font-serif text-base text-text-secondary leading-relaxed mb-10 max-w-xl">
            When placing text over photography, use one of these approved
            gradient overlays to maintain legibility and brand consistency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {overlaySpecs.map((spec) => (
              <div
                key={spec.name}
                className="border border-black/[0.06] overflow-hidden"
              >
                {/* Preview swatch */}
                <div
                  className="h-32 relative"
                  style={{ background: "#2B3035" }}
                >
                  <div className="absolute inset-0" style={{ background: spec.bg }} />
                  <div className="absolute inset-0 flex items-end p-4">
                    <span className="font-sans text-[11px] font-800 text-white/80 uppercase tracking-[0.1em]">
                      Preview
                    </span>
                  </div>
                </div>
                {/* Info */}
                <div className="p-5">
                  <h4 className="font-sans text-sm font-800 text-navy mb-1.5">
                    {spec.name}
                  </h4>
                  <p className="font-serif text-[12px] text-text-tertiary leading-relaxed mb-3">
                    {spec.use}
                  </p>
                  <code className="font-mono text-[11px] text-text-tertiary block leading-relaxed break-all">
                    {spec.css}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subjects */}
        <div className="max-w-[780px] mx-auto px-8 md:px-12 mb-16">
          <h2 className="font-sans text-2xl md:text-3xl text-navy tracking-[-0.02em] font-500 mb-6">
            What to Photograph
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <span className="font-sans text-[11px] font-800 uppercase tracking-[0.15em] text-royal mb-4 block">
                People
              </span>
              <ul className="space-y-2.5">
                {[
                  "Connection between people",
                  "Authentic emotion",
                  "People in business action, working",
                  "People engaged in their work environments",
                  "Advisors with clients (not staged)",
                  "Event moments — workshops, trainings, conferences",
                ].map((item) => (
                  <li
                    key={item}
                    className="font-serif text-sm text-text-secondary leading-relaxed flex gap-2"
                  >
                    <span className="text-royal/40 mt-1">&#8226;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-sans text-[11px] font-800 uppercase tracking-[0.15em] text-navy/40 mb-4 block">
                Spaces
              </span>
              <ul className="space-y-2.5">
                {[
                  "Focus on interesting details, not entire buildings",
                  "Energy in the space — activity, not emptiness",
                  "Storefronts that show character and identity",
                  "Workspaces that feel alive and personal",
                ].map((item) => (
                  <li
                    key={item}
                    className="font-serif text-sm text-text-secondary leading-relaxed flex gap-2"
                  >
                    <span className="text-navy/20 mt-1">&#8226;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Photo Library Link */}
        <div className="max-w-[780px] mx-auto px-8 md:px-12">
          <div className="p-8 border border-black/[0.06] bg-[#f7f7f5] rounded-xl">
            <h3 className="font-sans text-sm font-800 text-navy uppercase tracking-[0.1em] mb-3">
              Photo Library
            </h3>
            <p className="font-serif text-sm text-text-secondary leading-relaxed mb-4">
              The NorCal SBDC maintains a shared photo library with client
              photos, event photography, and approved stock images.
            </p>
            <a
              href="https://docs.google.com/document/d/1T7EDvFOQewsl_C_OowdFnfWjxIrBqQHvvg8Z2TZVuWo/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-[12px] font-800 uppercase tracking-[0.1em] text-royal hover:text-navy transition-colors"
            >
              Access Photo Library
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <NextSectionLink title="Templates" href="/templates" />
    </>
  );
}
