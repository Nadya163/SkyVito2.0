/* eslint-disable react/jsx-props-no-spreading */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as S from "./Signup.style";
import { setAuth } from "../../Store/Redux/AuthSlice";
import {
    useGetTokenMutation,
    useGetUserSignUpMutation,
} from "../../ApiService/ApiService";
import { UserContext } from "../../context";

export default function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { changingUserData } = useContext(UserContext);
    const [getToken] = useGetTokenMutation();
    const [getUserSignin] = useGetUserSignUpMutation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [city, setCity] = useState("");
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
        reset,
    } = useForm({
        mode: "onBlur",
    });

    const confirmPassword = watch("password", "");
    // console.log(getToken);

    const responseToken = () => {
        getToken({ email, password })
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
                // console.log(localStorage.getItem("access_token"));
                // console.log(localStorage.getItem("refresh_token"));
            })
            .catch((error) => {
                return error;
            });
    };

    const handleRegister = async () => {
        await getUserSignin({
            email,
            password,
            name,
            surname,
            city,
        })
            .then((response) => {
                localStorage.setItem("user", JSON.stringify(response));
                // console.log("user", JSON.stringify(response));
                changingUserData(JSON.parse(localStorage.getItem("user")));
                responseToken();
                navigate("/profile");
                reset();
            })
            .catch((error) => {
                error(error.message);
            });
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSurnameChange = (e) => {
        setSurname(e.target.value);
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    return (
        <S.Wrapper>
            <S.ContainerSignup>
                <S.ModalBlock>
                    <S.ModalFormLogin onSubmit={handleSubmit(handleRegister)}>
                        <S.ModalLogo>
                            <Link to="/login">
                                <S.ModalLogoImg
                                    src="../img/logo_modal.png"
                                    alt="logo"
                                />
                            </Link>
                        </S.ModalLogo>
                        <S.ModalInputLogin
                            {...register("email", {
                                required: "Поле обязательно к заполнению.",
                            })}
                            type="email"
                            placeholder="email"
                            onChange={handleEmailChange}
                        />
                        <S.ErrorDiv>
                            {errors?.email && (
                                <p>Поле обзательное к заполнения</p>
                            )}
                        </S.ErrorDiv>
                        <S.ModalInputLogin
                            {...register("password", {
                                required: "Поле обязательно к заполнению.",
                            })}
                            type="password"
                            placeholder="Пароль"
                            onChange={handlePasswordChange}
                        />
                        <S.ErrorDiv>
                            {errors?.password && (
                                <p>{errors?.password?.message}</p>
                            )}
                        </S.ErrorDiv>
                        <S.ModalInputLogin
                            {...register("repeatPassword", {
                                required: "Поле обязательно к заполнению.",
                                validate: (value) =>
                                    value === confirmPassword ||
                                    "Пароли не совпадают.",
                            })}
                            type="password"
                            placeholder="Повторите пароль"
                            onChange={handlePasswordChange}
                        />
                        <S.ErrorDiv>
                            {errors?.repeatPassword && (
                                <p>{errors?.repeatPassword?.message}</p>
                            )}
                        </S.ErrorDiv>
                        <S.ModalInputLoginEnd
                            type="text"
                            name="first-name"
                            id="first-name"
                            placeholder="Имя (необязательно)"
                            onChange={handleNameChange}
                        />
                        <S.ModalInputLoginEnd
                            type="text"
                            name="last-name"
                            id="last-name"
                            placeholder="Фамилия (необязательно)"
                            onChange={handleSurnameChange}
                        />
                        <S.ModalInputLoginEnd
                            type="text"
                            name="city"
                            id="city"
                            placeholder="Город (необязательно)"
                            onChange={handleCityChange}
                        />
                        <S.ModalBtnEnter id="SignUpEnter" type="submit">
                            <S.BtnEnterText>Зарегистрироваться</S.BtnEnterText>
                        </S.ModalBtnEnter>
                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.ContainerSignup>
        </S.Wrapper>
    );
}
