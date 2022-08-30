import { red } from "@mui/material/colors";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export const useNavBarButtonsStyles = makeStyles((theme: Theme) =>
    createStyles({
        menuButton: {
            display: "inline-flex",
        },
        iconButton: {
            color: "white",
        },
        slider: {
            width:"100px !important",
            margin:"10px",
            backgroundColor: '#DDDDFF',
        },
    })
);
