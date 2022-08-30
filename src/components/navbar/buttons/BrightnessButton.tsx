import { IconButton, Slider } from "@mui/material";
import { useNavBarButtonsStyles } from "./styles";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setBrightness } from "src/store/slices/imagesSlice";

export default function BrightnessButton() {
    const s = useNavBarButtonsStyles();
    const [showSlider, setShowSlider] = useState(true);
    const dispatch = useDispatch();
    const bright = useSelector((state: RootState) => state.images.brightness)

    const handleChange = (e, value) => {
        let bright = !value ? 0 : value > 100 ? 100 : value;
        dispatch(setBrightness(bright));
    };

    return (
        <>
            {showSlider ? (
                <IconButton
                    aria-label="Brightness"
                    className={s.menuButton}
                    onClick={() => setShowSlider((prev: boolean) => !prev)}
                >
                    <TipsAndUpdatesIcon className={s.iconButton} />
                </IconButton>
            ) : (
                <Slider
                    aria-label="Volume"
                    value={bright}
                    step={1}
                    min={-100}
                    max={100}
                    onChange={handleChange}
                    onBlur={() => setShowSlider((prev: boolean) => !prev)}
                    onClick={() => setShowSlider((prev: boolean) => !prev)}
                    className={s.slider}
                />
            )}
        </>
    );
}
