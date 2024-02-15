/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./Modal.styled";
import {
    useCreateAdsWithoutImgMutation,
    useUploadAdsImgMutation,
} from "../../ApiService/ApiAds";
import { selectedImgPreload } from "../../Store/Selector/Selector";
import { clearImgPreload, setImgPreload } from "../../Store/Redux/AdsSlice";
import { useGetTokenRefreshMutation } from "../../ApiService/ApiService";
import { setAuth } from "../../Store/Redux/AuthSlice";

export default function AddNewAds({ setAdsModal }) {
    const dispatch = useDispatch();
    const imagePreload = useSelector(selectedImgPreload);
    const [createAdsWithoutImg] = useCreateAdsWithoutImgMutation();
    const [uploadAdsImg] = useUploadAdsImgMutation();
    const [getTokenRefresh] = useGetTokenRefreshMutation();
    const { handleSubmit, register } = useForm();
    const [selectedFile] = useState([]);
    const [createAds, setCreateAds] = useState({
        title: "",
        description: "",
        price: 0,
    });

    function changePreLoadImage(selectedImage) {
        const reader = new FileReader();
        reader.readAsDataURL(selectedImage);
        reader.onloadend = () => {
            dispatch(setImgPreload(reader.result));
        };
    }

    const handelUploadImg = async (e) => {
        const imgTarget = e.target.files[0];
        selectedFile.push(imgTarget);
        changePreLoadImage(imgTarget);
    };

    const onSubmit = async () => {
        try {
            // console.log(createAds);

            await createAdsWithoutImg(createAds).then(async (image) => {
                if (selectedFile) {
                    for (let i = 0; i < selectedFile.length; i++) {
                        uploadAdsImg({
                            data: selectedFile[i],
                            id: image.data.id,
                        });
                    }
                }
                dispatch(clearImgPreload());
                setAdsModal(false);
            });
        } catch (error) {
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
                    });
            }
        }
    };

    const handelClose = () => {
        setAdsModal(false);
    };

    // console.log(createAds, "createAds");
    // console.log(imagePreload);

    return (
        <S.Wrapper>
            <S.ContainerBg>
                <S.ModalBlock>
                    <S.ModalContent>
                        <S.ModalTitle>Новое объявление</S.ModalTitle>
                        <S.ModalBtnClose>
                            <S.ModalBtnCloseLine
                                type="button"
                                onClick={handelClose}
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
                                    id="formName"
                                    placeholder="Введите название"
                                    {...register("title")}
                                    onChange={(e) =>
                                        setCreateAds({
                                            ...createAds,
                                            title: e.target.value,
                                        })
                                    }
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
                                    placeholder="Введите описание"
                                    {...register("description")}
                                    onChange={(e) =>
                                        setCreateAds({
                                            ...createAds,
                                            description: e.target.value,
                                        })
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
                                    {imagePreload?.map((image) => (
                                        <S.FormNewArt>
                                            <S.FormNewArtImg
                                                src={image}
                                                alt="Нет фото"
                                            />
                                        </S.FormNewArt>
                                    ))}
                                    {imagePreload?.length < 5 && (
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
                                    {...register("price")}
                                    onChange={(e) =>
                                        setCreateAds({
                                            ...createAds,
                                            price: e.target.value,
                                        })
                                    }
                                />
                                <S.FormNewArtInputPriceCover />
                            </S.FormNewArtBlockPrice>
                            <S.FormNewArtBtnPub type="submit" id="btnPublish">
                                Опубликовать
                            </S.FormNewArtBtnPub>
                        </S.ModalFormNewArt>
                    </S.ModalContent>
                </S.ModalBlock>
            </S.ContainerBg>
        </S.Wrapper>
    );
}
