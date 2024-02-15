import { configureStore } from "@reduxjs/toolkit";
import { fetchUsersToken, userQuery } from "../ApiService/ApiService";
import { authReducer } from "./Redux/AuthSlice";
import { adsReducer } from "./Redux/AdsSlice";
import { adsQuery } from "../ApiService/ApiAds";
import { dataReducer } from "./Redux/DataSlise";

export const store = configureStore({
    reducer: {
        ads: adsReducer,
        data: dataReducer,
        auth: authReducer,
        [fetchUsersToken.reducerPath]: fetchUsersToken.reducer,
        [adsQuery.reducerPath]: adsQuery.reducer,
        [userQuery.reducerPath]: userQuery.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(fetchUsersToken.middleware)
            .concat(adsQuery.middleware)
            .concat(userQuery.middleware),
});

export default store;
