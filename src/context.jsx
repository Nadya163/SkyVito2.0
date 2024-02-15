import { createContext, useContext } from "react";

export const UserContext = createContext({
    userData: "",
    changingUserData: () => {},
    changingUserInfo: () => {},
});

export const useUserContextLoginLogout = () => {
    const userData = useContext(UserContext);
    if (!userData) {
        return;
    }
    // eslint-disable-next-line consistent-return
    return userData;
};
