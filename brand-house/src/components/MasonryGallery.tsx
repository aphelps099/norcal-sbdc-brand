"use client";

import { useEffect, useRef, useState } from "react";

// ─── Brand color overlays ─────────────────────────────────────────────────────
type OV = "navy" | "royal" | "coral";
const C: Record<OV, string> = {
  navy:  "15,28,46",
  royal: "29,90,167",
  coral: "196,84,58",
};

// ─── Tile ─────────────────────────────────────────────────────────────────────
function Tile({
  src, alt, label, pos = "center", ov = "navy",
}: {
  src: string; alt: string; label?: string; pos?: string; ov?: OV;
}) {
  return (
    <div className="gallery-tile group relative overflow-hidden h-full w-full"
         style={{ opacity: 0, transform: "translateY(20px)" }}>
      <img src={src} alt={alt} loading="lazy"
           className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
           style={{ objectPosition: pos }} />
      {/* Permanent gradient from bottom — always colored */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: `linear-gradient(to top, rgba(${C[ov]},0.72) 0%, rgba(${C[ov]},0.15) 50%, transparent 100%)` }} />
      {/* Hover: full wash */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
           style={{ background: `rgba(${C[ov]},0.38)`, mixBlendMode: "multiply" }} />
      {label && (
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
          <span className="font-label text-[10px] uppercase tracking-[0.16em] text-white/90">{label}</span>
        </div>
      )}
    </div>
  );
}

// ─── Self-hosted video tile ───────────────────────────────────────────────────
function VideoTile({ src }: { src: string }) {
  return (
    <div className="gallery-tile relative overflow-hidden h-full w-full"
         style={{ opacity: 0, transform: "translateY(20px)" }}>
      <video autoPlay muted loop playsInline className="w-full h-full object-cover object-center">
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[rgba(15,28,46,0.25)] pointer-events-none" />
    </div>
  );
}

// ─── YouTube tile ─────────────────────────────────────────────────────────────
// Shows the HD thumbnail with a play button. Click loads the iframe.
function YTTile({
  videoId, label, ov = "navy",
}: {
  videoId: string; label?: string; ov?: OV;
}) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  const thumbFallback = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="gallery-tile group relative overflow-hidden h-full w-full cursor-pointer"
         style={{ opacity: 0, transform: "translateY(20px)" }}
         onClick={() => setPlaying(true)}>
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
          title={label ?? "NorCal SBDC Video"}
        />
      ) : (
        <>
          {/* Thumbnail */}
          <img
            src={thumb}
            alt={label ?? "Video"}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            onError={(e) => { (e.target as HTMLImageElement).src = thumbFallback; }}
          />
          {/* Brand color gradient */}
          <div className="absolute inset-0 pointer-events-none"
               style={{ background: `linear-gradient(to top, rgba(${C[ov]},0.70) 0%, rgba(${C[ov]},0.12) 55%, transparent 100%)` }} />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center
                            transition-all duration-300 group-hover:bg-white/35 group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-0.5">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          {/* Label */}
          {label && (
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
              <span className="font-label text-[10px] uppercase tracking-[0.16em] text-white/90">{label}</span>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ─── Row builders ─────────────────────────────────────────────────────────────
// Every row gets an explicit pixel height so tiles never stretch or collapse.

const G = "2px"; // gap

/** 4 equal columns */
function Row4({
  tiles, h,
}: {
  tiles: React.ReactNode[];
  h: string;
}) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: G, height: h }}>
      {tiles}
    </div>
  );
}

/** 3 equal columns */
function Row3({ tiles, h }: { tiles: React.ReactNode[]; h: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: G, height: h }}>
      {tiles}
    </div>
  );
}

/** 2 equal columns */
function Row2({ tiles, h }: { tiles: React.ReactNode[]; h: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: G, height: h }}>
      {tiles}
    </div>
  );
}

/** Full-width single photo */
function Row1({ tile, h }: { tile: React.ReactNode; h: string }) {
  return (
    <div style={{ height: h }}>
      {tile}
    </div>
  );
}

// ─── Heights ──────────────────────────────────────────────────────────────────
const SQ   = "clamp(260px, 30vw, 460px)";  // ~1:1, used for 2-col
const TALL = "clamp(300px, 36vw, 520px)";  // used for 1-col hero
const LG   = "clamp(220px, 26vw, 380px)";  // 3- and 4-col rows
const VID  = "clamp(260px, 28vw, 420px)";  // video strip

// ─── Main component ───────────────────────────────────────────────────────────
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
          onEnter: b => gsap.to(b, { opacity:1, y:0, stagger:0.05, duration:0.7, ease:"power3.out" }),
          start: "top 94%",
        });
      }, ref.current);
    }
    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={ref} className="bg-[#0f1c2e]"
             style={{ display: "flex", flexDirection: "column", gap: G }}>

      {/* 1 — 4-col */}
      <Row4 h={LG} tiles={[
        <Tile key="a" src="https://www.norcalsbdc.org/wp-content/uploads/sites/32/2026/03/Michelle-8-1-2.jpeg"
              alt="Michelle — After-School Snack Attack" label="After-School Snack Attack" pos="center 20%" ov="navy" />,
        <Tile key="b" src="https://www.norcalsbdc.org/wp-content/uploads/sites/26/2025/11/Angel-Cha-Cha-Sweets-1-970x1200.jpeg"
              alt="Angel — Cha-Cha Sweets" label="Cha-Cha Sweets" pos="center 25%" ov="coral" />,
        <Tile key="c" src="https://www.norcalsbdc.org/wp-content/uploads/sites/32/2026/02/Martinien-Cho-CEO-Mechi-900x1200.jpeg"
              alt="Martinien — Mechi Wellness" label="Mechi Wellness" pos="center 15%" ov="royal" />,
        <Tile key="d" src="https://lh3.googleusercontent.com/pw/AP1GczMYzkhqGE_G40QFOoQ9ID8cwo_d8HbRjaDEQoMdqXh-ewCVBnu12KKYyeMWJHxUSlaBErDw3xmsSSdQPq-oBB0bXEyoQqlbbKOfXgGxVo_oD4g7QG34fD7Cme_gW5sIC5flUEMxMSrgHMARFOPnMuSn=w1353-h900-s-no-gm"
              alt="Rancher with cattle" label="NorCal SBDC Client" pos="center 35%" ov="navy" />,
      ]} />

      {/* 2 — 2-col */}
      <Row2 h={SQ} tiles={[
        <Tile key="a" src="https://lh3.googleusercontent.com/pw/AP1GczMZYn9VzciIvhfESsX47KnHcOhLkJZIY3fGkqi5DJ8Y7cSi8NbG37M7EG0ETqHDFvhdTPBvMqXjn31oO1nIbxh5wA3TqwCt3hD0iIaHY2cVkdqsA3SqsVk6oKKiJuJ0LJVRW8xgPy-TRsIf333Wo6nr=w1350-h900-s-no-gm"
              alt="Boutique owner" label="NorCal SBDC Client" pos="center 30%" ov="royal" />,
        <Tile key="b" src="https://www.norcalsbdc.org/wp-content/uploads/sites/9/2024/07/2024-Client-Success-Story-Yarrow-Goods-Owners.jpeg"
              alt="Yarrow Goods owners" label="Yarrow Goods" pos="center 30%" ov="coral" />,
      ]} />

      {/* 3 — 1-col hero: NorCal SBDC team */}
      <Row1 h={TALL} tile={
        <Tile src="https://lh3.googleusercontent.com/pw/AP1GczOeurD4MZ-MPLDJ2HZ2bqf_O7WLIbORZku946LTTpO0nLzsIqtv3nhl5RrsXMhx6OezXE69OXza2YfHnt1xuBa2LkW63hPM-fUD3abLDMIiSP_HbPM1qymVmY9OlHR4zVTX36qj7-9Cj3qTOLzP9Fid=w1200-h900-s-no-gm"
              alt="NorCal SBDC advisors team" label="NorCal SBDC Network" pos="center 35%" ov="navy" />
      } />

      {/* 4 — 4-col */}
      <Row4 h={LG} tiles={[
        <Tile key="a" src="https://www.norcalsbdc.org/wp-content/uploads/sites/13/2026/02/Laila-Pic-1200x1181.png"
              alt="Laila — From Oven to Online" label="From Oven to Online" pos="center 20%" ov="coral" />,
        <Tile key="b" src="https://www.norcalsbdc.org/wp-content/uploads/sites/13/2025/07/thumbnail_Nivedita-in-lab-with-Takehiro-1200x675.jpg"
              alt="Kamet Automation lab" label="Kamet Automation" pos="center 40%" ov="royal" />,
        <Tile key="c" src="https://www.norcalsbdc.org/wp-content/uploads/sites/13/2025/08/Carmen_Jimenez.png"
              alt="Carmen — El Papalote" label="El Papalote Childcare" pos="center 20%" ov="navy" />,
        <Tile key="d" src="https://www.norcalsbdc.org/wp-content/uploads/sites/9/2026/01/2026-Q1-HOHM-Pantry-pic-3-1200x900.jpeg"
              alt="HOHM Pantry" label="HOHM Pantry" pos="center 40%" ov="coral" />,
      ]} />

      {/* 5 — 2-col */}
      <Row2 h={SQ} tiles={[
        <Tile key="a" src="https://www.norcalsbdc.org/wp-content/uploads/sites/9/2025/09/Inside-with-cars-1200x900.jpg"
              alt="Marin Auto Works" label="Marin Auto Works" pos="center 50%" ov="navy" />,
        <Tile key="b" src="https://lh3.googleusercontent.com/pw/AP1GczMf-e74lJq-5gj59KmJLM625VhnlScyQfkCO0ooMmsgT8LT19uk5stB_vrE1qUEFSVoASEmxN1pIF6oWi9C9QubK46H1HmXYxArDeazR_-53zkyLrf7iB3b8EI7ftfFjPHajclRXjTttQMs0Z6lx38j=w1350-h900-s-no-gm"
              alt="Kitchenware boutique owner" label="NorCal SBDC Client" pos="center 35%" ov="royal" />,
      ]} />

      {/* 6 — self-hosted video full-bleed (Emerge 2024) */}
      <Row1 h={VID} tile={<VideoTile src="https://www.norcalsbdc.org/wp-content/uploads/2025/05/emerge-24-footage2.mp4" />} />

      {/* 6b — 3-col YouTube row */}
      <Row3 h={VID} tiles={[
        <YTTile key="yt1" videoId="lBA9wkQ-Wto" label="Let's Make It Happen" ov="navy" />,
        <YTTile key="yt2" videoId="5s8fBXxKaJc" label="YBP 2025" ov="royal" />,
        <YTTile key="yt3" videoId="4IIVTZ-vBSs" label="NorCal SBDC" ov="coral" />,
      ]} />

      {/* 7 — 3-col */}
      <Row3 h={LG} tiles={[
        <Tile key="a" src="https://www.norcalsbdc.org/wp-content/uploads/sites/33/2025/12/Communication-Academy-Picture.png"
              alt="Communication Academy" label="Communication Academy" pos="center 30%" ov="coral" />,
        <Tile key="b" src="https://www.norcalsbdc.org/wp-content/uploads/sites/26/2025/08/514102730_1320470006753296_6172554395172527438_n-1-1200x1200.jpg"
              alt="Napa Makers Accelerator" label="Napa Makers" pos="center 40%" ov="navy" />,
        <Tile key="c" src="https://www.norcalsbdc.org/wp-content/uploads/sites/13/2025/08/Avi-1200x1200.jpg"
              alt="Avi — Riskin Electric" label="Riskin Electric" pos="center 20%" ov="royal" />,
      ]} />

      {/* 8 — 2-col */}
      <Row2 h={SQ} tiles={[
        <Tile key="a" src="https://lh3.googleusercontent.com/pw/AP1GczNqX8venrWJNNAUJ72mQZLsGHBtY1cttVx2ohU76a-dFwZFYLbfxJjKLNhCeHRH33PvMVmuD3NfLFfDujRt51dXDCPsCYB6cj0g63h97E8KDMBZEIuXLKs3TQkDLqcbYCBGdaiIyXtHced3GWuqFBwz=w1215-h900-s-no-gm"
              alt="Peas of Mind food entrepreneur" label="NorCal SBDC Client" pos="center 40%" ov="royal" />,
        <Tile key="b" src="https://www.norcalsbdc.org/wp-content/uploads/sites/32/2026/01/ThistleTonic-IMG_0342-900x1200.jpeg"
              alt="Thistle & Tonic" label="Thistle & Tonic" pos="center 30%" ov="coral" />,
      ]} />

      {/* 9 — 4-col */}
      <Row4 h={LG} tiles={[
        <Tile key="a" src="/photos/seal-rock-dental.jpg"
              alt="Seal Rock Dental" label="Seal Rock Dental" pos="center 40%" ov="navy" />,
        <Tile key="b" src="https://www.norcalsbdc.org/wp-content/uploads/sites/5/2025/07/Sweet-Bean-Coffee-feat-image.png"
              alt="Sweet Bean Coffee" label="Sweet Bean Coffee" pos="center 40%" ov="royal" />,
        <Tile key="c" src="/photos/rep-it-out.jpg"
              alt="Rep It Out" label="Rep It Out" pos="center 40%" ov="coral" />,
        <Tile key="d" src="https://www.norcalsbdc.org/wp-content/uploads/sites/33/2026/03/Oberit-Founder-Headshot-1.png"
              alt="Oberit founder" label="Oberit, Inc." pos="center 15%" ov="navy" />,
      ]} />

      {/* 10 — 1-col hero: Peas of Mind close-up */}
      <Row1 h={TALL} tile={
        <Tile src="https://www.norcalsbdc.org/wp-content/uploads/sites/26/2025/11/Angel-Cha-Cha-Sweets-1-970x1200.jpeg"
              alt="Angel — Cha-Cha Sweets close" label="Cha-Cha Sweets" pos="center 15%" ov="coral" />
      } />

      {/* 11 — 3-col */}
      <Row3 h={LG} tiles={[
        <Tile key="a" src="https://www.norcalsbdc.org/wp-content/uploads/2025/11/joulrse-1200x1102.jpeg"
              alt="ReJoule" label="ReJoule" pos="center 40%" ov="royal" />,
        <Tile key="b" src="/photos/circosphere.jpg"
              alt="Circosphere" label="Circosphere" pos="center 40%" ov="navy" />,
        <Tile key="c" src="https://www.norcalsbdc.org/wp-content/uploads/sites/33/2025/08/Glory-Grove-Luffa-Sponge-3-900x1200.jpg"
              alt="Glory Grove Organics" label="Glory Grove Organics" pos="center 40%" ov="coral" />,
      ]} />

      {/* 12 — 2-col */}
      <Row2 h={SQ} tiles={[
        <Tile key="a" src="/photos/marin-auto.jpg"
              alt="Marin Auto Works exterior" label="Marin Auto Works" pos="center 50%" ov="navy" />,
        <Tile key="b" src="https://lh3.googleusercontent.com/pw/AP1GczNJlI3RKBrz7pJY4BpRJifyKFOx8DiSPC5eqosvUwE4VMgQSp6zhAxC0zqmF3pZpIhhySgBfXRSx35GnGE6ydva7tXb-JWClHTm-dfzmM_mbV7OCZgpwBHDvQ9ewyuWN0pQf8otEKVQD4QKvFUYGZrR=w1302-h900-s-no-gm"
              alt="Tour operator — Platypus Tours" label="NorCal SBDC Client" pos="center 35%" ov="royal" />,
      ]} />

      {/* 13 — 4-col final */}
      <Row4 h={LG} tiles={[
        <Tile key="a" src="https://www.norcalsbdc.org/wp-content/uploads/sites/26/2025/08/IMG_4495-1200x800.jpg"
              alt="Vintner's Diary" label="Vintner's Diary" pos="center 50%" ov="coral" />,
        <Tile key="b" src="https://www.norcalsbdc.org/wp-content/uploads/sites/33/2026/03/Oberit-Founder-Headshot-1.png"
              alt="Oberit founder" label="Oberit, Inc." pos="center 15%" ov="navy" />,
        <Tile key="c" src="https://www.norcalsbdc.org/wp-content/uploads/sites/13/2025/08/Carmen_Jimenez.png"
              alt="Carmen Jimenez" label="El Papalote Childcare" pos="center 20%" ov="royal" />,
        <Tile key="d" src="/photos/rejoule.jpg"
              alt="ReJoule" label="ReJoule" pos="center 40%" ov="coral" />,
      ]} />

    </section>
  );
}
