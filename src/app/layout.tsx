import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Nav from "@/components/navbar";
import Leftbar from "@/components/leftbar";
import "@/app/global.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "알법사",
  description: "알뜰 마법사의 줄인말",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{(metadata.title as string) ?? "기본 제목"}</title>
        <meta
          name="description"
          content={metadata.description ?? "기본 설명"}
        />
      </Head>

      <body className={inter.className}>
        <div className="nav-barContainer">
          <Nav />
        </div>

        <div className="contents-Container">
          <div className="contents-Left-Container">
            <Leftbar />
          </div>
          <div className="contents-Right-Container">{children}</div>
        </div>
      </body>
    </html>
  );
}
