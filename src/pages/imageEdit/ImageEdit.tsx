import type { RootState } from 'src/store/store'
import { useSelector } from 'react-redux'
import ImgCard from "src/components/img-card";

export default function ImageEdit() {
    const selectedImage = useSelector((state: RootState) => state.images.selectedImage.url)
    return <ImgCard url={selectedImage}/>;
}
