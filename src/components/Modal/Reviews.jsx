/* eslint-disable react/jsx-props-no-spreading */
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as S from "./Modal.styled";
import { setShowModal } from "../../Store/Redux/AdsSlice";
import { selectIsUserLogdIn } from "../../Store/Selector/Selector";
import {
    useCreateCommentAdsMutation,
    useGetAllCommentsAdsQuery,
} from "../../ApiService/ApiAds";
import { useGetTokenRefreshMutation } from "../../ApiService/ApiService";
import { setAuth } from "../../Store/Redux/AuthSlice";
import Comments from "../Array/Cooments/Comments";

export default function Reviews({ itemId }) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const isUserLoginIn = useSelector(selectIsUserLogdIn);
    const { data } = useGetAllCommentsAdsQuery({ id: itemId });
    const [createComment] = useCreateCommentAdsMutation(Number(id));
    const [getTokenRefresh] = useGetTokenRefreshMutation();
    const [errorMessage, setErrorMessage] = useState("");
    const [createCommentAds, setCreateCommentAds] = useState({
        text: "",
    });
    const [closeModal, setCloseModal] = useState(true);
    const { handleSubmit, register, reset } = useForm();

    const onSubmit = async ({ text }) => {
        if (!text) {
            setErrorMessage(
                "Вы ничего не написали, напишите пожалуйста комментарий",
            );
            return;
        }
        await createComment({
            id,
            text,
        })
            .unwrap()
            .then((respons) => {
                console.log(respons);
            })
            .catch((error) => {
                if (error.status === 401) {
                    getTokenRefresh()
                        .unwrap()
                        .then((token) => {
                            // console.log(token);
                            dispatch(
                                setAuth({
                                    access: token?.access_token,
                                    refresh: token?.refresh_token,
                                    user: JSON.parse(
                                        localStorage.getItem("user"),
                                    ),
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
                        });
                }
            });
        reset();
    };

    const handleShowModal = async () => {
        dispatch(setShowModal(false));
        setCloseModal(false);
    };

    // console.log("comments", itemId);
    // console.log("id", id);

    return (
        <div>
            {closeModal && (
                <S.Wrapper>
                    <S.ContainerBg>
                        <S.ModalBlock>
                            <S.ModalContentReview>
                                <S.ModalTitle>Отзывы о товаре</S.ModalTitle>
                                <S.ModalBtnClose>
                                    <S.ModalBtnCloseLine
                                        type="button"
                                        onClick={handleShowModal}
                                    />
                                </S.ModalBtnClose>
                                <S.ModalScroll>
                                    {isUserLoginIn && (
                                        <S.ModalFormNewArt
                                            onSubmit={handleSubmit(onSubmit)}
                                        >
                                            <S.FormNewArtBlock>
                                                <S.FormMewArtLabel htmlFor="text">
                                                    Добавить отзыв
                                                </S.FormMewArtLabel>
                                                <S.FormNewArtArea
                                                    name="text"
                                                    id="formArea"
                                                    cols="auto"
                                                    rows="5"
                                                    placeholder="Введите описание"
                                                    {...register("text")}
                                                    onChange={(e) => {
                                                        setCreateCommentAds({
                                                            ...createCommentAds,
                                                            text: e.target
                                                                .value,
                                                        });
                                                        setErrorMessage("");
                                                    }}
                                                />
                                                <S.MainMessageError>
                                                    {errorMessage}
                                                </S.MainMessageError>
                                            </S.FormNewArtBlock>
                                            <S.FormNewArtBtnPub
                                                type="submit"
                                                id="btnPublish"
                                            >
                                                Опубликовать
                                            </S.FormNewArtBtnPub>
                                        </S.ModalFormNewArt>
                                    )}
                                    {data?.length > 0 ? (
                                        <Comments itemId={itemId} />
                                    ) : (
                                        <S.MainMessage>
                                            Ваш комментарий будет первым
                                        </S.MainMessage>
                                    )}
                                </S.ModalScroll>
                            </S.ModalContentReview>
                        </S.ModalBlock>
                    </S.ContainerBg>
                </S.Wrapper>
            )}
        </div>
    );
}
