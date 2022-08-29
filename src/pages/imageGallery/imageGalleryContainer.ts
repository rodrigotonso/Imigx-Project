import { getImages } from "src/api/images";

export const getImagesList = async () => {
    let response = await getImages();
    if (response.success) {
        return [...response.payload]
    } else {
        return response.error.message;
    }
};

export default getImagesList