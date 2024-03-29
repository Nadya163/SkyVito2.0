import styled from "styled-components";

export const MainArtic = styled.div`
    max-width: 1178px;
    padding: 0 0 70px;
    margin: 0 auto;
    padding: 0 5px 70px;
`;

export const ArticContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: top;
    -ms-flex-align: top;
    align-items: top;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: flex-start;
`;

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
        width: 100%;
        height: auto;
        display: block;
        -o-object-fit: cover;
        object-fit: cover;
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
        width: 100%;
        height: auto;
        display: block;
        -o-object-fit: cover;
        object-fit: cover;
    }
`;

export const ArticleRight = styled.div`
    max-width: 621px;
`;

export const ArticleBlock = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
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

export const ArticleLink = styled.a`
    font-size: 16px;
    line-height: 21px;
    color: #009ee4;
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

export const MainTitle = styled.h3`
    margin-bottom: 32px;
    padding: 0 5px;
    font-size: 32px;
    line-height: 46px;
    font-weight: 500;
    color: #000000;
`;

export const MainText = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: #000000;
`;

export const MainContent = styled.div`
    max-width: 792px;
    width: 100%;
    padding: 0 5px 117px;
`;

export const AuthorImg = styled.div`
    width: 40px;
    height: 40px;
    background-color: #f0f0f0;
    border-radius: 50%;
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

export const MainContainerText = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 0px 5px;
`;

export const ArticleBtnRedact = styled.button`
    background-color: #009ee4;
    border-radius: 6px;
    border: 1px solid #009ee4;
    height: 62px;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    color: #ffffff;
    font-family: "Roboto", sans-serif;
    width: 189px;
    margin-right: 10px;
    &:hover {
        background-color: #0080c1;
    }
`;

export const ArticleBtnRemove = styled.button`
    background-color: #009ee4;
    border-radius: 6px;
    border: 1px solid #009ee4;
    height: 62px;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    color: #ffffff;
    font-family: "Roboto", sans-serif;
    width: 225px;
    margin-right: 10px;
    &:hover {
        background-color: #0080c1;
    }
`;
