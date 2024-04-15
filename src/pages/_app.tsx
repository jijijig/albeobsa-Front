/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Head from "next/head";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar";
import Leftbar from "@/components/leftbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Emotion CSS 정의
const appContainer = css`
  display: flex;
  flex-direction: column;
`;

const navBarContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
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
  height: 100vh;
`;

const contentsRightContainer = css`
  margin: 0px;
  padding: 0px;
  height: 100%;
  background-color: #e7ff854d;
  border: 1px solid #f0f0f0;
  align-items: center;
  width: 80%;
  height: 100%;
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
        <div css={navBarContainer} className="nav-barContainer">
          <Navbar />
        </div>
        <div css={contentsContainer} className="contents-Container">
          <div css={contentsLeftContainer} className="contents-Left-Container">
            <Leftbar />
          </div>
          <div
            css={contentsRightContainer}
            className="contents-Right-Container">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}
