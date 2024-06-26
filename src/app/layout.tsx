import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "my portfoilio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={(notoSansJP.className, "min-h-dvh flex flex-col")}>
        <Header />
        {/* <div className="mt-[90px]"></div> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
