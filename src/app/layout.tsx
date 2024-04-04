import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from 'next/head';
<<<<<<< HEAD
import Nav from "@/components/nav";
import "@/app/global.css";
=======
>>>>>>> 6b985d4c3184b2abb14d2fa02c70f465f62a713f
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
    <title>{metadata.title as string ?? "기본 제목"}</title>
    <meta name="description" content={metadata.description ?? "기본 설명"} />
    </Head>
<<<<<<< HEAD
    
    <body className={inter.className}><Nav />
    {children}</body>
=======
    <body className={inter.className}>{children}</body>
>>>>>>> 6b985d4c3184b2abb14d2fa02c70f465f62a713f
  </html>
  );
}
