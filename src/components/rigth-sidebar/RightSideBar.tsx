import { Drawer } from "@mui/material";
import { useLayout } from "src/contexts";
import propsWithChildren from "src/interfaces/react";
import { useRightSideBarStyles } from "./styles";

const RightSideBar = ({children}: propsWithChildren) => {
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
        >{children}</Drawer>
    );
};

export default RightSideBar;
