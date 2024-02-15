import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import LogoButton from "../../components/LogoButton/LogoButton";
import * as S from "./Profile.style";
import { setAuth } from "../../Store/Redux/AuthSlice";
import Cards from "../../components/Array/Cards/Cards";
import InfoPofile from "../../components/ProfileComponents/InfoProfile/InfoPofile";
import InputProfile from "../../components/ProfileComponents/InputeProfile/InputeProfile";

import { useGetAllAdsUserQuery } from "../../ApiService/ApiAds";
import {
    useGetTokenRefreshMutation,
    useGetUserProfileQuery,
} from "../../ApiService/ApiService";
import InputChangePassword from "../../components/ProfileComponents/InputPassword/InputChangePassword.jsx";

export default function Profile() {
    const dispatch = useDispatch();
    const [visibl, setVisibl] = useState(true);
    const [visiblProfile, setVisiblProfile] = useState(false);
    const [visiblPassword, setVisiblPassword] = useState(false);
    const [getTokenRefresh] = useGetTokenRefreshMutation();
    const { data: userId } = useGetUserProfileQuery();
    const { data: cardAsdIs, error, refetch } = useGetAllAdsUserQuery();

    // console.log(userId, "item");
    // console.log(allAds, "name");
    // console.log(userProfile, "nameArray");
    // console.log(chosenItems, "params");
    // console.log(changeUserProfile, "changeUserProfile");

    useEffect(() => {
        if (!error) return;
        // console.log(error);

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
                    // console.log(object);
                })
                .then(() => {
                    refetch();
                });
        }
    }, [error]);

    return (
        <main>
            <LogoButton />
            <S.MainContent>
                <S.MainH2>Здравствуйте, {userId?.name}!</S.MainH2>

                <S.MainProfile>
                    {visiblProfile && (
                        <InputProfile
                            userId={userId}
                            setVisibl={setVisibl}
                            setVisiblProfile={setVisiblProfile}
                        />
                    )}
                    {visiblPassword && (
                        <InputChangePassword
                            userId={userId}
                            setVisibl={setVisibl}
                            setVisiblPassword={setVisiblPassword}
                        />
                    )}
                </S.MainProfile>
                {visibl && (
                    <S.MainProfileSell>
                        <InfoPofile
                            userId={userId}
                            setVisibl={setVisibl}
                            setVisiblProfile={setVisiblProfile}
                            setVisiblPassword={setVisiblPassword}
                        />
                    </S.MainProfileSell>
                )}
                <S.MainTitle>Мои товары</S.MainTitle>
                <S.MainContent>
                    {cardAsdIs?.length > 0 ? (
                        <S.ContentCards>
                            {cardAsdIs.map((item) => (
                                <Cards key={item.id} item={item} />
                            ))}
                        </S.ContentCards>
                    ) : (
                        <S.MainMessage>
                            Вы пока не опубликовали никаких товаров
                        </S.MainMessage>
                    )}
                </S.MainContent>
            </S.MainContent>
        </main>
    );
}
