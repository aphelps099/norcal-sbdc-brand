import LogosHero from "@/components/LogosHero";
import LogoPageContent from "@/components/LogoPageContent";
import NextSectionLink from "@/components/NextSectionLink";

export default function LogosPage() {
  return (
    <>
      <LogosHero />
      <LogoPageContent />
      <NextSectionLink title="Voice & Tone" href="/voice" />
    </>
  );
}
