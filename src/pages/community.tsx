/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Communitytitle from "@/components/index/communitytitle";
import Image from "next/image";
export default function community() {
  return (
    <div css={style}>
      <div className="constents">
        <div className="title">커뮤니티 인기글</div>
        <div className="community">
          <Communitytitle />
          <div className="bottom">
            <button>더보기</button>
          </div>
        </div>
        <div className="ad">
          <Image
            src="/ad.png"
            width={500}
            height={100}
            layout="responsive"
            alt="광고 이미지"
          />
        </div>
      </div>
    </div>
  );
}

const style = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .constents {
    width: 90%;
    height: 100%;
    margin: 30px 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: left;
    .title {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 700;
      line-height: 30px;
      text-align: left;
      color: #858585;
      margin-bottom: 30px;
    }
    .community {
      background-color: #ffffff;
      border: 2px solid #f0f0f0;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px;
    }
  }
  .bottom {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 134px;
      height: 42px;
      background-color: #bceb00;
      border-radius: 100px;
      font-family: Poppins;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      text-align: center;
      color: white;
      border: none;
    }
  }
  .ad {
    margin-top: 37px;
    border: 2px solid #f0f0f0;
    border-radius: 10px;
    overflow: hidden;
  }
`;
