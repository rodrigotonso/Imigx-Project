import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import propsImageCard from "src/interfaces/components";
import { useImgCardStyles } from "./styles";

const ImgCard = ({imgURL, size}:propsImageCard) => {
    const s = useImgCardStyles();
    return (
        <Card className={s.imageCard}>
            <CardMedia
                component="img"
                alt="green iguana"
                {...size}
                image={imgURL}
            />
        </Card>
    );
};

export default ImgCard;
