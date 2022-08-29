import { Drawer, SwipeableDrawer } from "@mui/material";
import { useLayout } from "src/contexts";
import { useRightSideBarStyles } from "./styles";

const RightSideBar = () => {
    const s = useRightSideBarStyles();
    const { visibleSideBar, showSideBar } = useLayout();

    return (
        <Drawer
            anchor="right"
            open={visibleSideBar || false}
            onClose={showSideBar}
            onKeyDown={showSideBar}
            onClick={showSideBar}
            className={s.drawer}
        ></Drawer>
    );
};

export default RightSideBar;
