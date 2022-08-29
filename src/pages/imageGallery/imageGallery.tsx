import { useEffect, useState } from "react";
import ImgList from "src/components/img-list";
import getImagesList from "./imageGalleryContainer";

export default function ImageGallery() {
    const [imageList, setImageList] = useState<any[]>([]);

    useEffect(() => {
        const getImages = async () => {
            const response = await getImagesList();
            setImageList([...response]);
        };
        getImages();
    }, []);

    return <ImgList images={[...imageList]} style={{ height: 100 }} />;
}
