import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Undo, Redo, History, Collections } from "@mui/icons-material";
import { useNavBarStyles } from "./styles";

const NavBar = () => {
    const s = useNavBarStyles();

    return (
        <AppBar className={s.appBar}>
            <Toolbar className={s.toolbar}>
                <div>
                    <IconButton aria-label="history" className={s.menuButton}>
                        <History className={s.iconButton} />
                    </IconButton>
                    <IconButton aria-label="undo" className={s.menuButton}>
                        <Undo className={s.iconButton} />
                    </IconButton>
                    <IconButton aria-label="redo" className={s.menuButton}>
                        <Redo className={s.iconButton} />
                    </IconButton>
                </div>
                <div>
                    <IconButton
                        aria-label="collections"
                        className={s.menuButton}
                    >
                        <Collections className={s.iconButton} />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
