import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header"; // ヘッダーコンポーネントをインポート
//import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "掲示板アプリ",
  description: "5chのようなスレッド掲示板",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header /> {/* ヘッダーを追加 */}
        {children}
      </body>
    </html>
  );
}
