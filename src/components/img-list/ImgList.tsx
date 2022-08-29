import propsImageList from "src/interfaces/image";
import { useImgListStyles } from "./styles";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const ImgList = ({ images }: propsImageList) => {
    console.log(images);
    const s = useImgListStyles();
    return (
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {images ? (
                images.map((image, index) => (
                    <ImageListItem key={index + image.url}>
                        <img
                            src={`${image.url}`}
                            srcSet={`${image.url}`}
                            alt={image.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))
            ) : (
                <>Sin Imagenes</>
            )}
        </ImageList>
    );
};
export default ImgList;
