import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./Search.style";
import { selectSearchItem } from "../../Store/Selector/Selector";
import { setSearchItem } from "../../Store/Redux/AdsSlice";

export default function Search() {
    const dispatch = useDispatch();
    const searchItem = useSelector(selectSearchItem);

    const handleSearchClikc = () => {
        dispatch(setSearchItem(searchItem));
    };

    return (
        <S.MainSearch>
            <Link to="/" target="_blank">
                <S.SearchLogoImg src="../img/Logo.svg" alt="logo" />
            </Link>
            {/* <a class="search__logo-mob-link" href="#" target="_blank">
                        <img class="search__logo-mob-img" src="img/logo-mob.png" alt="logo" />
                    </a> */}
            <S.SearchForm action="#">
                <S.SearchText
                    type="search"
                    placeholder="Поиск по объявлениям"
                    name="search"
                    value={searchItem}
                    onChange={(e) => dispatch(setSearchItem(e.target.value))}
                />
                {/* <input class="search__text-mob" type="search" placeholder="Поиск" name="search-mob" /> */}
                <S.SearchBtn type="button" onClick={handleSearchClikc}>
                    Найти
                </S.SearchBtn>
            </S.SearchForm>
        </S.MainSearch>
    );
}
