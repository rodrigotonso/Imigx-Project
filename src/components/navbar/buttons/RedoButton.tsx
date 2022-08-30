import { IconButton } from "@mui/material";
import { Redo } from "@mui/icons-material";
import { useNavBarButtonsStyles } from "./styles";

export default function RedoButton() {
    const s = useNavBarButtonsStyles();
    
    return (
        <IconButton aria-label="Redo" className={s.menuButton}>
            <Redo className={s.iconButton} />
        </IconButton>
    );
}
