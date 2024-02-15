import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import * as S from "./Nav.style";
import { selectIsUserLogdIn } from "../../Store/Selector/Selector";
import AddNewAds from "../Modal/AddNewAdv";

export default function Nav() {
    const navigate = useNavigate();

    const isUserLoginIn = useSelector(selectIsUserLogdIn);
    const [AdsModal, setAdsModal] = useState(false);

    // console.log(isUserLoginIn);

    const handleProfile = () => {
        navigate("/profile");
    };

    const handleArticle = () => {
        setAdsModal(true);
    };

    return (
        <>
            <S.Header>
                <S.HeaderNav>
                    {isUserLoginIn ? (
                        <>
                            <S.HeaderBtnMainEnt
                                type="button"
                                onClick={handleArticle}
                            >
                                Разместить объявление
                            </S.HeaderBtnMainEnt>
                            <S.HeaderBtnMainPersonalArea
                                type="button"
                                onClick={handleProfile}
                            >
                                Личный кабинет
                            </S.HeaderBtnMainPersonalArea>
                        </>
                    ) : (
                        <Link to="/login">
                            <S.HeaderBtnMainEnter type="button">
                                Вход в личный кабинет
                            </S.HeaderBtnMainEnter>
                        </Link>
                    )}
                </S.HeaderNav>
            </S.Header>
            {AdsModal && <AddNewAds setAdsModal={setAdsModal} />}
        </>
    );
}
