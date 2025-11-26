import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E&B Software Group | Smart Solutions for a Digital World",
  description:
    "Web yazılım, mobil uygulama, kurumsal yazılım çözümleri ve yapay zekâ otomasyon hizmetleri. E&B Software Group ile markanızı dijital dünyada güçlendirin.",
  keywords: [
    "web yazılım",
    "mobil uygulama",
    "kurumsal yazılım",
    "yazılım şirketi",
    "Next.js",
    "yapay zeka",
    "otomasyon"
  ],
  authors: [{ name: "E&B Software Group" }],
  creator: "E&B Software Group",
  openGraph: {
    title: "E&B Software Group",
    description:
      "Modern web, mobil ve kurumsal yazılım çözümleri. Digital transformation for your business.",
    url: "https://seninsiteadresin.netlify.app",
    siteName: "E&B Software Group",
    type: "website",
    locale: "tr_TR"
  }
};



export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="bg-dark text-white">{children}</body>
    </html>
  );
}
