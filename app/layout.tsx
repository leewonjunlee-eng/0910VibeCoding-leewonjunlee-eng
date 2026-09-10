import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  IBM_Plex_Mono,
  Noto_Sans_KR,
  Noto_Serif_KR,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const notoSerifKr = Noto_Serif_KR({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "이원준 - 소개",
  description: "이원준의 개인 소개 페이지",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${cormorant.variable} ${notoSerifKr.variable} ${notoSansKr.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
