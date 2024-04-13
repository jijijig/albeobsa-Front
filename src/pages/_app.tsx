/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Head from "next/head";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar";
import Leftbar from "@/components/leftbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const appContainer = css`
  display: flex;
  flex-direction: column;
`;

const navBarContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const contentsContainer = css`
  display: flex;
  margin: 0px;
  align-items: top;
  width: 100%;
  height: 100%;
`;

const contentsLeftContainer = css`
  display: flex;
  align-items: center;
  margin: 0px;
  background-color: white;
  width: 20%;
  @media (max-width: 1400px) {
    display: none;
  }
`;

const contentsRightContainer = css`
  margin: 0px;
  padding: 0px;
  height: 100%;
  background-color: #e7ff854d;
  border: 1px solid #f0f0f0;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>알법사</title>
        <meta name="description" content="알뜰마법사 입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div css={appContainer} className={inter.className}>
        <div css={navBarContainer}>
          <Navbar />
        </div>
        <div css={contentsContainer}>
          <div css={contentsLeftContainer}>
            <Leftbar />
          </div>
          <div css={contentsRightContainer}>
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}
