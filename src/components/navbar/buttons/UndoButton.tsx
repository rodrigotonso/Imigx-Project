import { IconButton } from "@mui/material";
import { Undo } from "@mui/icons-material";
import { useNavBarButtonsStyles } from "./styles";

export default function UndoButton() {
    const s = useNavBarButtonsStyles();
    
    return (
        <IconButton aria-label="Undo" className={s.menuButton}>
            <Undo className={s.iconButton} />
        </IconButton>
    );
}
