import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ImgList from "src/components/img-list";
import propsImageCard from "src/interfaces/image";
import { setSelectedImage } from "src/store/slices/imagesSlice";
import getImagesList from "./imageGalleryContainer";

export default function ImageGallery() {
    const [imageList, setImageList] = useState<any[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const getImages = async () => {
            const response = await getImagesList();
            setImageList([...response]);
        };
        getImages();
    }, []);

    const selectImage = (image: propsImageCard) => {
        dispatch(setSelectedImage(image.url));
    };

    return (
        <ImgList
            images={[...imageList]}
            handleClick={selectImage}
            style={{ height: 100 }}
        />
    );
}
