export const selectTimestamp = (state) => state.data.timestamp;
export const selectSearchItem = (state) => state.ads.searchItem;
export const selectDateString = (state) => state.data.dateString;
export const selectShowModal = (state) => state.ads.showModal;
export const selectIsUserLogdIn = (state) => state.auth.access !== "";
export const selectedImgPreload = (state) => state.ads.imgPreload;
