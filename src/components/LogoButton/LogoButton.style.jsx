import styled from "styled-components";

export const MainContainer = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 43px 10px 77px;
`;

export const MainMenu = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    width: 100%;
`;

export const MenuLogoLink = styled.a`
    width: 54;
    height: 50px;
`;

export const MenuLogoImg = styled.img`
    width: 54px;
    height: auto;
`;

export const MenuForm = styled.form`
    margin-left: 60px;
    max-width: 1044px;
    width: 100%;
`;

export const MenuBtnSerch = styled.button`
    width: 241px;
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
