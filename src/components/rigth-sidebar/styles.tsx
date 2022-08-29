import { createStyles, makeStyles } from "@mui/styles";
import { styled, Theme } from "@mui/system";

export const useRightSideBarStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
          "& .MuiPaper-root": {
            backgroundColor: "#030E1E",
            width: "256px",
          },
        },
    })
);
