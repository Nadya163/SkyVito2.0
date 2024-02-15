import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as S from "./ArticleInfo.style";
import {
    selectDateString,
    selectShowModal,
    selectTimestamp,
} from "../../../Store/Selector/Selector";
import { formatDate, formatDateSeller } from "../../../Store/Redux/DataSlise";
import { setShowModal } from "../../../Store/Redux/AdsSlice";
import Reviews from "../../Modal/Reviews";
import { useGetAllCommentsAdsQuery } from "../../../ApiService/ApiAds";
import { useGetTokenRefreshMutation } from "../../../ApiService/ApiService";
import { setAuth } from "../../../Store/Redux/AuthSlice";

export default function ArticleInfo({ item, itemId }) {
    const [showPhone, setShowPhone] = useState(false);
    const dispatch = useDispatch();
    const { data, error, refetch } = useGetAllCommentsAdsQuery({ id: itemId });
    const showModal = useSelector(selectShowModal);
    const timestamp = useSelector(selectTimestamp);
    const dateString = useSelector(selectDateString);
    const [getTokenRefresh] = useGetTokenRefreshMutation();
    formatDate(timestamp);
    formatDateSeller(dateString);

    const commentsCount = data ? data.length : 0;
    useEffect(() => {
        if (!error) return;
        // console.log(error);

        if (error.status === 401) {
            getTokenRefresh()
                .unwrap()
                .then((token) => {
                    // console.log(token);
                    dispatch(
                        setAuth({
                            access: token?.access_token,
                            refresh: token?.refresh_token,
                            user: JSON.parse(localStorage.getItem("user")),
                        }),
                    );
                    localStorage.setItem(
                        "access_token",
                        token?.access_token.toString(),
                    );
                    localStorage.setItem(
                        "refresh_token",
                        token?.refresh_token.toString(),
                    );
                    // console.log(object);
                })
                .then(() => {
                    refetch();
                });
        }
    }, [error]);

    // console.log(commentsCount);
    // console.log(data);

    const handleShowPhone = () => {
        setShowPhone(true);
    };

    const handleShowModal = () => {
        dispatch(setShowModal(true));
    };

    return (
        <S.ArticleRight>
            <S.ArticleBlock key={item.id}>
                <S.ArticleTitle>{item.title}</S.ArticleTitle>
                <S.ArticleInfo>
                    <S.ArticleDate>{formatDate(item.created_on)}</S.ArticleDate>
                    <S.ArticleCity>{item.user.city}</S.ArticleCity>
                    <S.ArticleLink type="button" onClick={handleShowModal}>
                        {commentsCount} отзыва
                    </S.ArticleLink>
                    {showModal && <Reviews itemId={item.id} />}
                </S.ArticleInfo>
                <S.ArticlePrice>{item.price} ₽</S.ArticlePrice>
                <S.ArticleBtn type="button" onClick={handleShowPhone}>
                    Показать&nbsp;телефон
                    {showPhone ? (
                        <span>{item.user.phone}</span>
                    ) : (
                        <span>
                            {item.user.phone.slice(0, 3)}ХХХ&nbsp;ХХ&nbsp;ХХ
                        </span>
                    )}
                </S.ArticleBtn>
                <S.ArticleAuthor>
                    <S.AuthorImg>
                        <img
                            src={`http://localhost:8090/${item.user.avatar}`}
                            alt=""
                        />
                    </S.AuthorImg>
                    <S.AuthorCont>
                        <Link to={`/sellerprofile/${item.user.id}`}>
                            <S.AuthorName>{item.user.name}</S.AuthorName>
                        </Link>
                        <S.AuthorAbout>
                            {formatDateSeller(item.user.sells_from)}
                        </S.AuthorAbout>
                    </S.AuthorCont>
                </S.ArticleAuthor>
            </S.ArticleBlock>
        </S.ArticleRight>
    );
}
