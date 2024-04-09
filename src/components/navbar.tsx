/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function navbar() {
    return (
        <div css={container}>
            <div>
                <p>albubsa</p>
            </div>

            <div className="nav-right">
                <div>
                    <input type="text" placeholder="검색" />
                </div>

                <div className="user-box">
                    <div className="img-box"></div>
                    USER PROFILE
                </div>
                <div>
                    <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.15385 3.5564C9.76923 3.5564 11.9231 5.71021 11.9231 8.32559C11.9231 9.17174 11.6923 10.0179 11.2308 10.7871L11 11.2487L11.4615 12.7102C11.6154 13.2486 12 13.6333 12.5385 13.941C13 14.1718 13.3077 14.6334 13.3077 15.1719V15.4795C13.3077 16.0949 12.7692 16.6333 12.1538 16.6333H2.15385C1.53846 16.6333 1 16.0949 1 15.4795V15.1719C1 14.6334 1.30769 14.1718 1.76923 13.941C2.23077 13.7102 2.61539 13.2486 2.84616 12.7102L3.30769 11.2487L3.07692 10.7871C1.69231 8.55632 2.46154 5.55632 4.69231 4.24863C5.46154 3.78709 6.30769 3.5564 7.15385 3.5564Z"
                            stroke="#858585"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7.15379 21.2487C8.00346 21.2487 8.69225 20.5599 8.69225 19.7103C8.69225 18.8606 8.00346 18.1718 7.15379 18.1718C6.30412 18.1718 5.61533 18.8606 5.61533 19.7103C5.61533 20.5599 6.30412 21.2487 7.15379 21.2487Z"
                            stroke="#858585"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M5.61533 3.5572V2.78797C5.61533 1.94182 6.30763 1.24951 7.15379 1.24951C7.99994 1.24951 8.69225 1.94182 8.69225 2.78797V3.5572"
                            stroke="#858585"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

const container = css`
    display: flex;
    width: 80%;
    height: 100%;
    justify-content: space-between;
    align-items: center;

    input {
        width: 420px;
        height: 40px;
        border-radius: 100px;
        border: 1px solid #bceb00;
    }
    .nav-right {
        display: flex;
        gap: 50px;
        align-items: center;
    }
    .img-box {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: black;
    }
    .user-box {
        display: flex;
        gap: 10px;
        align-items: center;
    }
`;
