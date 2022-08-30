import { IconButton } from "@mui/material";
import { Redo } from "@mui/icons-material";
import { useNavBarButtonsStyles } from "./styles";
import { redoImage } from "src/store/slices/imagesSlice";
import { useDispatch } from "react-redux";

export default function RedoButton() {
    const s = useNavBarButtonsStyles();
    const dispatch = useDispatch();
      
    const handleClick = () => {
        dispatch(redoImage());
    };

    return (
        <IconButton aria-label="Redo" className={s.menuButton} onClick={handleClick}>
            <Redo className={s.iconButton} />
        </IconButton>
    );
}
