import { createStyles, makeStyles } from "@mui/styles";
import { styled, Theme } from "@mui/system";

export const useNavBarStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            backgroundColor: "#17F",
        },
        toolbar: {
            justifyContent: "space-between",
        },
        menuButton: {
            display: "inline-flex",
        },
        iconButton: {
            color:"white",
        },
    })
);
