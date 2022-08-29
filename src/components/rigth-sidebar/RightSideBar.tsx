import { SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import { useRightSideBarStyles } from "./styles";

const RightSideBar = () => {
    const s = useRightSideBarStyles();
    const [show, setShow] = useState(true);
    return (
        <div className={s.sideBar}>
            <SwipeableDrawer
                anchor="right"
                open={show}
                onClose={() => setShow(!show)}
                onOpen={() => setShow(!show)}
                onClick={() => setShow(!show)}
                className={s.drawer}
            >
                <p></p>
            </SwipeableDrawer>
        </div>
    );
};

export default RightSideBar;
