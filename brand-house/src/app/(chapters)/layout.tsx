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
      <div className="min-h-screen bg-white">
        {children}
      </div>
      <div className="relative z-[2]">
        <SiteFooter />
      </div>
    </>
  );
}
