import styled from "styled-components";

export const MainH2 = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 42px;
    color: #000000;
    margin-bottom: 30px;
`;

export const MainProfile = styled.div`
    width: 100%;
    padding: 0 0 70px;
`;

export const ProfileContent = styled.div`
    max-width: 834px;
`;

export const ProfileTitle = styled.h3`
    font-size: 32px;
    line-height: 70px;
    font-weight: 500;
    color: #000000;
    margin-bottom: 20px;
`;

export const ProfileSettings = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: top;
    -ms-flex-align: top;
    align-items: top;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
`;

export const SettingsLeft = styled.div`
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
    margin-right: 43px;
`;

export const SettingsImg = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-color: #f0f0f0;
`;

export const SettingsChangePhoto = styled.button`
    margin-top: 10px;
    margin-bottom: 30px;
    text-decoration: none;
    font-size: 16px;
    line-height: 24px;
    color: #009ee4;
`;

export const SettingsRight = styled.div`
    width: 630px;
`;

export const SettingsForm = styled.form`
    width: 630px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
`;

export const SettingsDiv = styled.div`
    display: flex;
    margin: 0 7px 20px;
    flex-direction: column;
`;

export const SettingsFName = styled.input`
    border-radius: 6px;
    border: 1px solid #009ee4;
    background: #fff;
    width: 300px;
    height: 50px;
    flex-shrink: 0;
    padding: 10px;
`;

export const SettingsLName = styled.input`
    width: 300px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: #fff;
    padding: 10px;
`;

export const SettingsCity = styled.input`
    width: 300px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: #fff;
    padding: 10px;
`;

export const SettingsPhone = styled.input`
    width: 614px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: #fff;
    padding: 10px;
`;

export const SettingsBtn = styled.button`
    font-size: 16px;
    line-height: 1;
    color: #ffffff;
    width: 154px;
    height: 50px;
    margin: 10px 7px 0;
    background-color: #009ee4;
    border-radius: 6px;
    border: 1px solid #009ee4;
    &:hover {
        background-color: #0080c1;
    }
`;

export const MainTitle = styled.h3`
    margin-bottom: 20px;
    font-size: 32px;
    line-height: 70px;
    font-weight: 500;
    color: #000000;
`;

export const MainContent = styled.div`
    max-width: 1178px;
    margin: 0 auto;
`;

export const SettingsFLabelName = styled.label`
    color: #009ee4;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
`;

export const SettingsLabelName = styled.label`
    color: #c4c4c4;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
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

export const SettingsErrorMsg = styled.label`
    color: red;
`;
