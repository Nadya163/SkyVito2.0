import styled from "styled-components";

export const MainH2 = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 42px;
    color: #000000;
    margin-bottom: 30px;
`;

export const MainProfileSell = styled.div`
    width: 100%;
    padding: 0 0 70px;
`;

export const MainContent = styled.div`
    max-width: 1178px;
    margin: 0 auto;
`;

export const ProfileSellContent = styled.div`
    width: 100%;
`;

export const ProfileSellSeller = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: top;
    -ms-flex-align: top;
    align-items: top;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
`;

export const SellerLeft = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 50px;
`;

export const SellerImg = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-color: #f0f0f0;
`;

export const SellerRight = styled.div`
    width: auto;
`;

export const SellerTitle = styled.h3`
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 200%;
`;

export const SellerCity = styled.p`
    color: #5f5f5f;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 200%;
`;

export const SellerInf = styled.p`
    color: #5f5f5f;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 200%;
`;

export const SellerBtn = styled.button`
    margin-top: 20px;
    background-color: #009ee4;
    border-radius: 6px;
    border: 1px solid #009ee4;
    width: 214px;
    height: 62px;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    color: #ffffff;
    font-family: "Roboto", sans-serif;
    &:hover {
        background-color: #0080c1;
    }
    & span {
        display: block;
        font-size: 14px;
        font-weight: 400;
    }
`;

export const MainTitle = styled.h3`
    margin-bottom: 20px;
    font-size: 32px;
    line-height: 70px;
    font-weight: 500;
    color: #000000;
`;

export const ContentCards = styled.div`
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 270px);
    grid-auto-rows: 441px;
    grid-gap: 40px 22px;
    justify-content: center;
    height: 922px;
    overflow-y: scroll;
    scrollbar-color: #d9d9d9;

    &::-webkit-scrollbar {
        width: 0px;
        background-color: #009ee4;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #0080c1;
        border-radius: 1px;
    }
`;
