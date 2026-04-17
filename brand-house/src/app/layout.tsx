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
      <head>
        {/* Adobe Fonts (Typekit) — Proxima Nova, Proxima Nova Extra Wide, Proxima Sera */}
        <link
          rel="preconnect"
          href="https://use.typekit.net"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/pkl5rjs.css"
        />
        {/* Material Symbols Outlined — variable icon font */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=account_balance,arrow_forward,auto_awesome,badge,branding_watermark,calendar_month,calendar_today,cancel,chat_bubble,check_circle,close,description,expand_less,expand_more,forum,handshake,hub,image,line_end_arrow_notch,location_on,mail,palette,payments,person,rocket_launch,schedule,share,straighten,task_alt,text_fields,videocam&family=Roboto+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
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
