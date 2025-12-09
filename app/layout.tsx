import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ebsoftwaregroup.com"),
  title: {
    default: "E&B Software Group | Smart Solutions for a Digital World",
    template: "%s | E&B Software Group",
  },
  description:
    "E&B Software Group ile web yazılım, mobil uygulama, kurumsal yazılım, yapay zekâ ve otomasyon çözümleri. Dijital dönüşüm için modern ve ölçeklenebilir yazılım hizmetleri.",
  keywords: [
    "yazılım şirketi",
    "web yazılım",
    "mobil uygulama geliştirme",
    "kurumsal yazılım",
    "Next.js",
    "Node.js",
    "AI otomasyon",
    "veri analizi",
    "E&B Software Group",
    "yapay zeka entegrasyonu",
  ],
  openGraph: {
    title: "E&B Software Group",
    description:
      "Modern web, mobil ve kurumsal yazılım çözümleri. Dijital dönüşümde ileri teknoloji.",
    url: "https://ebsoftwaregroup.com",
    siteName: "E&B Software Group",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "https://ebsoftwaregroup.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "E&B Software Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E&B Software Group",
    description:
      "Web, mobil ve kurumsal yazılım çözümleri. Modern teknoloji ile dijital dönüşüm.",
    images: ["https://ebsoftwaregroup.com/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

