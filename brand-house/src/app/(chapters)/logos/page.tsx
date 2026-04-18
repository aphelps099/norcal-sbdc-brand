import LogosHero from "@/components/LogosHero";
import LogoPageContent from "@/components/LogoPageContent";
import NextSectionLink from "@/components/NextSectionLink";
import CreamPaperBackdrop from "@/components/CreamPaperBackdrop";

export default function LogosPage() {
  return (
    <>
      <CreamPaperBackdrop />
      <div className="relative" style={{ zIndex: 1 }}>
        <LogosHero />
        <LogoPageContent />
        <NextSectionLink title="Voice & Tone" href="/voice" />
      </div>
    </>
  );
}
