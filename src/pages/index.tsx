/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TopPicks from '@/components/index/TopPicks';

export default function Home() {
    return (
        <div css={styles}>
            <TopPicks />
        </div>
    );
}

const styles = css`
  margin 0;
  whidth: 100%;
  height: 100%;
`;
