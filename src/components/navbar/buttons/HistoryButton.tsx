import { IconButton } from "@mui/material";
import { History } from "@mui/icons-material";
import { useNavBarButtonsStyles } from "./styles";

export default function HistoryButton() {
    const s = useNavBarButtonsStyles();
    
    return (
        <IconButton aria-label="history" className={s.menuButton}>
            <History className={s.iconButton} />
        </IconButton>
    );
}
