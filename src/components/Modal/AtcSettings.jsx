import * as S from "./Modal.styled";

export default function AtcSettings() {
    return (
        <S.Wrapper>
            <S.ContainerBg>
                <S.ModalBlock>
                    <S.ModalContent>
                        <S.ModalTitle>Редактировать объявление</S.ModalTitle>
                        <S.ModalBtnClose>
                            <S.ModalBtnCloseLine />
                        </S.ModalBtnClose>
                        <S.ModalFormNewArt id="formNewArt" action="#">
                            <S.FormNewArtBlock>
                                <S.FormMewArtLabel htmlFor="name">
                                    Название
                                </S.FormMewArtLabel>
                                <S.FormNewArtInput
                                    type="text"
                                    name="name"
                                    id="formName"
                                    placeholder="Введите название"
                                    value="Ракетка для большого тенниса Triumph Pro STС Б/У"
                                />
                            </S.FormNewArtBlock>
                            <S.FormNewArtBlock>
                                <S.FormMewArtLabel htmlFor="text">
                                    Описание
                                </S.FormMewArtLabel>
                                <S.FormNewArtArea
                                    class="form-newArt__area"
                                    name="text"
                                    id="formArea"
                                    cols="auto"
                                    rows="10"
                                    placeholder="Введите описание"
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </S.FormNewArtArea>
                            </S.FormNewArtBlock>
                            <S.FormNewArtBlock>
                                <S.FormNewArtP>
                                    Фотографии товара
                                    <S.FormNewArtPSpan>
                                        не более 5 фотографий
                                    </S.FormNewArtPSpan>
                                </S.FormNewArtP>
                                <S.FormNewArtBarImg>
                                    <S.FormNewArtImg>
                                        <img src="" alt="" />
                                        <S.FormNewArtImgCover />
                                    </S.FormNewArtImg>
                                    <S.FormNewArtImg>
                                        <img src="" alt="" />
                                        <S.FormNewArtImgCover />
                                    </S.FormNewArtImg>
                                    <S.FormNewArtImg>
                                        <img src="" alt="" />
                                        <S.FormNewArtImgCover />
                                    </S.FormNewArtImg>
                                    <S.FormNewArtImg>
                                        <img src="" alt="" />
                                        <S.FormNewArtImgCover />
                                    </S.FormNewArtImg>
                                    <S.FormNewArtImg>
                                        <img src="" alt="" />
                                        <S.FormNewArtImgCover />
                                    </S.FormNewArtImg>
                                </S.FormNewArtBarImg>
                            </S.FormNewArtBlock>
                            <S.FormNewArtBlockPrice>
                                <S.FormMewArtLabel htmlFor="price">
                                    Цена
                                </S.FormMewArtLabel>
                                <S.FormNewArtInputPrice
                                    type="text"
                                    name="price"
                                    id="formName"
                                    value="2 200"
                                />
                                <S.FormNewArtInputPriceCover />
                            </S.FormNewArtBlockPrice>
                            <S.FormNewArtBtnPub type="button" id="btnPublish">
                                Сохранить
                            </S.FormNewArtBtnPub>
                        </S.ModalFormNewArt>
                    </S.ModalContent>
                </S.ModalBlock>
            </S.ContainerBg>
        </S.Wrapper>
    );
}
