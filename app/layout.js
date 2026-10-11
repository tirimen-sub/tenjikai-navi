import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata = {
  title: "展示会ナビ | 展示会・クリエイター情報をまとめてお届け",
  description:
    "全国の展示会情報と、出展クリエイターの情報をまとめて届けるサービス。月額800円。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
