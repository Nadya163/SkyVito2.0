import styled from "styled-components";

export const ArticleLeft = styled.div`
    max-width: 480px;
    margin-right: 54px;
`;

export const ArticleFillImg = styled.div`
    width: 100%;
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
    &:hover::before {
        border-top: 2px solid #0080c1;
        border-left: 2px solid #0080c1;
    }
`;

export const ArticleImg = styled.div`
    width: 480px;
    height: 480px;
    background-color: #f0f0f0;
    margin: 0 5px;
    & img {
        width: 480px;
        height: 480px;
        display: block;
    }
`;

export const ArticleImgBar = styled.div`
    margin-top: 30px;
    width: 490px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: left;
    -ms-flex-pack: left;
    justify-content: left;
    overflow: hidden;
    margin-left: -5px;
`;

export const ArticleImgBarDiv = styled.div`
    width: 88px;
    min-width: 88px;
    height: 88px;
    background-color: #f0f0f0;
    border: 2px solid #f0f0f0;
    margin: 0 5px;
    & img {
        width: 88px;
        height: 88px;
        display: block;
    }
`;
