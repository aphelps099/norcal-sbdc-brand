import SplashIntro from "@/components/SplashIntro";
import TopNav from "@/components/TopNav";
import HeroEditorial from "@/components/HeroEditorial";
import GiantManifesto from "@/components/GiantManifesto";
import PhotoMosaic from "@/components/PhotoMosaic";
import BrandGrid from "@/components/BrandGrid";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <main>
      <SplashIntro />
      <TopNav />
      <HeroEditorial />
      <GiantManifesto />
      <PhotoMosaic />
      <BrandGrid />
      <SiteFooter />
    </main>
  );
}
