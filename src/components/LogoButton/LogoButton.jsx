import { useNavigate } from "react-router-dom";
import * as S from "./LogoButton.style";

export default function LogoButton() {
    const navigate = useNavigate();

    const handleMain = () => {
        navigate("/");
    };
    return (
        <S.MainContainer>
            <S.MainMenu>
                <S.MenuLogoLink href="" target="_blank">
                    <S.MenuLogoImg src="../img/logo.png" alt="logo" />
                </S.MenuLogoLink>
                <S.MenuForm action="#">
                    <S.MenuBtnSerch
                        type="button"
                        id="btnGoBack"
                        onClick={handleMain}
                    >
                        Вернуться на главную
                    </S.MenuBtnSerch>
                </S.MenuForm>
            </S.MainMenu>
        </S.MainContainer>
    );
}
