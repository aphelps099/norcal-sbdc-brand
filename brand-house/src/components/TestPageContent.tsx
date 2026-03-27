"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

/* ═══════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════ */

const serviceCards = [
  {
    eyebrow: "1:1 Strategic Advising",
    title: "Your Business — Funded.",
    body: "Your advisor. Your plan. Weekly conversations.",
    cta: "Book Session",
    href: "#",
  },
  {
    eyebrow: "Capital Access",
    title: "Your Business — Funded.",
    body: "Loans, grants, investors. We connect capital.",
    cta: "Find Funding",
    href: "#",
  },
  {
    eyebrow: "Hands-On Training",
    title: "Your Business — Connected.",
    body: "Workshops, courses, cohorts. Learn by doing.",
    cta: "Explore",
    href: "#",
  },
];

const brandResources = [
  { title: "Colors", description: "Palette, tints, and accessible pairings.", href: "/colors" },
  { title: "Typography", description: "Tiempos + Proxima Nova type system.", href: "/typography" },
  { title: "Logos", description: "Logo suite, lockups, clear space.", href: "/logos" },
  { title: "Voice & Tone", description: "How we write and speak.", href: "/voice" },
  { title: "Photography", description: "Style, treatments, composition.", href: "#" },
  { title: "Templates", description: "Layouts, copy blocks, docs.", href: "/templates" },
  { title: "Presentations", description: "Slide decks and frameworks.", href: "#" },
  { title: "Social Media", description: "Formats, captions, posting guides.", href: "#" },
];

const clientCards = [
  { name: "N3N", category: "Ed Tech", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80&fit=crop" },
  { name: "Sonomotion", category: "MedTech", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80&fit=crop" },
  { name: "SE3D", category: "Ed Tech", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80&fit=crop" },
  { name: "GuideOn", category: "Ed Tech", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80&fit=crop" },
  { name: "XTherma", category: "CleanTech", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&fit=crop" },
  { name: "Lendsnap", category: "FinTech", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&fit=crop" },
];

const footerLinks = [
  { label: "Team", href: "#" },
  { label: "Impact", href: "#" },
  { label: "Apply", href: "#" },
  { label: "LinkedIn", href: "#" },
];

/* ═══════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════ */

export default function TestPageContent() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!pageRef.current) return;

      gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".test-reveal").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 30 },
            {
              opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 85%", once: true },
            }
          );
        });
      }, pageRef.current);
    }
    init();
  }, []);

  return (
    <div ref={pageRef}>
      {/* ═══════════════════════════════════════════
          SECTION 1 — DARK HERO
          ═══════════════════════════════════════════ */}
      <section className="relative bg-navy min-h-[90vh] flex items-center overflow-hidden">
        {/* Subtle diagonal accent */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-bl from-royal/8 to-transparent" />

        <div className="relative z-10 max-w-[780px] mx-auto px-8 md:px-12 py-32 md:py-40">
          <nav className="flex items-center gap-8 mb-16">
            {["Grow", "Impact", "People", "NorCal", "En / Es"].map((item) => (
              <span key={item} className="font-sans text-[11px] font-800 uppercase tracking-[0.15em] text-white/30">
                {item}
              </span>
            ))}
          </nav>

          <h1
            className="test-reveal font-serif text-white leading-[1.06] tracking-[-0.03em] mb-8"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
          >
            What&rsquo;s free advice worth?<br />
            $547 million, <em className="italic text-coral-light">last year.</em>
          </h1>

          <div className="test-reveal space-y-3 mb-10">
            <p className="font-sans text-white/50 text-base font-500 leading-relaxed max-w-md">
              In 2025, SBDC helped unlock $547M in capital.<br />
              It cost our clients nothing.
            </p>
            <p className="font-sans text-white/70 text-sm font-800">
              100% confidential. 100% free.
            </p>
          </div>

          <div className="test-reveal">
            <a
              href="#"
              className="inline-block px-8 py-3.5 bg-strawberry text-white font-sans text-sm font-800 uppercase tracking-[0.1em] rounded-sm hover:bg-strawberry/90 transition-colors duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — MEET YOUR BUSINESS PEOPLE
          ═══════════════════════════════════════════ */}
      <section className="bg-white">
        <div className="max-w-[1100px] mx-auto px-8 md:px-12 py-28 md:py-40">
          <h2
            className="test-reveal font-serif text-navy text-center leading-[1.1] tracking-[-0.03em] mb-16"
            style={{ fontSize: "clamp(30px, 4.5vw, 52px)" }}
          >
            Meet Your Business People.
          </h2>

          <div className="test-reveal grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-20 items-center">
            {/* Left — text */}
            <div>
              <p className="font-sans text-base text-text-secondary font-500 leading-relaxed mb-6">
                Since 1980, SBDC advisors have helped Northern California
                businesses raise $2.8B in capital, create 42,000+ jobs, and
                turn kitchen-table ideas into million-dollar companies.
              </p>
              {/* Dot nav */}
              <div className="flex gap-2 mt-8">
                <span className="w-2.5 h-2.5 rounded-full bg-navy" />
                <span className="w-2.5 h-2.5 rounded-full bg-navy/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-navy/15" />
              </div>
            </div>

            {/* Right — photo placeholder */}
            <div className="bg-[#f0f0ed] rounded-lg aspect-[4/3] flex items-center justify-center">
              <span className="font-sans text-[11px] font-800 uppercase tracking-[0.15em] text-navy/15">
                Trusted Face
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — YOUR BUSINESS CONNECTED (SERVICE CARDS)
          ═══════════════════════════════════════════ */}
      <section className="bg-white border-t border-navy/6">
        <div className="max-w-[1100px] mx-auto px-8 md:px-12 py-24 md:py-32">
          <h2
            className="test-reveal font-serif text-navy text-center leading-[1.1] tracking-[-0.03em] mb-14"
            style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
          >
            Your Business — <em className="italic">Connected.</em>
          </h2>

          <div className="test-reveal grid grid-cols-1 md:grid-cols-3 gap-4">
            {serviceCards.map((card, i) => (
              <div
                key={i}
                className="group bg-navy rounded-lg p-7 md:p-8 flex flex-col justify-between min-h-[240px] hover:bg-navy-deep transition-colors duration-300"
              >
                <div>
                  <span className="font-sans text-[10px] font-800 uppercase tracking-[0.15em] text-pool/60 mb-3 block">
                    {card.eyebrow}
                  </span>
                  <h3 className="font-serif text-white text-lg leading-snug mb-2">
                    {card.title}
                  </h3>
                  <p className="font-sans text-white/40 text-sm font-500 leading-relaxed">
                    {card.body}
                  </p>
                </div>
                <a
                  href={card.href}
                  className="inline-flex items-center gap-2 mt-6 font-sans text-[11px] font-800 uppercase tracking-[0.12em] text-strawberry hover:text-strawberry/80 transition-colors"
                >
                  {card.cta}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — DON'T SETTLE (SPLIT)
          ═══════════════════════════════════════════ */}
      <section className="bg-white">
        <div className="max-w-[1100px] mx-auto px-8 md:px-12 py-24 md:py-36">
          <div className="test-reveal grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left — video placeholder */}
            <div className="bg-[#e8e4df] rounded-lg aspect-[4/3] flex items-center justify-center">
              <span className="font-sans text-[11px] font-800 uppercase tracking-[0.15em] text-navy/15">
                Brand Video
              </span>
            </div>

            {/* Right — text */}
            <div>
              <h2
                className="font-serif text-navy leading-[1.1] tracking-[-0.02em] mb-5"
                style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
              >
                Don&rsquo;t settle for<br />generic advice.
              </h2>
              <p className="font-sans text-base text-text-secondary font-500 leading-relaxed mb-6">
                You get a dedicated advisor who knows your industry,
                understands Northern California&rsquo;s market, and commits
                to your long-term success.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 border border-navy rounded-sm font-sans text-[11px] font-800 uppercase tracking-[0.12em] text-navy hover:bg-navy hover:text-white transition-all duration-300"
              >
                Read Stories
              </a>

              {/* Testimonial */}
              <div className="mt-10 pt-8 border-t border-navy/8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-navy/10 flex-shrink-0" />
                  <div>
                    <p className="font-sans text-[13px] text-text-secondary font-500 leading-relaxed italic">
                      &ldquo;Business content is professional, powerful, short but compelling.
                      Real admiration. Every bit feels polished to perfection.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — REAL CLIENTS. REAL RESULTS. (STORY CARDS)
          ═══════════════════════════════════════════ */}
      <section className="bg-white border-t border-navy/6">
        <div className="max-w-[1100px] mx-auto px-8 md:px-12 py-24 md:py-32">
          <div className="test-reveal flex items-end justify-between mb-12">
            <div>
              <h2
                className="font-serif text-navy leading-[1.08] tracking-[-0.02em]"
                style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
              >
                Real Clients.<br />Real Results.
              </h2>
              <p className="font-sans text-sm text-text-secondary font-500 mt-3">
                It can be scary waiting for<br />results. Our clients don&rsquo;t wait —<br />they trust your advisor.
              </p>
            </div>
            <div className="hidden md:flex gap-2">
              <span className="w-2 h-2 rounded-full bg-navy" />
              <span className="w-2 h-2 rounded-full bg-navy/15" />
              <span className="w-2 h-2 rounded-full bg-navy/15" />
            </div>
          </div>

          <div className="test-reveal grid grid-cols-2 md:grid-cols-4 gap-3">
            {["Story 1", "Story 2", "Story 3", "Story 4"].map((label, i) => (
              <div
                key={label}
                className={`rounded-lg aspect-[3/4] flex items-center justify-center ${
                  i === 3 ? "border-2 border-royal/30 bg-white" : "bg-[#f0f0ed]"
                }`}
              >
                <span className="font-sans text-[11px] font-800 uppercase tracking-[0.15em] text-navy/15">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — CLIENTS FOLIO GRID
          ═══════════════════════════════════════════ */}
      <section className="bg-navy">
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 py-24 md:py-32">
          <h2
            className="test-reveal font-serif text-white text-center leading-[1.08] tracking-[-0.03em] mb-4"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
          >
            Clients
          </h2>
          <div className="test-reveal flex justify-center gap-4 mb-14">
            <span className="font-sans text-[11px] font-800 uppercase tracking-[0.15em] text-white/30 hover:text-white/60 cursor-pointer transition-colors">
              Filter →
            </span>
          </div>

          <div className="test-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {clientCards.map((client) => (
              <a
                key={client.name}
                href="#"
                className="group relative rounded-lg overflow-hidden aspect-[4/3] block"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Category tag */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded font-sans text-[9px] font-800 uppercase tracking-[0.12em] text-white/70">
                    {client.category}
                  </span>
                </div>

                {/* Name + arrow */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <h3 className="font-serif text-white text-2xl tracking-[-0.02em]">
                    {client.name}
                  </h3>
                  <span className="font-sans text-white/50 text-sm group-hover:text-white transition-colors">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7 — GET UNSTUCK + NEWSLETTER (SPLIT)
          ═══════════════════════════════════════════ */}
      <section className="bg-white border-t border-navy/6">
        <div className="max-w-[1100px] mx-auto px-8 md:px-12 py-24 md:py-32">
          <div className="test-reveal grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Left — Get Unstuck */}
            <div>
              <span className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-royal/50 mb-4 block">
                Become A Client
              </span>
              <h2
                className="font-serif text-navy leading-[1.1] tracking-[-0.02em] mb-5"
                style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
              >
                Get Unstuck
              </h2>
              <p className="font-sans text-sm text-text-secondary font-500 leading-relaxed mb-8">
                Whether your business is small, or you&rsquo;re still thinking about it,
                NorCal SBDC can help you succeed with free, confidential advising
                from someone who gets it.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-navy text-white rounded-sm font-sans text-[11px] font-800 uppercase tracking-[0.12em] hover:bg-royal transition-colors duration-300"
              >
                <span className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                </span>
                Watch Video
              </a>
            </div>

            {/* Right — Newsletter */}
            <div>
              <span className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-royal/50 mb-4 block">
                Stay Connected
              </span>
              <h2
                className="font-serif text-navy leading-[1.1] tracking-[-0.02em] mb-5"
                style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
              >
                Updates to Your Inbox
              </h2>
              <p className="font-sans text-sm text-text-secondary font-500 leading-relaxed mb-8">
                TFG is a tech startup&rsquo;s dream come true. A program of
                the Northern California SBDC, we&rsquo;re a top-rated tech business
                accelerating team for select tech companies.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-navy/15 rounded-sm font-sans text-sm font-500 text-navy placeholder:text-navy/30 outline-none focus:border-royal transition-colors"
                />
                <button className="px-5 py-3 bg-strawberry text-white font-sans text-[11px] font-800 uppercase tracking-[0.1em] rounded-sm hover:bg-strawberry/90 transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 8 — BRAND RESOURCES (4×2 GRID)
          ═══════════════════════════════════════════ */}
      <section className="bg-[#f7f7f5]">
        <div className="max-w-[780px] mx-auto px-8 md:px-12 py-24 md:py-32">
          <h2
            className="test-reveal font-serif text-navy text-center leading-[1.08] tracking-[-0.03em] mb-14"
            style={{ fontSize: "clamp(26px, 3.5vw, 38px)" }}
          >
            Brand Resources
          </h2>

          <div className="test-reveal">
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-navy/8">
              {brandResources.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group border-r border-b border-navy/8 p-5 md:p-6 hover:bg-white transition-colors duration-300"
                >
                  <h3 className="font-sans text-sm font-800 text-navy group-hover:text-royal transition-colors duration-300 mb-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[12px] text-text-tertiary font-500 leading-relaxed">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 9 — FOOTER (REFERENCE STYLE)
          ═══════════════════════════════════════════ */}
      <footer className="bg-navy-deep relative overflow-hidden">
        {/* Color accent bar */}
        <div className="flex h-[4px]">
          <div className="flex-1 bg-royal" />
          <div className="flex-1 bg-strawberry" />
          <div className="flex-1 bg-pool" />
        </div>

        <div className="max-w-[1100px] mx-auto px-8 md:px-12 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-20">
            {/* Left — nav + copyright */}
            <div>
              <div className="flex flex-col gap-1.5 mb-10">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-sans text-[13px] font-800 text-white/30 hover:text-white/70 uppercase tracking-[0.08em] transition-colors duration-300 py-0.5"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <p className="font-sans text-[10px] font-500 text-white/15 uppercase tracking-[0.1em]">
                &copy; 2012 — 2026 NorCal SBDC
              </p>
            </div>

            {/* Right — tagline + legal */}
            <div className="md:text-right">
              <p className="font-serif text-pool/60 text-xl md:text-2xl leading-snug tracking-[-0.01em] mb-10">
                Empowering startups,<br />
                Shaping the Future
              </p>
              <div className="flex flex-wrap gap-4 md:justify-end">
                {["Accessibility", "Privacy", "Terms & Conditions"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="font-sans text-[10px] font-500 text-white/15 hover:text-white/30 uppercase tracking-[0.1em] transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
