import { useMemo, useState } from "react";
import GlobalStyles from "./GlobalStyles";
import * as S from "./App.style";
import AppRoutes from "./router";
import { UserContext } from "./context";

export default function App() {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user") || "null"),
    );
    const contextValue = useMemo(
        () => ({ userData: user, changingUserData: setUser }),
        [user, setUser],
    );

    return (
        <UserContext.Provider value={contextValue}>
            <GlobalStyles />
            <S.Wrapper>
                <S.Container>
                    <AppRoutes user={user} />
                </S.Container>
            </S.Wrapper>
        </UserContext.Provider>
    );
}
