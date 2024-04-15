/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import Commnity from "@/styles/icon/community";
import Hotdeil from "@/styles/icon/hotdeil";
import Mainpage from "@/styles/icon/mainpage";
import Rank from "@/styles/icon/rank";
import Reviews from "@/styles/icon/revew";
import Settings from "@/styles/icon/setting";

const categories = [
  { id: 1, name: "메인 페이지", path: "/", components: <Mainpage /> },
  { id: 2, name: "커뮤니티", path: "/community", components: <Commnity /> },
  { id: 3, name: "후기", path: "/reviews", components: <Reviews /> },
  { id: 4, name: "랭킹", path: "/ranking", components: <Rank /> },
  { id: 5, name: "핫딜", path: "/hotdeals", components: <Hotdeil /> },
  { id: 6, name: "설정", path: "/settings", components: <Settings /> },
  { id: 7, name: "로그인", path: "/login" },
];

export default function Leftbar() {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };
  return (
    <div css={leftbarstyle}>
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            css={
              router.pathname === category.path
                ? activeCategoryStyle
                : undefined
            }
            onClick={() => handleClick(category.path)}>
            <div className="icon"></div>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

const leftbarstyle = css`
  width: 100%;
  height: 100%;
  background-color: white;
  margin-top: 59px;
  border-right: 1px;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    width: 70%;
    height: 54px;
    padding-left: 50px;
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    align-items: center;
    border-radius: 0 100px 100px 0;
    cursor: pointer;
  }
  .icon {
    width: 20px;
    height: 20px;
    background-color: black;
    margin-right: 10px;
  }
`;
const activeCategoryStyle = css`
  background-color: #e7ff85;
`;
