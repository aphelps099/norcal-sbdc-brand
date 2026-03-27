import type { Metadata } from "next";
import "./globals.css";
import SearchModal from "@/components/SearchModal";

export const metadata: Metadata = {
  title: "NorCal SBDC — Brand House",
  description:
    "The official brand guide for Northern California Small Business Development Centers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <SearchModal />
        {/* Paper texture — two-layer grain for tactile quality */}
        <div className="paper-texture" aria-hidden="true">
          <svg className="grain-fine" width="100%" height="100%">
            <filter id="grain-fine">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.75"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain-fine)" />
          </svg>
          <svg className="grain-coarse" width="100%" height="100%">
            <filter id="grain-coarse">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.25"
                numOctaves="2"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain-coarse)" />
          </svg>
        </div>
      </body>
    </html>
  );
}
