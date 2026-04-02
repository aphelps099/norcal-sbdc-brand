import TopNav from "@/components/TopNav";
import SiteFooter from "@/components/SiteFooter";

export default function ChaptersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNav />
      <InteriorNav />
      <div className="min-h-screen bg-white">
        {children}
      </div>
      <SiteFooter />
    </>
  );
}
