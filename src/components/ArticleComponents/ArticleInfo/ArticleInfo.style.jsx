import styled from "styled-components";

export const ArticleRight = styled.div`
    max-width: 621px;
`;

export const ArticleBlock = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: flex-start;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`;

export const ArticleTitle = styled.h3`
    font-size: 32px;
    line-height: 46px;
    font-weight: 500;
    color: #000000;
    margin-bottom: 10px;
`;

export const ArticleInfo = styled.div`
    margin-bottom: 34px;
`;

export const ArticleDate = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 4px;
`;

export const ArticleCity = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 4px;
`;

export const ArticleLink = styled.div`
    font-size: 16px;
    line-height: 21px;
    color: #009ee4;
    cursor: pointer;
`;

export const ArticlePrice = styled.p`
    font-size: 28px;
    line-height: 39px;
    font-weight: 700;
    margin-bottom: 20px;
`;

export const ArticleBtn = styled.button`
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

export const ArticleAuthor = styled.div`
    margin-top: 34px;
    margin-bottom: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
`;

export const AuthorImg = styled.div`
    width: 40px;
    height: 40px;
    background-color: #f0f0f0;
    border-radius: 50%;
    & img {
        width: 40px;
        height: 40px;
        display: block;
        border-radius: 50%;
    }
`;

export const AuthorCont = styled.div`
    margin-left: 12px;
`;

export const AuthorName = styled.p`
    font-size: 20px;
    line-height: 26px;
    font-weight: 600;
    color: #009ee4;
`;

export const AuthorAbout = styled.p`
    font-size: 16px;
    line-height: 32px;
    color: #5f5f5f;
`;
