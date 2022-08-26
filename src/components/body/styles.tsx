import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export const useBodyStyles = makeStyles((theme: Theme) =>
    createStyles({
        body: {
            backgroundColor: "#333",
            backdropFilter: "blur(3px)",
            color: "#FFF",
            height: "54px",
            textAlign: "center",
            fontSize: "34pt",
        },
    })
);
