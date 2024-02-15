import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: #f1f1f1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`;

export const ContainerEnter = styled.div`
    max-width: 100%;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: #f4f5f6;
`;

export const ModalBlock = styled.div`
    position: absolute;
    z-index: 5;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
`;

export const ModalFormLogin = styled.form`
    width: 366px;
    height: 100%;
    background-color: #ffffff;
    border-radius: 12px;
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
    padding: 43px 42px 47px;
`;

export const ModalLogo = styled.div`
    width: 140px;
    height: 21px;
    margin-bottom: 42px;
    background-color: transparent;
`;

export const ModalLogoImg = styled.img`
    width: 140px;
    height: 21px;
`;

export const ModalInputLogin = styled.input`
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #d9d9d9;
    padding: 8px 1px;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.05px;
    &::placeholder {
        color: #d9d9d9;
    }
`;

export const ModalInput = styled.input`
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #d9d9d9;
    padding: 8px 1px;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.05px;
    &::placeholder {
        color: #d9d9d9;
    }
`;

export const ModalBtnEnter = styled.button`
    width: 278px;
    height: 52px;
    background-color: #009ee4;
    border-radius: 6px;
    margin-top: 60px;
    margin-bottom: 20px;
    border: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    &:hover {
        background-color: #0080c1;
    }
    &:active {
        background-color: #0080c1;
    }
`;

export const BtnEnterText = styled.p`
    color: #fff;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.05px;
`;

export const ModalBtnSignup = styled.button`
    width: 278px;
    height: 52px;
    background-color: transparent;
    border: 1px solid #d0cece;
    border-radius: 6px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #000000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    &:hover {
        background-color: #f4f5f6;
    }
    &:active {
        background-color: #d9d9d9;
    }
`;

export const BtnSignupText = styled.p`
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.05px;
`;

export const ErrorDiv = styled.div`
    color: red;
    margin-bottom: 30px;
`;

export const ErrorDivEnd = styled.div`
    color: red;
`;
