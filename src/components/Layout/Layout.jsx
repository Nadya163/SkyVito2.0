import { Link, Outlet } from "react-router-dom";
import * as S from "./Layout.style";
import Nav from "../Nav/Nav";

export default function Layout() {
    return (
        <div>
            <Nav />
            <Outlet />
            <S.Footer>
                <S.FooterContainer>
                    <S.FooterImg>
                        <Link to="/">
                            <img src="img/icon_01.png" alt="home" />
                        </Link>
                    </S.FooterImg>
                    <S.FooterImg>
                        <Link to="/" target="_self">
                            <img src="img/icon_02.png" alt="home" />
                        </Link>
                    </S.FooterImg>
                    <S.FooterImg>
                        <Link to="/" target="_self">
                            <img src="img/icon_03.png" alt="home" />
                        </Link>
                    </S.FooterImg>
                </S.FooterContainer>
            </S.Footer>
        </div>
    );
}
