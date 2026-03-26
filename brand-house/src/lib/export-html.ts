import type { PageConfig, SectionConfig, HeroConfig, ManifestoConfig, ChapterConfig } from "./section-types";

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/* ═══ Hero (SRG) Export ═══ */
function exportHero(c: HeroConfig): string {
  const totalSlots = c.cols * c.rows;
  const colTemplate = c.colWidths.slice(0, c.cols).map(w => `${w}fr`).join(" ");
  const rowTemplate = c.rowHeightMode === "custom"
    ? c.rowHeights.slice(0, c.rows).map(h => `${h}fr`).join(" ")
    : `repeat(${c.rows}, 1fr)`;

  let cellsHTML = "";
  for (let i = 0; i < totalSlots; i++) {
    const cell = c.cells[i];
    if (cell?.src) {
      cellsHTML += `    <div class="srg-cell" style="background-image:url('${cell.src}');background-position:${cell.posX} ${cell.posY};background-size:cover"></div>\n`;
    } else {
      cellsHTML += `    <div class="srg-cell"></div>\n`;
    }
  }

  let vignetteHTML = "";
  if (c.enableVignette) {
    const r = parseInt(c.overlayColor.slice(1, 3), 16);
    const g = parseInt(c.overlayColor.slice(3, 5), 16);
    const b = parseInt(c.overlayColor.slice(5, 7), 16);
    const str = c.vignetteStrength / 100;
    const grads = [`radial-gradient(ellipse at center, rgba(${r},${g},${b},0) ${c.vignetteSpread}%, rgba(${r},${g},${b},${str}) 100%)`];
    const edg = c.edgeDarken / 100;
    if (edg > 0) {
      grads.push(`linear-gradient(to bottom, rgba(${r},${g},${b},${(edg * 0.6).toFixed(2)}) 0%, rgba(${r},${g},${b},0) 25%, rgba(${r},${g},${b},0) 75%, rgba(${r},${g},${b},${(edg * 0.6).toFixed(2)}) 100%)`);
    }
    vignetteHTML = `\n  <div class="srg-vignette" style="position:absolute;inset:0;z-index:2;pointer-events:none;background:${grads.join(", ")}"></div>`;
  }

  let textHTML = "";
  if (c.showText) {
    textHTML = `\n  <div style="position:absolute;inset:0;z-index:3;display:flex;flex-direction:column;align-items:center;justify-content:center;pointer-events:none">
    <div style="font-family:serif;font-size:clamp(28px,5vw,${c.headingSize}px);color:${c.textColor};text-shadow:0 2px 20px rgba(0,0,0,0.5);text-align:center;line-height:1.1">${esc(c.heading)}</div>
    <div style="font-family:system-ui;font-size:clamp(10px,1.2vw,${c.subSize}px);font-weight:500;text-transform:uppercase;letter-spacing:0.15em;color:${c.textColor};opacity:0.85;text-align:center;margin-top:4px">${esc(c.subhead)}</div>
  </div>`;
  }

  return `<div class="scroll-reveal-grid-hero" id="srgHero">
  <div class="srg-inner" style="position:relative;width:${c.enableInset ? `calc(100% - ${c.insetStart * 2}px)` : "100%"};aspect-ratio:${c.aspectRatio};background:${c.bgColor};border-radius:${c.enableInset ? c.insetRadius : c.containerRadius}px;overflow:hidden;margin:${c.enableInset ? c.insetStart : 0}px">
    <div class="srg-grid" style="display:grid;grid-template-columns:${colTemplate};grid-template-rows:${rowTemplate};gap:${c.gap}px;position:absolute;inset:0;z-index:1;${c.enableFade ? "opacity:0;" : ""}${c.skewX > 0 ? `transform:skewX(${c.skewX}deg)` : ""}">
${cellsHTML.trimEnd()}
    </div>${vignetteHTML}${textHTML}
  </div>
</div>
<style>
.scroll-reveal-grid-hero{position:relative;width:100%;overflow:hidden}
.srg-cell{background-size:cover;background-position:center;background-color:${c.bgColor === "#000000" ? "#111" : "#ddd"};${c.scaleStart < 1 ? `transform:scale(${c.scaleStart})` : ""}}
</style>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>
<script>
(function(){
  gsap.registerPlugin(ScrollTrigger);
  var hero=document.querySelector('#srgHero'),inner=hero.querySelector('.srg-inner'),grid=hero.querySelector('.srg-grid'),cells=hero.querySelectorAll('.srg-cell');
  var tl=gsap.timeline({scrollTrigger:{trigger:hero,${c.enablePin ? `pin:true,end:'+=\${c.pinDuration}%',` : "start:'top 80%',end:'bottom 20%',"}scrub:1}});
  ${c.enableInset ? `tl.to(inner,{margin:0,width:'100%',borderRadius:'${c.containerRadius}px',duration:0.4,ease:'none'},0);` : ""}
  ${c.enableFade || c.skewX > 0 ? `tl.to(grid,{${c.enableFade ? "opacity:1," : ""}${c.skewX > 0 ? "skewX:0," : ""}duration:0.4,ease:'none'},0.1);` : ""}
  ${c.scaleStart < 1 ? "cells.forEach(function(c,i){tl.to(c,{scale:1,duration:0.3,ease:'none'},0.15+i*0.03)});" : ""}
})();
</script>`;
}

/* ═══ Manifesto Export ═══ */
function exportManifesto(c: ManifestoConfig): string {
  const dur = c.animDuration / 1000;
  let staggerCSS = "";
  let animCSS = "";

  if (c.animType === "stagger-words") {
    staggerCSS = `.manifesto-word{display:inline-block;opacity:0;transform:translateY(12px);transition:opacity ${dur}s ease-out,transform ${dur}s ease-out}
.manifesto-text.is-visible .manifesto-word{opacity:1;transform:translateY(0)}`;
  } else if (c.animType === "fade-up") {
    animCSS = `@keyframes mFadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
.manifesto-text{opacity:0;animation:mFadeUp ${dur}s ease-out forwards}`;
  }

  const eyebrowStyleCSS = c.eyebrowStyle === "mono-upper"
    ? "font-family:monospace;font-weight:600;text-transform:uppercase;letter-spacing:0.18em"
    : "font-family:sans-serif;font-weight:300;letter-spacing:0.04em";

  const observerJS = c.animTrigger === "on-scroll" && c.animType === "stagger-words"
    ? `<script>(function(){var el=document.querySelector('.manifesto-text');if(!el)return;var words=el.querySelectorAll('.manifesto-word');words.forEach(function(w,i){w.style.transitionDelay=(i*${c.staggerDelay})+'ms'});var o=new IntersectionObserver(function(e){e.forEach(function(en){if(en.isIntersecting){el.classList.add('is-visible');o.disconnect()}})},{threshold:0.2});o.observe(el)})()</script>`
    : "";

  return `<style>
.manifesto-section{background:${c.bgColor};color:${c.textColor};min-height:70vh;display:flex;flex-direction:column;align-items:${c.alignment === "center" ? "center" : "flex-start"};justify-content:center;padding:${c.paddingTop}px 60px ${c.paddingBottom}px;text-align:${c.alignment};position:relative;overflow:hidden}
.manifesto-eyebrow{font-size:0.75rem;opacity:0.7;margin-bottom:28px;${eyebrowStyleCSS}}
.manifesto-text{font-family:serif;font-size:${c.fontSize}px;line-height:${c.lineHeight};letter-spacing:${c.letterSpacing}em;max-width:${c.maxWidth};color:${c.textColor}}
.manifesto-text .accent{color:${c.accentColor}}
${staggerCSS}${animCSS}
</style>
<section class="manifesto-section">
  ${c.eyebrowStyle !== "hidden" ? `<p class="manifesto-eyebrow">${esc(c.eyebrow)}</p>` : ""}
  <div class="manifesto-text">${c.editorHTML}</div>
  ${c.subtitle ? `<p style="font-size:1rem;margin-top:32px;opacity:0.6;max-width:600px">${esc(c.subtitle)}</p>` : ""}
</section>
${observerJS}`;
}

/* ═══ Chapter Export ═══ */
function exportChapter(c: ChapterConfig): string {
  const dark = c.bgColor.startsWith("#0") || c.bgColor.startsWith("#1");
  const titleColor = dark ? "#e8e8e8" : "#1a1a1a";
  const descColor = dark ? "#aaa" : "#555";
  const dividerColor = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  const cardsHTML = c.cards.map((card, i) =>
    `    <div class="cg-card"${c.animEnabled ? ` data-cg-idx="${i}"` : ""} style="background:${c.cardBgColor};padding:${c.padding}px;border-right:1px solid ${dividerColor};border-bottom:1px solid ${dividerColor}">
      <div style="color:${c.iconColor};margin-bottom:16px"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></svg></div>
      <div style="font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:${titleColor};margin-bottom:10px">${esc(card.title)}</div>
      <div style="font-size:0.9rem;color:${descColor};line-height:1.65">${esc(card.description)}</div>
    </div>`
  ).join("\n");

  const animCSS = c.animEnabled ? `.cg-card[data-cg-idx]{opacity:0;transform:translateY(20px)}.cg-card[data-cg-idx].cg-in{opacity:1;transform:translateY(0);transition:opacity 500ms ease,transform 500ms ease}` : "";
  const animJS = c.animEnabled ? `<script>(function(){var cards=document.querySelectorAll('.cg-card[data-cg-idx]');var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){var idx=parseInt(e.target.getAttribute('data-cg-idx'));setTimeout(function(){e.target.classList.add('cg-in')},idx*${c.animStagger});io.unobserve(e.target)}})},{threshold:0.1});cards.forEach(function(c){io.observe(c)})})()</script>` : "";

  return `<style>
.cg-section{background:${c.bgColor};padding:48px 40px;font-family:system-ui,sans-serif}
.cg-grid{display:grid;grid-template-columns:repeat(${c.cols},1fr);gap:0;border:1px solid ${dividerColor};border-radius:${c.cardRadius}px;overflow:hidden}
${animCSS}
</style>
<section class="cg-section">
  <div style="max-width:1000px;margin:0 auto">
    ${c.headerStyle !== "hidden" ? `<div style="margin-bottom:32px"><div style="width:100%;height:1px;background:${dividerColor};margin-bottom:20px"></div><h2 style="font-size:0.7rem;font-weight:600;text-transform:uppercase;letter-spacing:0.18em;color:${titleColor}">${esc(c.headerText)}</h2></div>` : ""}
    <div class="cg-grid">
${cardsHTML}
    </div>
  </div>
</section>
${animJS}`;
}

/* ═══ Full Page Export ═══ */
export function exportPageHTML(config: PageConfig): string {
  const sectionBlocks = config.sections.map(section => {
    switch (section.type) {
      case "hero": return exportHero(section.config);
      case "manifesto": return exportManifesto(section.config);
      case "chapter": return exportChapter(section.config);
      case "nav": return `<nav style="position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:0 40px;height:56px;font-size:0.7rem;font-weight:600;color:#fff;background:rgba(15,28,46,0.6);backdrop-filter:blur(16px)"><span style="font-weight:800;text-transform:uppercase;letter-spacing:0.12em">${esc(section.config.brandText)}</span><div style="display:flex;gap:24px">${section.config.menuItems.map((item: { label: string; href: string }) => `<a href="${esc(item.href)}" style="color:rgba(255,255,255,0.7);text-decoration:none;text-transform:uppercase">${esc(item.label)}</a>`).join("")}</div></nav>`;
      case "footer": return `<footer style="background:${section.config.bgColor};border-top:1px solid rgba(0,0,0,0.04);padding:64px 40px;font-family:system-ui"><div style="max-width:1120px;margin:0 auto;display:flex;justify-content:space-between"><span style="font-size:0.7rem;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;opacity:0.4">${esc(section.config.brandText)}</span><span style="font-size:0.55rem;opacity:0.4">&copy; ${esc(section.config.year)}</span></div></footer>`;
      case "custom": return section.config.html;
      default: return "";
    }
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(config.title)}</title>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{-webkit-font-smoothing:antialiased;scroll-behavior:smooth}
body{font-family:system-ui,sans-serif;line-height:1.6;overflow-x:hidden}
</style>
</head>
<body>
${sectionBlocks.join("\n\n")}
</body>
</html>`;
}
