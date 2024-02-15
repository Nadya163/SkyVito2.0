/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as S from "./InputeProfile.style";
import {
    useChangeUserProfileMutation,
    useUploadUserAvatarMutation,
} from "../../../ApiService/ApiService";

export default function InputProfile({
    // setUser,
    userId,
    setVisibl,
    setVisiblProfile,
}) {
    const [updatedUser, setUpdatedUser] = useState(userId);
    const [changeUserProfile] = useChangeUserProfileMutation();
    const [uploadAvatar] = useUploadUserAvatarMutation();
    const [name, setName] = useState(userId.name);
    const [surname, setSurname] = useState(userId.surname);
    const [city, setCity] = useState(userId.city);
    const [phone, setPhone] = useState(userId.phone);
    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreload, setImagePreload] = useState("");
    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm();

    // console.log(setUpdatedUser);
    // console.log(changeUserProfile);
    // console.log(uploadUserAvatar, "avatar");

    function changePreLoadImage(selectedImage) {
        const reader = new FileReader();
        reader.readAsDataURL(selectedImage);
        reader.onloadend = () => {
            setImagePreload(reader.result);
        };
    }

    const handleFormSubmit = async (event) => {
        setSelectedFile(event.target.files[0]);
        changePreLoadImage(event.target.files[0]);
    };

    const onSubmit = async (data) => {
        try {
            const updatedUserData = {
                ...updatedUser,
                name: data.name,
                surname: data.surname,
                city: data.city,
                phone: data.phone,
            };
            console.log(updatedUserData);

            const response = await changeUserProfile(updatedUserData);
            if (response) {
                setUpdatedUser(updatedUserData);
                // Обновляем данные в локальном хранилище
                localStorage.setItem("user", JSON.stringify(updatedUserData));
                console.log("Профиль успешно обновлен!");
            }
            const formData = new FormData();
            formData.append("file", selectedFile);
            await uploadAvatar(formData);
            setUpdatedUser(updatedUserData);
            // setUser(updatedUserData);
            setVisiblProfile(false);
            setVisibl(true);
        } catch (error) {
            console.error(error);
            console.log("Ошибка при обновлении профиля.");
        }
    };

    const handelBackClick = () => {
        setVisibl(true);
        setVisiblProfile(false);
    };

    return (
        <S.ProfileContent>
            <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
            <S.ProfileSettings>
                <S.ProfileSettings>
                    <S.SettingsLeft>
                        <S.SettingsImg>
                            <S.SettingsImgPreload
                                src={imagePreload || "#"}
                                alt=""
                            />
                        </S.SettingsImg>
                        <S.SettingsFileInput
                            id="input_form"
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            onChange={handleFormSubmit}
                        />
                        <S.SettingsChangePhoto htmlFor="input_form">
                            Заменить
                        </S.SettingsChangePhoto>
                    </S.SettingsLeft>
                    <S.SettingsRight>
                        <S.SettingsForm onSubmit={handleSubmit(onSubmit)}>
                            <S.SettingsDiv>
                                <S.SettingsFLabelName htmlFor="name">
                                    Имя
                                </S.SettingsFLabelName>
                                <S.SettingsFName
                                    id="settings-fname"
                                    name="name"
                                    type="text"
                                    value={name}
                                    placeholder=""
                                    {...register("name")}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </S.SettingsDiv>
                            <S.SettingsDiv>
                                <S.SettingsLabelName htmlFor="surname">
                                    Фамилия
                                </S.SettingsLabelName>
                                <S.SettingsLName
                                    id="settings-lname"
                                    name="surname"
                                    type="text"
                                    value={surname}
                                    placeholder=""
                                    {...register("surname")}
                                    onChange={(e) => setSurname(e.target.value)}
                                />
                            </S.SettingsDiv>
                            <S.SettingsDiv>
                                <S.SettingsLabelName htmlFor="city">
                                    Город
                                </S.SettingsLabelName>
                                <S.SettingsCity
                                    id="settings-city"
                                    name="city"
                                    type="text"
                                    value={city}
                                    placeholder=""
                                    {...register("city")}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </S.SettingsDiv>
                            <S.SettingsDiv>
                                <S.SettingsLabelName htmlFor="phone">
                                    Телефон
                                </S.SettingsLabelName>
                                <S.SettingsPhone
                                    id="settings-phone"
                                    name="phone"
                                    type="tel"
                                    value={phone}
                                    placeholder="+79161234567"
                                    {...register("phone", {
                                        required: "Введите телефон",
                                        pattern: {
                                            value: /^[+]?[0-9]{8,15}$/,
                                            message: "Неверный формат телефона",
                                        },
                                    })}
                                    onChange={(e) => setPhone(e.target.value)}
                                />

                                {errors.phone && (
                                    <S.ErrorDiv>
                                        {errors.phone.message}
                                    </S.ErrorDiv>
                                )}
                            </S.SettingsDiv>
                            <S.SettingsBtn type="submit" id="settings-btn">
                                Сохранить
                            </S.SettingsBtn>
                            <S.SettingsBtn
                                type="button"
                                id="settings-btn"
                                onClick={handelBackClick}
                            >
                                Вернуться
                            </S.SettingsBtn>
                        </S.SettingsForm>
                    </S.SettingsRight>
                </S.ProfileSettings>
            </S.ProfileSettings>
        </S.ProfileContent>
    );
}
