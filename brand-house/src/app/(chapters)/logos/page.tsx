import { PatternRegion } from "@/components/BrandPattern";
import InteriorHero from "@/components/InteriorHero";
import LogoPageContent from "@/components/LogoPageContent";
import NextSectionLink from "@/components/NextSectionLink";

export default function LogosPage() {
  return (
    <>
      <InteriorHero pattern={<PatternRegion className="w-full h-full" />}
        title="Logos"
        subtitle="The California SBDC logo represents us at the very highest level. It acts as a signature, an identifier, and a stamp of quality."
      />
      <LogoPageContent />
      <NextSectionLink title="Voice & Tone" href="/voice" />
    </>
  );
}
