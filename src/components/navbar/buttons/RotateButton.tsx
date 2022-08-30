import { IconButton } from "@mui/material";
import { Rotate90DegreesCcw } from "@mui/icons-material";
import { useNavBarButtonsStyles } from "./styles";
import { rotateImage } from "src/store/slices/imagesSlice";
import propsImageCard from "src/interfaces/image";
import { useDispatch } from "react-redux";

export default function RotateButton() {
    const s = useNavBarButtonsStyles();
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(rotateImage(6));
    };
    return (
        <IconButton aria-label="Rotate" className={s.menuButton} onClick={handleClick}>
            <Rotate90DegreesCcw className={s.iconButton} />
        </IconButton>
    );
}

