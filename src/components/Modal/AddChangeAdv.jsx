/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as S from "./Modal.styled";
import {
    useChangeAdsMutation,
    useGetAdsIdQuery,
    useUploadAdsImgMutation,
} from "../../ApiService/ApiAds";
import { useGetTokenRefreshMutation } from "../../ApiService/ApiService";
import { setAuth } from "../../Store/Redux/AuthSlice";

export default function AddChangeAdv({ setAdsModal }) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { data: adsId, refetch } = useGetAdsIdQuery(id);
    const [changeAds] = useChangeAdsMutation(Number(id));
    const [uploadAdsImg] = useUploadAdsImgMutation();
    const [getTokenRefresh] = useGetTokenRefreshMutation();
    const [title, setTitle] = useState(adsId?.title);
    const [description, setDescription] = useState(adsId?.description);
    const [price, setPrice] = useState(adsId?.price);
    const { handleSubmit, register } = useForm();

    useEffect(() => {
        if (adsId) {
            setTitle(adsId.title);
            setDescription(adsId.description);
            setPrice(adsId.price);
        }
    }, [adsId]);

    // console.log(changeAds, "item");
    // console.log(id, "id");
    // console.log(updatedAds, "updatedAds");
    // console.log(adsId?.title, "AdsId");

    const onError = (error) => {
        if (error.status === 401) {
            getTokenRefresh()
                .unwrap()
                .then((token) => {
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
                });
        }
    };

    const onSubmit = async () => {
        await changeAds({
            id,
            title,
            description,
            price,
        }).catch(onError);

        setAdsModal(false);
    };

    const handelUploadImg = async (e) => {
        const imgTarget = e.target.files[0];
        await uploadAdsImg({ data: imgTarget, id }).then((data) => {
            console.log(data);
        });
        refetch();
    };

    const handleShowPhone = () => {
        setAdsModal(false);
    };

    // console.log(createAds, "createAds");
    // console.log(uploadAdsImg);

    return (
        <S.Wrapper>
            <S.ContainerBg>
                <S.ModalBlock>
                    <S.ModalContent>
                        <S.ModalTitle>Редактировать объявление</S.ModalTitle>
                        <S.ModalBtnClose>
                            <S.ModalBtnCloseLine
                                type="button"
                                onClick={handleShowPhone}
                            />
                        </S.ModalBtnClose>
                        <S.ModalFormNewArt onSubmit={handleSubmit(onSubmit)}>
                            <S.FormNewArtBlock>
                                <S.FormMewArtLabel htmlFor="name">
                                    Название
                                </S.FormMewArtLabel>
                                <S.FormNewArtInput
                                    type="text"
                                    name="title"
                                    value={title}
                                    placeholder=""
                                    {...register("title")}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </S.FormNewArtBlock>
                            <S.FormNewArtBlock>
                                <S.FormMewArtLabel htmlFor="text">
                                    Описание
                                </S.FormMewArtLabel>
                                <S.FormNewArtAreaAdv
                                    name="description"
                                    id="formArea"
                                    cols="auto"
                                    rows="10"
                                    value={description}
                                    placeholder=""
                                    {...register("description")}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                />
                            </S.FormNewArtBlock>
                            <S.FormNewArtBlock>
                                <S.FormNewArtP>
                                    Фотографии товара
                                    <S.FormNewArtPSpan>
                                        не более 5 фотографий
                                    </S.FormNewArtPSpan>
                                </S.FormNewArtP>
                                <S.FormNewArtBarImg>
                                    {adsId?.images.map((image) => (
                                        <S.FormNewArt>
                                            <S.FormNewArtImg
                                                src={`http://localhost:8090/${image.url}`}
                                                alt="Картинка"
                                            />
                                        </S.FormNewArt>
                                    ))}
                                    {adsId?.images.length < 5 && (
                                        <S.FormNewArt>
                                            <S.FormNewArtImgCover />
                                            <S.FormNewArtImgInput
                                                type="file"
                                                accept=".jpg, .jpeg, .png"
                                                onChange={handelUploadImg}
                                            />
                                        </S.FormNewArt>
                                    )}
                                </S.FormNewArtBarImg>
                            </S.FormNewArtBlock>
                            <S.FormNewArtBlockPrice>
                                <S.FormMewArtLabel htmlFor="price">
                                    Цена
                                </S.FormMewArtLabel>
                                <S.FormNewArtInputPrice
                                    type="number"
                                    name="price"
                                    id="formName"
                                    value={price}
                                    placeholder=""
                                    {...register("price")}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                                <S.FormNewArtInputPriceCover />
                            </S.FormNewArtBlockPrice>
                            <S.FormNewArtBtnPub type="submit" id="btnPublish">
                                Сохранить
                            </S.FormNewArtBtnPub>
                        </S.ModalFormNewArt>
                    </S.ModalContent>
                </S.ModalBlock>
            </S.ContainerBg>
        </S.Wrapper>
    );
}
