/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as S from "../InputeProfile/InputeProfile.style";
import { useUpdateUserPasswordMutation } from "../../../ApiService/ApiService";

export default function InputChangePassword({
    userId,
    setVisibl,
    setVisiblPassword,
}) {
    // const [updatedUser, setUpdatedUser] = useState(userId);
    const [changeUserPassword] = useUpdateUserPasswordMutation(userId);
    const [password_1, setPassword] = useState(userId.password);
    const [password_2, setRepeatPassword] = useState("");
    const {
        handleSubmit,
        register,
        // setError,
        // formState: { errors },
    } = useForm();

    // console.log(setUpdatedUser);
    // console.log(changeUserPassword, "password");

    const onSubmit = async () => {
        await changeUserPassword({
            password_1,
            password_2,
        }).then((response) => {
            console.log(response);
            setVisibl(true);
            setVisiblPassword(false);
        });
    };

    const handelBackClick = () => {
        setVisibl(true);
        setVisiblPassword(false);
    };

    return (
        <S.ProfileContent>
            <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
            <S.ProfileSettings>
                <S.ProfileSettings>
                    <S.SettingsLeft>
                        {userId?.avatar ? (
                            <S.SellerImges
                                src={`http://localhost:8090/${userId?.avatar}`}
                                alt=""
                            />
                        ) : (
                            <S.SellerImges src="../img/Ellipse 1.svg" alt="" />
                        )}
                    </S.SettingsLeft>
                    <S.SettingsRight>
                        <S.SettingsForm onSubmit={handleSubmit(onSubmit)}>
                            <S.SettingsDiv>
                                <S.SettingsLabelName htmlFor="password">
                                    Пароль
                                </S.SettingsLabelName>
                                <S.SettingsPhone
                                    type="password"
                                    value={password_1}
                                    placeholder="Введите пароль"
                                    {...register("password_1")}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </S.SettingsDiv>
                            <S.SettingsDiv>
                                <S.SettingsLabelName htmlFor="password">
                                    Повторить пароль
                                </S.SettingsLabelName>
                                <S.SettingsPhone
                                    type="password"
                                    value={password_2}
                                    placeholder="Повторите пароль "
                                    {...register("password_2")}
                                    onChange={(e) =>
                                        setRepeatPassword(e.target.value)
                                    }
                                />
                            </S.SettingsDiv>
                            <S.SettingsBtn type="submit" id="settings-btn">
                                Изменить пароль
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
