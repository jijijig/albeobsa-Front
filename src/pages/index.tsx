/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TopPicks from "@/components/index/TopPicks";
import Lank from "@/components/index/Lank";
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
      <div className="community">
        <Community />
      </div>
    </div>
  );
}

const styles = css`
  margin: 60px;
  whidth: 100%;
  height: 100%;
  .topicks {
    width: 100%;
  }
  .second {
    margin-top: 37px;
  }
  .community {
    margin-top: 37px;
  }
`;
