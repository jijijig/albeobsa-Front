/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TopPicks from "@/components/index/TopPicks";
import Lank from "@/components/index/Lank";
import Image from "next/image";
import Community from "@/components/index/community";

export default function Home() {
  return (
    <div css={styles}>
      <div className="topicks">
        <TopPicks />
      </div>
      <div className="second">
        <Lank />
      </div>
      <div className="ad">
        <Image src="/ad.png" width={1023} height={324} alt="상품 이미지" />
      </div>
      <div className="community">
        <Community />
      </div>
    </div>
  );
}

const styles = css`
  margin 0;
  height: 100%;

  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
.topicks{
  width: 1023px;
}
  .second {
    margin-top: 37px;
    width: 1023px;
  }
  .ad{
    margin-top: 33px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .community{
    margin-top: 33px;
    width: 1023px;
    height: 550px;
  }
`;
