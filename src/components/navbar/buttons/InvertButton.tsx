import { IconButton } from "@mui/material";
import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup';
import { useNavBarButtonsStyles } from "./styles";
import { invertImage } from "src/store/slices/imagesSlice";
import { useDispatch } from "react-redux";

export default function InvertButton() {
    const s = useNavBarButtonsStyles();
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(invertImage());
    };

    return (
        <IconButton aria-label="Invert" className={s.menuButton} onClick={handleClick}>
            <WifiProtectedSetupIcon className={s.iconButton} />
        </IconButton>
    );
}

