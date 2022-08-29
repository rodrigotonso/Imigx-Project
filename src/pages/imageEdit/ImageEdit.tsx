import { useState } from "react";
import ImgCard from "src/components/img-card";

export default function ImageEdit() {
    const[currentImage, setCurrentImage] = useState('https://assets.imgix.net/unsplash/citystreet.jpg')

    return <ImgCard url={currentImage}/>;
}
