import { IconButton } from "@mui/material";
import { Undo } from "@mui/icons-material";
import { useNavBarButtonsStyles } from "./styles";
import { undoImage } from "src/store/slices/imagesSlice";
import { useDispatch } from "react-redux";

export default function UndoButton() {
    const s = useNavBarButtonsStyles();
    const dispatch = useDispatch();
      
    const handleClick = () => {
        dispatch(undoImage());
    };

    return (
        <IconButton aria-label="Undo" className={s.menuButton} onClick={handleClick}>
            <Undo className={s.iconButton} />
        </IconButton>
    );
}
