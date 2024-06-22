/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import Hotbox from "@/components/hotdeal/hotbox";
import axios from "axios";

interface HotDeal {
  label: string;
  title: string;
  name: string;
  image: string;
  link: string;
  dateTime: string;
  views: number;
  recommendCnt: number;
  unrecommendCnt: number;
  commentCnt: number;
  open: boolean;
  subLabel: string;
}

export default function Ranking() {
  const [hotDeals, setHotDeals] = useState<HotDeal[]>([]);

  useEffect(() => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/crawling/ranking`;
    console.log("서버에 데이터 요청을 시작합니다. 랭킹");

    axios
      .get<HotDeal[]>(apiUrl)
      .then((response) => {
        console.log("서버 응답:", response.data);
        setHotDeals(response.data);
        console.log("랭킹 데이터 처리");
      })
      .catch((error) => {
        console.error("랭킹 긁어오기 실패", error);
      });
  }, []);

  return (
    <div css={style}>
      {hotDeals.map((deal, index) => (
        <Hotbox key={index} deal={deal} rank={index + 1} />
      ))}
    </div>
  );
}

const style = css`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
