import Sidebar from "@/components/Sidebar";

export default function ChaptersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-cream">
      <Sidebar />
      <main className="flex-1 md:ml-64 px-6 md:px-12 lg:px-16 py-20 max-w-4xl">
        {children}
      </main>
    </div>
  );
}
