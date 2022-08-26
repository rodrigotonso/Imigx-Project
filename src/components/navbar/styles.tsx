import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export const useNavBarStyles = makeStyles((theme: Theme) =>
    createStyles({
        navBar: {
            backgroundColor: "#010101",
            backdropFilter: "blur(3px)",
            color: "#FFF",
            height: "54px",
            textAlign: "center",
            fontSize: "34pt",
        },
    })
);
