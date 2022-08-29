import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export const useImgListStyles = makeStyles((theme: Theme) =>
    createStyles({
        imgList: {
            backgroundColor: "#DDD",
        },
    })
);
