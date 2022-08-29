import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    selectedImage: { url: "https://assets.imgix.net/unsplash/citystreet.jpg" },
};

export const imagesSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        setSelectedImage: (state, action: PayloadAction<string>) => {
            state.selectedImage.url = action.payload;
        },
    },
});

export const { setSelectedImage } = imagesSlice.actions;
export default imagesSlice.reducer;
