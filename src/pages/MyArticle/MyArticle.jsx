import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LogoButton from "../../components/LogoButton/LogoButton";
import * as S from "./MyArticle.style";
import {
    useDeleteAdsIdMutation,
    useGetAllAdsQuery,
    useGetAllCommentsAdsQuery,
} from "../../ApiService/ApiAds";

import {
    selectDateString,
    selectShowModal,
    selectTimestamp,
} from "../../Store/Selector/Selector";
import { formatDate, formatDateSeller } from "../../Store/Redux/DataSlise";
import AddChangeAdv from "../../components/Modal/AddChangeAdv";
import { setShowModal } from "../../Store/Redux/AdsSlice";
import Reviews from "../../components/Modal/Reviews";
import ImgBar from "../../components/ArticleComponents/ImgBar/ImgBar";

export default function MyArticle() {
    const params = useParams();
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const timestamp = useSelector(selectTimestamp);
    const dateString = useSelector(selectDateString);
    const showModal = useSelector(selectShowModal);
    const [AdsModal, setAdsModal] = useState(false);
    formatDateSeller(dateString);
    formatDate(timestamp);
    const { data: adsId } = useGetAllAdsQuery(params.id);
    const { data: commentsId } = useGetAllCommentsAdsQuery({ id });
    const [deleteAdsId] = useDeleteAdsIdMutation();

    const chosenItem = adsId?.filter(
        (item) => item.id === parseInt(params.id, 10),
    );

    const commentsCount = commentsId ? commentsId.length : 0;

    const handleRemoveAds = async () => {
        try {
            // Вызываем мутацию для удаления объявления
            await deleteAdsId(params.id);
            navigate("/profile");
        } catch (error) {
            console.log(error);
        }
    };

    const handleAdsShowModal = () => {
        setAdsModal(true);
    };

    const handleShowModal = () => {
        dispatch(setShowModal(true));
    };

    // console.log(chosenItem?.title, "chosenItem");
    // console.log(chosenItem, "chosenItemId");
    // console.log(commentsId, "comments");

    // console.log(params);
    return (
        <main>
            <LogoButton />
            {chosenItem?.map((item) => (
                <div key={item.id}>
                    <S.MainArtic>
                        <S.ArticContent>
                            <S.ArticleLeft>
                                <ImgBar key={item.id} item={item} />
                            </S.ArticleLeft>
                            <S.ArticleRight>
                                <S.ArticleBlock>
                                    <S.ArticleTitle>
                                        {item.title}
                                    </S.ArticleTitle>
                                    <S.ArticleInfo>
                                        <S.ArticleDate>
                                            {formatDate(item.created_on)}
                                        </S.ArticleDate>
                                        <S.ArticleCity>
                                            {item.city}
                                        </S.ArticleCity>
                                        <S.ArticleLink
                                            type="button"
                                            onClick={handleShowModal}
                                        >
                                            {commentsCount} отзыва
                                            {showModal && (
                                                <Reviews itemId={item.id} />
                                            )}
                                        </S.ArticleLink>
                                    </S.ArticleInfo>
                                    <S.ArticlePrice>
                                        {item.price} ₽
                                    </S.ArticlePrice>
                                    <S.ArticleBtnBlock>
                                        <S.ArticleBtnRedact
                                            type="button"
                                            onClick={handleAdsShowModal}
                                        >
                                            Редактировать
                                        </S.ArticleBtnRedact>
                                        <S.ArticleBtnRemove
                                            type="button"
                                            onClick={handleRemoveAds}
                                        >
                                            Снять с публикации
                                        </S.ArticleBtnRemove>
                                    </S.ArticleBtnBlock>
                                    <S.ArticleAuthor>
                                        <S.AuthorImg>
                                            <img src="" alt="" />
                                        </S.AuthorImg>
                                        <S.AuthorCont>
                                            <S.AuthorName>
                                                {item.user.name}
                                            </S.AuthorName>
                                            <S.AuthorAbout>
                                                {formatDateSeller(
                                                    item.user.sells_from,
                                                )}
                                            </S.AuthorAbout>
                                        </S.AuthorCont>
                                    </S.ArticleAuthor>
                                </S.ArticleBlock>
                            </S.ArticleRight>
                        </S.ArticContent>
                    </S.MainArtic>
                    <S.MainContainerText>
                        <S.MainTitle>Описание товара</S.MainTitle>
                        <S.MainContent>
                            <S.MainText>{item.description}</S.MainText>
                        </S.MainContent>
                    </S.MainContainerText>
                </div>
            ))}
            {AdsModal && <AddChangeAdv setAdsModal={setAdsModal} />}
        </main>
    );
}
