import { gradientGlossary } from "@/lib/page-gradients";
import InteriorHero from "@/components/InteriorHero";
import NextSectionLink from "@/components/NextSectionLink";
import SbdcWatermark from "@/components/SbdcWatermark";

const glossarySections = [
  {
    category: "Stakeholder Acronyms",
    terms: [
      {
        term: "SBA",
        definition:
          "U.S. Small Business Administration. Federal funding agency of the SBDC.",
      },
      {
        term: "SBDC",
        definition:
          "Small Business Development Center. A service center providing no-cost business advising.",
      },
      {
        term: "OSBDC",
        definition:
          "Office of Small Business Development Centers. Federal oversight of SBDCs within the SBA.",
      },
      {
        term: "ASBDC",
        definition:
          "America\u2019s Small Business Development Center. A membership organization of 62 SBDC Networks nationwide that provides collective professional development and a national voice in Washington, D.C.",
      },
      {
        term: "Cal Poly Humboldt\u2013SPF",
        definition:
          "Humboldt State University Sponsored Programs Foundation. Grant and research foundation that serves as fiscal host to the NorCal SBDC Network.",
      },
      {
        term: "GO-Biz",
        definition:
          "Governor\u2019s Office of Business and Economic Development. State agency that funds the SBDC Program through CIP and TAEP grants.",
      },
    ],
  },
  {
    category: "Grant Programs",
    terms: [
      {
        term: "CIP",
        definition:
          "Capital Infusion Program. A GO-Biz grant that funds direct one-on-one consulting for clients seeking capital or laying groundwork for future capital plans.",
      },
      {
        term: "TAP",
        definition:
          "Technical Assistance Program. A GO-Biz grant that extends the federal investment in California by expanding technical assistance funds \u2014 covers one-on-one advising, research, and a small percentage for marketing.",
      },
    ],
  },
  {
    category: "SBDC Program Terms",
    terms: [
      {
        term: "EI",
        definition: "Economic Impact. The measurable effect of SBDC services on client businesses and the broader economy.",
      },
      {
        term: "KPI",
        definition:
          "Key Performance Indicator. Another way to reference economic impacts within SBDC reporting.",
      },
      {
        term: "Attribution",
        definition:
          "A national SBDC accreditation standard required to claim economic impact. Consists of written proof that there was a change to the client business and that the SBDC played a role in the change.",
      },
      {
        term: "Third-Party Verification",
        definition:
          "A GO-Biz reporting requirement for CIP grant milestones of capital infusion or equity investment. Typically a copy of the first page of a loan or contract verifying the funder, business name, and dollar amount. Does not replace the need for Attribution.",
      },
    ],
  },
  {
    category: "Regional Program Acronyms",
    terms: [
      {
        term: "TFG",
        definition: "Tech Futures Group.",
      },
      {
        term: "FC",
        definition: "Finance Center.",
      },
      {
        term: "RP",
        definition: "Restaurant Program.",
      },
      {
        term: "CAHCC",
        definition: "California Hispanic Chambers of Commerce.",
      },
    ],
  },
  {
    category: "Finance Terms",
    terms: [
      {
        term: "FDIC",
        definition: "Federal Deposit Insurance Corporation.",
      },
      {
        term: "FDC",
        definition: "Financial Disclosure Agreement.",
      },
      {
        term: "FDI",
        definition: "Foreign Direct Investment.",
      },
      {
        term: "CC",
        definition: "Cash Credit.",
      },
      {
        term: "IRA",
        definition: "Individual Retirement Account.",
      },
    ],
  },
  {
    category: "Loan Terms",
    terms: [
      {
        term: "EIDL",
        definition: "Economic Injury Disaster Loan.",
      },
      {
        term: "PPP",
        definition: "Paycheck Protection Program.",
      },
      {
        term: "PUA",
        definition: "Pandemic Unemployment Assistance.",
      },
      {
        term: "7(a)",
        definition:
          "SBA\u2019s most common loan program. Includes financial help for small businesses with special requirements \u2014 covers working capital, debt refinancing, and equipment purchases. Best option when real estate is part of a business purchase.",
      },
      {
        term: "504",
        definition:
          "SBA program providing long-term, fixed-rate financing of up to $5 million for major fixed assets that promote business growth and job creation.",
      },
      {
        term: "SBA Microloan",
        definition:
          "Program providing loans up to $50,000 to help small businesses and certain not-for-profit childcare centers start up and expand. Average microloan is about $13,000.",
      },
    ],
  },
  {
    category: "SBDC Tools & Programs",
    terms: [
      {
        term: "IMS",
        definition: "Information Management System. Internal intranet for SBDC operations.",
      },
      {
        term: "CMS",
        definition: "Content Management System.",
      },
      {
        term: "CRM",
        definition:
          "Client Relationship Management. A database with client records to understand and manage the lifecycle of a business relationship.",
      },
      {
        term: "Neoserra",
        definition: "The NorCal SBDC network\u2019s CRM platform for client records and session tracking.",
      },
    ],
  },
];

export default function GlossaryPage() {
  return (
    <>
      <InteriorHero gradient={gradientGlossary}
        title="Glossary"
        subtitle="Terms, acronyms, and definitions used across the NorCal SBDC network. Keep this reference handy — consistent language builds trust."
      />

      <div className="bg-white py-16 md:py-24">
        {/* Intro */}
        <div className="max-w-[780px] mx-auto px-8 md:px-12 mb-20">
          <h2 className="font-serif text-2xl md:text-3xl text-navy tracking-[-0.02em] mb-6">
            Speak the Same Language
          </h2>
          <p className="font-sans text-lg md:text-xl text-text-secondary font-500 leading-[1.7] max-w-[640px]">
            From SBA to Neoserra, from CIP to 504 &mdash; our work is full of
            acronyms. This reference ensures every center, advisor, and partner
            uses the same definitions. When we speak clearly, our clients
            understand us better.
          </p>
        </div>

        {/* Glossary Sections */}
        <div className="max-w-[960px] mx-auto px-8 md:px-12">
          {glossarySections.map((section, sectionIdx) => (
            <div key={section.category} className={sectionIdx > 0 ? "mt-16" : ""}>
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-sans text-[11px] font-800 uppercase tracking-[0.15em] text-navy/40 shrink-0">
                  {section.category}
                </h2>
                <div className="flex-1 h-px bg-black/[0.06]" />
              </div>

              {/* Terms */}
              <div className="space-y-0">
                {section.terms.map((item, i) => (
                  <div
                    key={item.term}
                    className={`grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-8 py-5 ${
                      i < section.terms.length - 1
                        ? "border-b border-black/[0.04]"
                        : ""
                    }`}
                  >
                    <dt className="font-sans text-sm font-800 text-navy tracking-[-0.01em]">
                      {item.term}
                    </dt>
                    <dd className="font-sans text-sm text-text-secondary font-500 leading-relaxed">
                      {item.definition}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#0f1c2e] py-16 md:py-20 relative overflow-hidden">
        <SbdcWatermark className="absolute -right-[8%] top-[10%] w-[40vw] max-w-[500px] text-white pointer-events-none select-none" opacity={0.035} />
        <div className="max-w-[780px] mx-auto px-8 md:px-12">
          <h2
            className="tracking-[-0.02em] text-white/90 mb-6"
            style={{
              fontFamily: "'Tiempos Fine', 'Tiempos', Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(28px, 3.5vw, 40px)",
            }}
          >
            Quick Links
          </h2>
          <p className="font-sans text-base text-white/50 font-500 leading-relaxed mb-10 max-w-xl">
            Key resources and portals across the NorCal SBDC network.
          </p>

          <div className="space-y-0">
            {[
              {
                label: "Regional Website",
                url: "https://norcalsbdc.org",
              },
              {
                label: "California SBDC Facebook",
                url: "https://facebook.com/CaliforniaSBDC/",
              },
              {
                label: "California SBDC on X",
                url: "https://x.com/californiasbdc",
              },
              {
                label: "AskSBDC YouTube Channel",
                url: "https://youtube.com/c/ASKSBDC",
              },
              {
                label: "Webinar Library",
                url: "https://learn.norcalsbdc.org/home",
              },
            ].map((link, i) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between py-4 group no-underline ${
                  i < 4 ? "border-b border-white/[0.06]" : ""
                }`}
              >
                <span className="font-sans text-sm font-500 text-white/70 group-hover:text-[#8FC5D9] transition-colors duration-300">
                  {link.label}
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/20 group-hover:text-[#8FC5D9] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <NextSectionLink title="Colors" href="/colors" />
    </>
  );
}
