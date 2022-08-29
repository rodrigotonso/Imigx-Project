import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import propsImageCard from "src/interfaces/image";
import { useImgCardStyles } from "./styles";

const ImgCard = ({url, style}:propsImageCard) => {
    const s = useImgCardStyles();
    return (
        <Card className={s.imageCard}>
            <CardMedia
                component="img"
                alt="green iguana"
                {...style}
                image={url}
            />
        </Card>
    );
};

export default ImgCard;
