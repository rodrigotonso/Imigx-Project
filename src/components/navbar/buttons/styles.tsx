import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export const useNavBarButtonsStyles = makeStyles((theme: Theme) =>
    createStyles({
        menuButton: {
            display: "inline-flex",
        },
        iconButton: {
            color:"white",
        },
    })
);
