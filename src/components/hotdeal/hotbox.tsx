/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Image from "next/image";

export default function hotbox() {
  return (
    <div css={style}>
      <div className="constents">
        <div className="left">
          <Image src="/ad.png" width={100} height={100} alt="상품" />
        </div>
        <div className="right">
          <div className="rightcontents">
            <div className="rightleft">
              <button className="color1">위메프</button>
              <button className="color2">뽐뿌</button>
            </div>
            <div className="title">비비고 왕교자 1.05kg 2팩</div>
            <div className="price">11,930원(2 x 5,965원)</div>
          </div>
          <div className="rightright"></div>
        </div>
      </div>
    </div>
  );
}
const style = css`
  width: 80%;
  height: 173px;
  border: 2px solid #f0f0f0;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .constents {
    display: flex;

    align-items: center;
    width: 100%;
    height: 100%;
    gap: 10px;
  }
  .rightcontents {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 5px;
    .title {
      font-family: Poppins;
      font-size: 13px;
      font-weight: 400;
      line-height: 21.24px;
      text-align: left;
      color: #858585;
    }
    .price {
      font-family: Poppins;
      font-size: 13px;
      font-weight: 400;
      line-height: 21.24px;
      text-align: left;
      color: #f85d5d;
    }
  }
  .left {
    min-width: 100px;
    width: 10%;
    height: 100px;
    border-radius: 10px;
    border: 2px solid #f0f0f0;
    overflow: hidden;
    margin-left: 20px;
    width: 10%;
  }
  .right {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
    height: 100%;
    .rightleft {
      font-family: Poppins;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      text-align: left;
      .color1 {
        background-color: #bceb00;
      }
      button {
        background-color: #f0f0f0;
        border: none;
        width: 55px;
        height: 28px;
        border-radius: 10px;
        padding: 5px;
        margin-right: 10px;
      }
    }
    .rightright {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      .rightrightleft {
        color: red;
      }
      .rightrightright {
        width: 50%;
        height: 100%;
      }
    }
  }
`;
