import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E&B Software Group",
  description: "Akıllı çözümlerle dijital dünyayı şekillendiriyoruz."
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
