/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adsQuery = createApi({
    reducerPath: "adsQuery",
    tagTypes: ["ADS", "Comments"],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8090" }),
    endpoints: (build) => ({
        getAllAds: build.query({
            // Получить все объявления
            query: () => ({
                url: "/ads",
                method: "GET",
            }),
            providesTags: [{ type: "ADS", id: "LIST" }],
        }),
        createAds: build.mutation({
            // Создать объявение
            query: (body) => ({
                url: "/ads",
                method: "POST",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                    "Content-type": "application/json",
                },
                body,
            }),
            invalidatesTags: [{ type: "ADS", id: "LIST" }],
        }),
        getAllAdsUser: build.query({
            // Получить всех объявленния текущего пользователя
            query: (body) => ({
                url: "/ads/me",
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                    "Content-type": "application/json",
                },
                body,
            }),
            providesTags: [{ type: "ADS", id: "LIST" }],
        }),
        createAdsWithoutImg: build.mutation({
            // Создать объявление без изображений
            query: ({ title, description, price }) => ({
                url: "/adstext",
                method: "POST",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                    "Content-type": "application/json",
                },
                body: {
                    title,
                    description,
                    price,
                },
            }),
            invalidatesTags: [{ type: "ADS", id: "LIST" }],
        }),
        getAdsId: build.query({
            // Получить объявление по ID
            query: (id) => ({
                url: `/ads/${id}`,
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                },
            }),
            providesTags: [{ type: "ADS", id: "LIST" }],
        }),
        deleteAdsId: build.mutation({
            // Удалить объявление по ID
            query: (id) => ({
                url: `/ads/${id}`,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                    "Content-type": "application/json",
                },
            }),
            invalidatesTags: [{ type: "ADS", id: "LIST" }],
        }),
        changeAds: build.mutation({
            // Изменить объявление
            query: ({ id, title, description, price }) => ({
                url: `/ads/${id}`,
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    description,
                    price,
                }),
            }),
            invalidatesTags: ["ADS"],
        }),
        uploadAdsImg: build.mutation({
            // Загрузить картинку в объявление
            query: ({ data, id }) => {
                const formData = new FormData();
                if (data) {
                    formData.append("file", data);
                }
                return {
                    url: `/ads/${id}/image`,
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                    },
                    body: formData,
                };
            },
            invalidatesTags: [{ type: "ADS", id: "LIST" }],
        }),
        getAllCommentsAds: build.query({
            // Получить все комментарии по объявлению
            query: ({ id }) => ({
                url: `/ads/${id}/comments`,
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                },
            }),
            providesTags: [
                { type: "ADS", id: "LIST" },
                { type: "ADS", id: "LIST" },
            ],
        }),
        createCommentAds: build.mutation({
            // Создать комментарий к объявлению
            query: ({ id, text }) => ({
                url: `/ads/${id}/comments`,
                method: "POST",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ text }),
            }),
            invalidatesTags: [
                { type: "ADS", id: "LIST" },
                { type: "Comments", id: "LIST" },
            ],
        }),
        // deleteAdsImg: build.mutation({
        //     // Удалить картинку из объявления
        //     query: (body) => ({
        //         url: '/ads/{id}/image',
        //         method: 'DELETE',
        //         headers: {
        //             'Content-type': 'application/json',
        //         },
        //         body,
        //     }),
        //     invalidatesTags: ['ADS'],
        // }),
    }),
});

export const {
    useGetAllAdsQuery,
    useCreateAdsMutation,
    useGetAllAdsUserQuery,
    useCreateAdsWithoutImgMutation,
    useGetAdsIdQuery,
    useDeleteAdsIdMutation,
    useChangeAdsMutation,
    useUploadAdsImgMutation,
    // useDeleteAdsImg,
    useGetAllCommentsAdsQuery,
    useCreateCommentAdsMutation,
} = adsQuery;
