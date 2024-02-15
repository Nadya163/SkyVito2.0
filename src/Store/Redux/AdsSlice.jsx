/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allAds: [],
    searchItem: "",
    allComments: "",
    showModal: false,
    commentsCount: "",
    imgPreload: [],
};

const adsSlice = createSlice({
    name: "ads",
    initialState,
    reducers: {
        setAllAds: (state, action) => {
            state.allAds = action.payload;
        },
        setSearchItem: (state, action) => {
            state.searchItem = action.payload;
        },
        setAllComments: (state, action) => {
            state.allComments = action.payload;
        },
        setShowModal: (state, action) => {
            state.showModal = action.payload;
        },
        setImgPreload: (state, action) => {
            state.imgPreload.push(action.payload);
        },
        clearImgPreload: (state) => {
            state.imgPreload = [];
        },
    },
});

export const {
    setAllAds,
    setSearchItem,
    setAllComments,
    setShowModal,
    setImgPreload,
    clearImgPreload,
} = adsSlice.actions;
export const adsReducer = adsSlice.reducer;
