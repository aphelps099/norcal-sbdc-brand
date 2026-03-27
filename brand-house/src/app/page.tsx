import SplashIntro from "@/components/SplashIntro";
import TopNav from "@/components/TopNav";
import HeroEditorial from "@/components/HeroEditorial";
import PhotoMosaic from "@/components/PhotoMosaic";
import DisplayType from "@/components/DisplayType";
import FeatureShowcase from "@/components/FeatureShowcase";
import ManifestoStatement from "@/components/ManifestoStatement";
import CapabilitiesGrid from "@/components/CapabilitiesGrid";
import PhotoFooter from "@/components/PhotoFooter";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <main>
      <SplashIntro />
      <TopNav />
      <HeroEditorial />
      <PhotoMosaic />
      <DisplayType />
      <FeatureShowcase />
      <ManifestoStatement />
      <CapabilitiesGrid />
      <PhotoFooter />
      <SiteFooter />
    </main>
  );
}
