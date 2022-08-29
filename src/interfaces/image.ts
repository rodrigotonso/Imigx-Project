export default interface propsImageCard {
    url: string;
    name?: string;
    style?: {
        height?: number;
        width?: number;
    };
    title?: string;
    handleClick?: any;
}

export default interface propsImageList {
    images?: propsImageCard[];
}
