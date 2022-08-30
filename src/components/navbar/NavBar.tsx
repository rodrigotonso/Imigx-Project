import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Undo, Redo, History, Collections } from "@mui/icons-material";
import { useNavBarStyles } from "./styles";
import { useLayout } from "src/contexts";
import HistoryButton from "./buttons/HistoryButton";
import UndoButton from "./buttons/UndoButton";
import RedoButton from "./buttons/RedoButton";
import RotateButton from "./buttons/RotateButton";
import BrightnessButton from "./buttons/BrightnessButton";
import InvertButton from "./buttons/InvertButton";

const NavBar = () => {
    const s = useNavBarStyles();
    const { showSideBar } = useLayout();

    return (
        <AppBar className={s.appBar}>
            <Toolbar className={s.toolbar}>
                <div>
                    <HistoryButton />
                    <UndoButton />
                    <RedoButton />
                </div>
                <div className={s.editButtons}>
                    <RotateButton />
                    <BrightnessButton />
                    <InvertButton />
                </div>
                <div>
                    <IconButton
                        aria-label="collections"
                        className={s.menuButton}
                        onClick={showSideBar}
                    >
                        <Collections className={s.iconButton} />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
