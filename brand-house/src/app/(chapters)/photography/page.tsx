
import MasonryGallery from "@/components/MasonryGallery";
import MediaHero from "@/components/MediaHero";
import NextSectionLink from "@/components/NextSectionLink";

const doList = [
  {
    title: "Real people, real work.",
    desc: "Photograph people doing their actual work — behind the counter, at the bench, on the floor. Never posed. Never stock.",
  },
  {
    title: "Natural light, natural emotion.",
    desc: "Use available light whenever possible. Capture pride, focus, determination, laughter — the feelings that can't be faked.",
  },
  {
    title: "Advisor and client, together.",
    desc: "When telling an SBDC story, show the relationship. Two people in conversation tells the whole thesis in a single frame.",
  },
];

const dontList = [
  {
    title: "No suits shaking hands.",
    desc: "Generic stock photography of business people in suits is the visual equivalent of jargon. Skip it.",
  },
  {
    title: "No posed group shots.",
    desc: "Everyone staring at the camera reads as staged, because it is. Find the moment before or after instead.",
  },
  {
    title: "No AI-generated people.",
    desc: "Authenticity is non-negotiable. If a client is in the frame, it's the actual client — or it's not there at all.",
  },
];

// Shared 2px container-width rule
function SectionRule() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
      <div
        aria-hidden
        style={{
          height: 2,
          background: "rgba(15,28,46,0.18)",
        }}
      />
    </div>
  );
}

function Eyebrow({
  children,
  color = "rgba(15,28,46,0.45)",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <p
      className="uppercase"
      style={{
        fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
        fontSize: "11px",
        letterSpacing: "0.22em",
        color,
      }}
    >
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
      <Eyebrow
        color={dark ? "rgba(133, 163, 200, 0.75)" : "rgba(15,28,46,0.45)"}
      >
        {eyebrow}
      </Eyebrow>
      <h2
        className="mt-4"
        style={{
          fontFamily: "var(--sans)",
          fontWeight: 500,
          fontSize: "clamp(28px, 3.2vw, 40px)",
          letterSpacing: "-0.015em",
          lineHeight: 1.05,
          color: dark ? "#f5f4f0" : "#0f1c2e",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

export default function PhotographyPage() {
  return (
    <>
      <MediaHero />

      {/* ── RULE OF THUMB ── */}
      <section
        className="pt-16 md:pt-24 pb-20 md:pb-28"
        style={{ backgroundColor: "#f5f4f0" }}
      >
        <SectionHeading
          eyebrow="01 · Rule of Thumb"
          title="People, not programs."
        />
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 mt-10 md:mt-14">
          <p
            className="italic max-w-[980px]"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(26px, 3.2vw, 44px)",
              lineHeight: 1.25,
              letterSpacing: "-0.015em",
              color: "rgba(15,28,46,0.85)",
            }}
          >
            Faces, not buildings. Show{" "}
            <span style={{ color: "#1D5AA7" }}>connection</span> between people,
            and <span style={{ color: "#1D5AA7" }}>energy</span> in the work.
            A person&rsquo;s face communicates the spirit of the network better
            than any logo or statistic ever could.
          </p>
        </div>
      </section>

      <SectionRule />

      {/* ── PHOTO & VIDEO LIBRARY — crisp gallery ── */}
      <section
        className="pt-16 md:pt-24 pb-16 md:pb-20"
        style={{ backgroundColor: "#f5f4f0" }}
      >
        <SectionHeading
          eyebrow="02 · Library"
          title="Photo &amp; video library."
        />
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
          <p
            className="mt-5 max-w-[640px]"
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: 1.55,
              color: "rgba(15,28,46,0.55)",
            }}
          >
            A working archive of client portraits, event coverage, and network
            film. Click any video tile to play.
          </p>
        </div>
      </section>

      <MasonryGallery />

      {/* ── DO / DON'T — navy, bigger, 3 principles each ── */}
      <section
        className="pt-20 md:pt-28 pb-24 md:pb-32"
        style={{ backgroundColor: "#0f1c2e" }}
      >
        <SectionHeading
          eyebrow="03 · Principles"
          title="Three rules, three anti-rules."
          dark
        />

        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Do */}
          <div>
            <Eyebrow color="rgba(77, 184, 173, 0.85)">Do</Eyebrow>
            <div className="mt-8 space-y-10">
              {doList.map((item, i) => (
                <div key={item.title} className="flex gap-5">
                  <span
                    className="shrink-0"
                    style={{
                      fontFamily:
                        "var(--sans-label, 'Roboto Mono', monospace)",
                      fontSize: "13px",
                      letterSpacing: "0.12em",
                      color: "rgba(77, 184, 173, 0.55)",
                      lineHeight: 1.4,
                      paddingTop: 4,
                    }}
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--sans)",
                        fontWeight: 500,
                        fontSize: "clamp(20px, 1.9vw, 24px)",
                        letterSpacing: "-0.015em",
                        lineHeight: 1.2,
                        color: "#f5f4f0",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mt-3"
                      style={{
                        fontFamily: "var(--sans)",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: 1.6,
                        color: "rgba(245,244,240,0.7)",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Don't */}
          <div>
            <Eyebrow color="rgba(217, 128, 136, 0.85)">Don&rsquo;t</Eyebrow>
            <div className="mt-8 space-y-10">
              {dontList.map((item, i) => (
                <div key={item.title} className="flex gap-5">
                  <span
                    className="shrink-0"
                    style={{
                      fontFamily:
                        "var(--sans-label, 'Roboto Mono', monospace)",
                      fontSize: "13px",
                      letterSpacing: "0.12em",
                      color: "rgba(217, 128, 136, 0.55)",
                      lineHeight: 1.4,
                      paddingTop: 4,
                    }}
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--sans)",
                        fontWeight: 500,
                        fontSize: "clamp(20px, 1.9vw, 24px)",
                        letterSpacing: "-0.015em",
                        lineHeight: 1.2,
                        color: "#f5f4f0",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mt-3"
                      style={{
                        fontFamily: "var(--sans)",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: 1.6,
                        color: "rgba(245,244,240,0.7)",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO LIBRARY ACCESS LINK — crisp card ── */}
      <section
        className="pt-20 md:pt-28 pb-24 md:pb-32"
        style={{ backgroundColor: "#f5f4f0" }}
      >
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
          <div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12 pt-10 md:pt-12 border-t"
            style={{ borderColor: "rgba(15,28,46,0.18)" }}
          >
            <div className="max-w-[640px]">
              <Eyebrow>04 · Access</Eyebrow>
              <h2
                className="mt-4"
                style={{
                  fontFamily: "var(--sans)",
                  fontWeight: 500,
                  fontSize: "clamp(28px, 3.2vw, 40px)",
                  letterSpacing: "-0.015em",
                  lineHeight: 1.05,
                  color: "#0f1c2e",
                }}
              >
                Shared asset library.
              </h2>
              <p
                className="mt-5"
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "rgba(15,28,46,0.55)",
                }}
              >
                Client portraits, event coverage, brand film, and approved
                stock. Centralized, rights-cleared, ready to use.
              </p>
            </div>

            <a
              href="https://docs.google.com/document/d/1T7EDvFOQewsl_C_OowdFnfWjxIrBqQHvvg8Z2TZVuWo/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group shrink-0"
              style={{
                fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
                fontSize: "12px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#1D5AA7",
                borderBottom: "2px solid rgba(29,90,167,0.25)",
                paddingBottom: 6,
                transition: "border-color 0.2s ease",
              }}
            >
              Open Library
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <NextSectionLink title="Templates" href="/templates" />
    </>
  );
}
