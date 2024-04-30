/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Hotbox from "@/components/hotdeal/hotbox";
export default function hotdeals() {
  return (
    <div css={style}>
      <Hotbox />
      <Hotbox /> <Hotbox />
      <Hotbox /> <Hotbox />
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
