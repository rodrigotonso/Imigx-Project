import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import newOrientation from "src/utils/orientationsHelper";
import setNewHistory from "src/utils/imagesHistoryHelper";

const initialState = {
    selectedImage: {
        url: "https://assets.imgix.net/unsplash/citystreet.jpg?w=0.5",
    },
    positionHistory: 0,
    historyImage: [ "https://assets.imgix.net/unsplash/citystreet.jpg?w=0.5"],
    orientation: 1,
    brightness: 0,
    invert: false,
};

export const imagesSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        setSelectedImage: (state, action: PayloadAction<string>) => {
            state.selectedImage.url = `${action.payload}?w=0.5`;
            state.historyImage = [state.selectedImage.url];
        },
        rotateImage: (state) => {
            state.orientation = newOrientation(state.orientation);
            state = { ...setNewHistory(state) };

            const url = new URL(state.selectedImage.url);
            url.searchParams.set("orient", state.orientation.toString());
            state.selectedImage.url = url.href;
        },
        setBrightness: (state, action: PayloadAction<number>) => {
            state.brightness = action.payload;
            state = { ...setNewHistory(state) };

            const url = new URL(state.selectedImage.url);
            url.searchParams.set("bri", state.brightness.toString());
            state.selectedImage.url = url.href;
        },
        invertImage: (state) => {
            state.invert = !state.invert;

            const url = new URL(state.selectedImage.url);
            url.searchParams.set("invert", state.invert.toString());
            state.selectedImage.url = url.href;
            state = { ...setNewHistory(state) };
            ([...state.historyImage]);
        },
        undoImage: (state) => {
            state.positionHistory > 0
                ? (state.positionHistory -= 1)
                : (state.positionHistory = 0);

            if (state.historyImage[state.positionHistory]) {
                state.selectedImage.url =
                    state.historyImage[state.positionHistory];
            }
        },
        redoImage: (state) => {
            state.positionHistory +=1
            if(state.positionHistory >= state.historyImage.length)
                 (state.positionHistory -= 1)

            if (state.historyImage[state.positionHistory]) {
                state.selectedImage.url =
                    state.historyImage[state.positionHistory];
            }
        },
    },
});

export const {
    setSelectedImage,
    rotateImage,
    setBrightness,
    invertImage,
    undoImage,
    redoImage,
} = imagesSlice.actions;
export default imagesSlice.reducer;
