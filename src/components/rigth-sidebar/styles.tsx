import { createStyles, makeStyles } from "@mui/styles";
import { styled, Theme } from "@mui/system";

export const useRightSideBarStyles = makeStyles((theme: Theme) =>
    createStyles({
        sideBar: {
            backgroundColor: "#17F",
        },
        drawer: {
          "& .MuiPaper-root": {
            backgroundColor: "#030E1E !important",
            width: "256px",
          },
        },
    })
);
