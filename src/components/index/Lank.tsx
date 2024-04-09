/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

export default function Lank() {
    return (
        <div css={style}>
            <div className="contanier">
                <div className="contanierin">랭킹 하이</div>
            </div>
        </div>
    );
}

const style = css`
    display: flex;
    align-items: center;
    justify-content: center;
    .contanier {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: 311px;
        border-radius: 10px;
        border: 2px solid #f0f0f0;
        background-color: red;
    }
    .contanierin {
        width: 90%;
        height: 90%;
        background-color: blue;
    }
`;
