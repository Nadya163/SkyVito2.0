import styled from "styled-components";

export const MainSearch = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 11px 0;
    max-width: 1178px;
    margin: 0 auto;
    padding: 43px 10px 0px;
`;

export const SearchLogoLink = styled.a`
    ${"" /* display: none; */}
`;

export const SearchLogoImg = styled.img`
    width: 54px;
    height: auto;
`;

export const SearchForm = styled.form`
    margin-left: 60px;
    max-width: 1044px;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
`;

export const SearchText = styled.input`
    width: 100%;
    height: 50px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    background-color: transparent;
    padding: 13px 19px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
`;

export const SearchBtn = styled.button`
    margin-left: 10px;
    width: 158px;
    height: 50px;
    background-color: #009ee4;
    border: 1px solid #009ee4;
    border-radius: 6px;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    &:hover {
        background-color: #0080c1;
    }
`;

export const MainContainer = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 43px 10px 37px;
`;

export const MainH2 = styled.h2`
    color: #000;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 220%;
    &:hover::before {
        border-top: 2px solid #0080c1;
        border-left: 2px solid #0080c1;
    }
`;

export const MainContent = styled.div`
    width: 100%;
    margin: 0 auto;
    overflow-y: hidden;
`;

export const ContentCards = styled.div`
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 270px);
    grid-auto-rows: 441px;
    grid-gap: 40px 22px;
    justify-content: center;
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

export const CardsItem = styled.div`
    margin: 0;
    -webkit-box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.05);
    }
`;

export const CardsCard = styled.div`
    width: 270px;
    height: 441px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    ${"" /* flex-direction: column; */}
`;
// export const  = styled.div;
