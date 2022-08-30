import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import newOrientation from "src/utils/orientationsHelper";

const initialState = {
    selectedImage: {
        url: "https://assets.imgix.net/unsplash/citystreet.jpg?w=0.5",
    },
    historyImage: [],
    orientation: 1,
};

export const imagesSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        setSelectedImage: (state, action: PayloadAction<string>) => {
            state.historyImage = [];
            state.selectedImage.url = `${action.payload}?w=0.5`;
        },
        rotateImage: (state) => {
            state.orientation = newOrientation(state.orientation)

            const url = new URL(state.selectedImage.url)
            url.searchParams.set('orient', state.orientation.toString());
            state.selectedImage.url = url.href
        },
    },
});

export const { setSelectedImage, rotateImage } = imagesSlice.actions;
export default imagesSlice.reducer;
