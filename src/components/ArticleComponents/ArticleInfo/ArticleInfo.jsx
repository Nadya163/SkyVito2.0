import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
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

export default function ArticleInfo({ item, itemId }) {
    const [showPhone, setShowPhone] = useState(false);
    const dispatch = useDispatch();
    const { data } = useGetAllCommentsAdsQuery({ id: itemId });
    const showModal = useSelector(selectShowModal);
    const timestamp = useSelector(selectTimestamp);
    const dateString = useSelector(selectDateString);
    formatDate(timestamp);
    formatDateSeller(dateString);

    const commentsCount = data ? data.length : 0;

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
