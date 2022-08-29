export default interface propsImageCard {
    url: string;
    style?: {
        height?: number;
        width?: number;
    };
    title?: string;
}

export default interface propsImageList {
    images?: propsImageCard[];
}
