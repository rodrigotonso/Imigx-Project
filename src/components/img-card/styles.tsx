import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export const useImgCardStyles = makeStyles((theme: Theme) =>
    createStyles({
        imageCard: {
            backgroundColor: "#DDD",
        },
    })
);
