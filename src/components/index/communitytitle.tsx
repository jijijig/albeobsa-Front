/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Image from "next/image";

const titlelist = [
  {
    date: "2024/04/01",
    img: "/ad.png",
    nickname: "후엥",
    title: "커뮤니티 인기글",
    coment: 10,
    views: "조회수",
  },
  {
    date: "2024/04/01",
    img: "/ad.png",
    nickname: "뿌엥",
    title: "커뮤니티 인기글",
    coment: 10,
    views: "조회수",
  },
  {
    date: "2024/04/01",
    img: "/ad.png",
    nickname: "즐거운 오랑우탄가락지",
    title: "커뮤니티 인기글",
    coment: 10,
    views: "조회수",
  },
  {
    date: "2024/04/01",
    img: "/ad.png",
    nickname: "행복한 오징어대가리",
    title: "커뮤니티 인기글",
    coment: 10,
    views: "조회수",
  },
];

export default function communitytitle() {
  return (
    <div css={style}>
      <table>
        <tr className="name_title">
          <td>날짜</td>
          <td>작성자</td>
          <td>제목</td>
          <td>댓글</td>
        </tr>
        {titlelist.map((title, index) => (
          <tr key={index}>
            <td className="left">{title.date}</td>
            <td className="nickname">
              <Image src={title.img} width={30} height={30} alt="상품 이미지" />

              {title.nickname}
            </td>
            <td>{title.title}</td>
            <td className="right">{title.coment}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

const style = css`
  width: 90%;
  height: 100%;
  .name_title {
    font-weight: 700;

    td {
      padding: 20px;
      border: 0px;
      text-align: center;
      font-family: Poppins;
      font-size: 12px;
      font-weight: 700;
      line-height: 19.61px;
    }
  }
  table {
    width: 100%;
    height: 90%;
    border-collapse: separate;
    border-spacing: 0px 10px;
    tr {
      border-bottom: 1px solid #f0f0f0;
      border-radius: 10px;
    }
    td {
      padding: 20px;
      border: 1px solid #f0f0f0;
      border-left: 0;
      border-right: 0;
      text-align: center;
      font-family: Poppins;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
    }
    .left {
      border-radius: 100px 0px 0px 100px;
      border: 1px solid #f0f0f0;
      border-right: 0;
    }
    .right {
      border-radius: 0px 100px 100px 0px;
      border: 1px solid #f0f0f0;
      border-left: 0;
    }
    .nickname {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    img {
      border-radius: 50%;
    }
  }
`;
