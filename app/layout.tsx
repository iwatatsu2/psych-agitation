import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "不穏時対応ガイド",
  description: "精神科入院患者の不穏時対応クイックリファレンス",
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full dark`}>
      <body className="min-h-full bg-slate-950 text-slate-100 font-[family-name:var(--font-noto-sans-jp)]">
        <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
          <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="text-lg font-bold tracking-tight">
              不穏時対応ガイド
            </a>
            <a
              href="/drugs"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              薬剤一覧
            </a>
          </div>
        </header>
        <main className="max-w-2xl mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
