/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import ProductInfo from "@/components/calculator/ProductInfo";

export default function calculator() {
  return (
    <div css={appStyle}>
      <ProductInfo />
    </div>
  );
}

const appStyle = css`
  padding: 20px;
`;
