import Sidebar from "@/components/Sidebar";

export default function ChaptersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 md:ml-64 px-6 md:px-12 py-20 max-w-4xl">
        {children}
      </main>
    </div>
  );
}
