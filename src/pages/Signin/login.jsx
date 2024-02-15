/* eslint-disable react/jsx-props-no-spreading */
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as S from "./Signin.style";
import { UserContext } from "../../context";
import {
    useGetTokenMutation,
    useGetUserMutation,
} from "../../ApiService/ApiService";
import { setAuth } from "../../Store/Redux/AuthSlice";

export default function Signin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [getToken] = useGetTokenMutation();
    const [getTokenAndLogin] = useGetUserMutation();
    const { changingUserData } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur",
    });

    const userLogin = async () => {
        await getTokenAndLogin().then((response) => {
            localStorage.setItem("user", JSON.stringify(response));
            localStorage.setItem("tokens", JSON.stringify(response.tokens));
            // console.log("user", JSON.stringify(response));
            changingUserData(JSON.parse(localStorage.getItem("user")));
        });
    };

    // console.log(localStorage.getItem("user"));

    const handleLogin = async () => {
        await getToken({
            email,
            password,
        })
            .unwrap()
            .then((token) => {
                if (!token.access_token || !token.refresh_token) {
                    setLoginError("Неверный пароль или электронная почта");
                    return;
                }
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
            })
            .then(async () => {
                await userLogin();
                navigate("/profile");
                reset();
            })
            .catch(() => {
                setLoginError("Неверный пароль или электронная почта");
            });
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setLoginError("");
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setLoginError("");
    };

    return (
        <S.Wrapper>
            <S.ContainerEnter>
                <S.ModalBlock>
                    <S.ModalFormLogin onSubmit={handleSubmit(handleLogin)}>
                        <S.ModalLogo>
                            <Link to="/">
                                <S.ModalLogoImg
                                    src="../img/logo_modal.png"
                                    alt="logo"
                                />
                            </Link>
                        </S.ModalLogo>
                        <S.ModalInputLogin
                            {...register("email", {
                                required: true,
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
                        <S.ModalInput
                            {...register("password", {
                                required: true,
                            })}
                            type="password"
                            placeholder="Пароль"
                            onChange={handlePasswordChange}
                        />
                        <S.ErrorDivEnd>
                            {errors?.password && (
                                <p>Поле обзательное к заполнения</p>
                            )}
                            {loginError && <p>{loginError}</p>}
                        </S.ErrorDivEnd>
                        <S.ModalBtnEnter type="submit" id="btnEnter">
                            <S.BtnEnterText>Войти</S.BtnEnterText>
                        </S.ModalBtnEnter>
                        <Link to="/signup">
                            <S.ModalBtnSignup type="button" id="btnSignUp">
                                <S.BtnSignupText>
                                    Зарегистрироваться
                                </S.BtnSignupText>
                            </S.ModalBtnSignup>
                        </Link>
                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.ContainerEnter>
        </S.Wrapper>
    );
}
