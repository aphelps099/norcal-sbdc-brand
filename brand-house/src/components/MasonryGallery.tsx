"use client";

import { useEffect, useRef } from "react";

// ─── Brand overlays ───────────────────────────────────────────────────────────
// Each photo gets a permanent color tint (30%) that deepens on hover (55%)

type Overlay = "navy" | "royal" | "coral";

const OV: Record<Overlay, string> = {
  navy:  "15,28,46",
  royal: "29,90,167",
  coral: "196,84,58",
};

function tint(c: Overlay, opacity: string) {
  return `rgba(${OV[c]},${opacity})`;
}

// ─── Single photo tile ────────────────────────────────────────────────────────

interface TileProps {
  src: string;
  alt: string;
  label?: string;
  pos?: string;
  ov?: Overlay;
  /** Extra className — pass "h-full" or a fixed height like "h-[320px]" */
  className?: string;
}

function Tile({ src, alt, label, pos = "center", ov = "navy", className = "" }: TileProps) {
  return (
    <div className={`gallery-tile group relative overflow-hidden ${className}`}
         style={{ opacity: 0, transform: "translateY(24px)" }}>
      <img
        src={src} alt={alt} loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        style={{ objectPosition: pos }}
      />
      {/* Permanent gradient from bottom */}
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-500"
           style={{ background: `linear-gradient(to top, ${tint(ov,"0.65")} 0%, ${tint(ov,"0.18")} 55%, transparent 100%)` }} />
      {/* Hover: full multiply wash */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
           style={{ background: tint(ov,"0.35"), mixBlendMode: "multiply" }} />
      {label && (
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
          <span className="font-label text-[10px] uppercase tracking-[0.16em] text-white/90">{label}</span>
        </div>
      )}
    </div>
  );
}

// ─── Video tile ───────────────────────────────────────────────────────────────

function VideoTile({ src, className = "" }: { src: string; className?: string }) {
  return (
    <div className={`gallery-tile relative overflow-hidden ${className}`}
         style={{ opacity: 0, transform: "translateY(24px)" }}>
      <video autoPlay muted loop playsInline className="w-full h-full object-cover">
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[rgba(15,28,46,0.28)] pointer-events-none" />
    </div>
  );
}

// ─── Gap constant ─────────────────────────────────────────────────────────────
const GAP = "2px";

// ─── Main grid ────────────────────────────────────────────────────────────────

export default function MasonryGallery() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      ref.current?.querySelectorAll<HTMLElement>(".gallery-tile")
        .forEach(el => { el.style.opacity = "1"; el.style.transform = "none"; });
      return;
    }
    let ctx: ReturnType<typeof import("gsap")["gsap"]["context"]> | undefined;
    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!ref.current) return;
      ctx = gsap.context(() => {
        ScrollTrigger.batch(".gallery-tile", {
          onEnter: batch => gsap.to(batch, { opacity:1, y:0, stagger:0.04, duration:0.7, ease:"power3.out" }),
          start: "top 94%",
        });
      }, ref.current);
    }
    init();
    return () => { ctx?.revert(); };
  }, []);

  // Row heights
  const H_SQUARE  = "clamp(260px, 32vw, 480px)";   // 1:1 reference
  const H_HALF    = "clamp(130px, 16vw, 240px)";    // half of square
  const H_WIDE    = "clamp(200px, 22vw, 340px)";    // 4:3-ish landscape row
  const H_CINE    = "clamp(180px, 20vw, 300px)";    // cinematic strip
  const H_VIDEO   = "clamp(260px, 30vw, 440px)";    // video break

  return (
    <section ref={ref} className="bg-[#0f1c2e]" style={{ display:"flex", flexDirection:"column", gap: GAP }}>

      {/* ══════════════════════════════════════════════════════════════════════
          ROW A — 2-col split
          Left:  big 1:1 photo  (1/3 width)
          Right: 2×2 four-cell grid (2/3 width)
          Total height = H_SQUARE
      ════════════════════════════════════════════════════════════════════════ */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 2fr", gap: GAP, height: H_SQUARE }}>

        {/* Left — big portrait */}
        <Tile
          src="https://www.norcalsbdc.org/wp-content/uploads/sites/32/2026/03/Michelle-8-1-2.jpeg"
          alt="Michelle — After-School Snack Attack" label="After-School Snack Attack"
          pos="center 20%" ov="navy" className="h-full"
        />

        {/* Right — 2×2 four-cell sub-grid */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gridTemplateRows:"1fr 1fr", gap: GAP }}>
          <Tile src="https://lh3.googleusercontent.com/pw/AP1GczMZYn9VzciIvhfESsX47KnHcOhLkJZIY3fGkqi5DJ8Y7cSi8NbG37M7EG0ETqHDFvhdTPBvMqXjn31oO1nIbxh5wA3TqwCt3hD0iIaHY2cVkdqsA3SqsVk6oKKiJuJ0LJVRW8xgPy-TRsIf333Wo6nr=w1350-h900-s-no-gm"
                alt="Boutique owner" label="NorCal SBDC Client" pos="center 30%" ov="royal" className="h-full" />
          <Tile src="https://www.norcalsbdc.org/wp-content/uploads/sites/26/2025/11/Angel-Cha-Cha-Sweets-1-970x1200.jpeg"
                alt="Angel — Cha-Cha Sweets" label="Cha-Cha Sweets" pos="center 25%" ov="coral" className="h-full" />
          <Tile src="https://www.norcalsbdc.org/wp-content/uploads/sites/9/2024/07/2024-Client-Success-Story-Yarrow-Goods-Owners.jpeg"
                alt="Yarrow Goods owners" label="Yarrow Goods" pos="center 30%" ov="navy" className="h-full" />
          <Tile src="https://www.norcalsbdc.org/wp-content/uploads/sites/13/2026/02/Laila-Pic-1200x1181.png"
                alt="Laila — From Oven to Online" label="From Oven to Online" pos="center 20%" ov="royal" className="h-full" />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          ROW B — 4 equal columns
          Height = H_WIDE
      ════════════════════════════════════════════════════════════════════════ */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap: GAP, height: H_WIDE }}>
        <Tile src="https://www.norcalsbdc.org/wp-content/uploads/sites/32/2026/02/Martinien-Cho-CEO-Mechi-900x1200.jpeg"
              alt="Martinien — Mechi Wellness" label="Mechi Wellness" pos="center 15%" ov="coral" className="h-full" />
        <Tile src="https://lh3.googleusercontent.com/pw/AP1GczMYzkhqGE_G40QFOoQ9ID8cwo_d8HbRjaDEQoMdqXh-ewCVBnu12KKYyeMWJHxUSlaBErDw3xmsSSdQPq-oBB0bXEyoQqlbbKOfXgGxVo_oD4g7QG34fD7Cme_gW5sIC5flUEMxMSrgHMARFOPnMuSn=w1353-h900-s-no-gm"
              alt="Rancher with cattle" label="NorCal SBDC Client" pos="center 35%" ov="navy" className="h-full" />
        <Tile src="https://www.norcalsbdc.org/wp-content/uploads/sites/13/2025/07/thumbnail_Nivedita-in-lab-with-Takehiro-1200x675.jpg"
              alt="Kamet Automation lab" label="Kamet Automation" pos="center 40%" ov="royal" className="h-full" />
        <Tile src="https://www.norcalsbdc.org/wp-content/uploads/sites/13/2025/08/Carmen_Jimenez.png"
              alt="Carmen — El Papalote" label="El Papalote Childcare" pos="center 20%" ov="coral" className="h-full" />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          ROW C — 2-col split (wide left / stacked right)
          Left:  big 1:1 (2/3 width)
          Right: 2 photos stacked (1/3 width), each H_HALF tall
          Total height = H_SQUARE
      ════════════════════════════════════════════════════════════════════════ */}
      <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap: GAP, height: H_SQUARE }}>

        {/* Left — hero wide */}
        <Tile src="https://lh3.googleusercontent.com/pw/AP1GczOeurD4MZ-MPLDJ2HZ2bqf_O7WLIbORZku946LTTpO0nLzsIqtv3nhl5RrsXMhx6OezXE69OXza2YfHnt1xuBa2LkW63hPM-fUD3abLDMIiSP_HbPM1qymVmY9OlHR4zVTX36qj7-9Cj3qTOLzP9Fid=w1200-h900-s-no-gm"
              alt="NorCal SBDC team" label="NorCal SBDC Team" pos="center 35%" ov="navy" className="h-full" />

        {/* Right — 2 stacked */}
        <div style={{ display:"grid", gridTemplateRows:"1fr 1fr", gap: GAP }}>
          <Tile src="https://www.norcalsbdc.org/wp-content/uploads/sites/9/2026/01/2026-Q1-HOHM-Pantry-pic-3-1200x900.jpeg"
                alt="HOHM Pantry" label="HOHM Pantry" pos="center 40%" ov="royal" className="h-full" />
          <Tile src="https://www.norcalsbdc.org/wp-content/uploads/sites/33/2025/12/Communication-Academy-Picture.png"
                alt="Communication Academy" label="Communication Academy" pos="center 30%" ov="coral" className="h-full" />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          ROW D — cinematic full-width strip  (4:3-ish)
      ════════════════════════════════════════════════════════════════════════ */}
      <div style={{ height: H_CINE }}>
        <Tile src="https://www.norcalsbdc.org/wp-content/uploads/sites/9/2025/09/Inside-with-cars-1200x900.jpg"
              alt="Marin Auto Works" label="Marin Auto Works" pos="center 50%" ov="navy" className="h-full w-full" />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          ROW E — 3 equal columns
      ════════════════════════════════════════════════════════════════════════ */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap: GAP, height: H_WIDE }}>
        <Tile src="https://www.norcalsbdc.org/wp-content/uploads/sites/13/2025/08/Carmen_Jimenez.png"
              alt="Carmen Jimenez" label="El Papalote Childcare" pos="center 20%" ov="royal" className="h-full" />
        <Tile src="https://lh3.googleusercontent.com/pw/AP1GczMf-e74lJq-5gj59KmJLM625VhnlScyQfkCO0ooMmsgT8LT19uk5stB_vrE1qUEFSVoASEmxN1pIF6oWi9C9QubK46H1HmXYxArDeazR_-53zkyLrf7iB3b8EI7ftfFjPHajclRXjTttQMs0Z6lx38j=w1350-h900-s-no-gm"
              alt="Kitchenware boutique owner" label="NorCal SBDC Client" pos="center 35%" ov="coral" className="h-full" />
        <Tile src="https://www.norcalsbdc.org/wp-content/uploads/sites/26/2025/08/514102730_1320470006753296_6172554395172527438_n-1-1200x1200.jpg"
              alt="Napa Makers Accelerator" label="Napa Makers" pos="center 40%" ov="navy" className="h-full" />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          ROW F — video full-bleed
      ════════════════════════════════════════════════════════════════════════ */}
      <div style={{ height: H_VIDEO }}>
        <VideoTile src="https://www.norcalsbdc.org/wp-content/uploads/2025/05/emerge-24-footage2.mp4" className="h-full w-full" />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          ROW G — 2-col split (mirrored from Row A)
          Left: 2 stacked (1/3 width)
          Right: big 1:1 (2/3 width)
      ════════════════════════════════════════════════════════════════════════ */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 2fr", gap: GAP, height: H_SQUARE }}>

        {/* Left — 2 stacked */}
        <div style={{ display:"grid", gridTemplateRows:"1fr 1fr", gap: GAP }}>
          <Tile src="https://www.norcalsbdc.org/wp-content/uploads/sites/32/2026/01/ThistleTonic-IMG_0342-900x1200.jpeg"
                alt="Thistle & Tonic" label="Thistle & Tonic" pos="center 30%" ov="coral" className="h-full" />
          <Tile src="https://www.norcalsbdc.org/wp-content/uploads/sites/13/2025/08/Avi-1200x1200.jpg"
                alt="Avi — Riskin Electric" label="Riskin Electric" pos="center 20%" ov="navy" className="h-full" />
        </div>

        {/* Right — hero */}
        <Tile src="https://lh3.googleusercontent.com/pw/AP1GczNqX8venrWJNNAUJ72mQZLsGHBtY1cttVx2ohU76a-dFwZFYLbfxJjKLNhCeHRH33PvMVmuD3NfLFfDujRt51dXDCPsCYB6cj0g63h97E8KDMBZEIuXLKs3TQkDLqcbYCBGdaiIyXtHced3GWuqFBwz=w1215-h900-s-no-gm"
              alt="Food entrepreneur — Peas of Mind" label="NorCal SBDC Client" pos="center 40%" ov="royal" className="h-full" />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          ROW H — 4 equal columns (final row)
      ════════════════════════════════════════════════════════════════════════ */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap: GAP, height: H_WIDE }}>
        <Tile src="/photos/seal-rock-dental.jpg"
              alt="Seal Rock Dental" label="Seal Rock Dental" pos="center 40%" ov="navy" className="h-full" />
        <Tile src="https://www.norcalsbdc.org/wp-content/uploads/sites/5/2025/07/Sweet-Bean-Coffee-feat-image.png"
              alt="Sweet Bean Coffee" label="Sweet Bean Coffee" pos="center 40%" ov="royal" className="h-full" />
        <Tile src="/photos/rep-it-out.jpg"
              alt="Rep It Out" label="Rep It Out" pos="center 40%" ov="coral" className="h-full" />
        <Tile src="https://www.norcalsbdc.org/wp-content/uploads/sites/33/2026/03/Oberit-Founder-Headshot-1.png"
              alt="Oberit founder" label="Oberit, Inc." pos="center 15%" ov="navy" className="h-full" />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          ROW I — 2-col: wide left landscape + narrow right portrait
      ════════════════════════════════════════════════════════════════════════ */}
      <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap: GAP, height: H_WIDE }}>
        <Tile src="/photos/marin-auto.jpg"
              alt="Marin Auto Works" label="Marin Auto Works" pos="center 50%" ov="coral" className="h-full" />
        <Tile src="https://www.norcalsbdc.org/wp-content/uploads/sites/26/2025/08/IMG_4495-1200x800.jpg"
              alt="Vintner's Diary" label="Vintner's Diary" pos="center 50%" ov="navy" className="h-full" />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          ROW J — 3-col final strip
      ════════════════════════════════════════════════════════════════════════ */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap: GAP, height: H_WIDE }}>
        <Tile src="https://www.norcalsbdc.org/wp-content/uploads/2025/11/joulrse-1200x1102.jpeg"
              alt="ReJoule" label="ReJoule" pos="center 40%" ov="royal" className="h-full" />
        <Tile src="/photos/circosphere.jpg"
              alt="Circosphere" label="Circosphere" pos="center 40%" ov="coral" className="h-full" />
        <Tile src="https://lh3.googleusercontent.com/pw/AP1GczNJlI3RKBrz7pJY4BpRJifyKFOx8DiSPC5eqosvUwE4VMgQSp6zhAxC0zqmF3pZpIhhySgBfXRSx35GnGE6ydva7tXb-JWClHTm-dfzmM_mbV7OCZgpwBHDvQ9ewyuWN0pQf8otEKVQD4QKvFUYGZrR=w1302-h900-s-no-gm"
              alt="Tour operator — Platypus Tours" label="NorCal SBDC Client" pos="center 35%" ov="navy" className="h-full" />
      </div>

    </section>
  );
}
