import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "GLOREA — Mum ve Oda Kokuları",
  description:
    "Ruhunuzu yansıtacak huzur dolu koku ve ışıklar. Ödev / sunum amaçlı demo vitrin.",
};

export const viewport: Viewport = {
  themeColor: "#FDFBF7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-parchment font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
