const newOrientation = (currentOrientation: number) => {
    switch (currentOrientation) {
        case 1:
            return 6;
        case 3:
            return 8;
        case 6:
            return 3;
        default:
            return 1;
    }
};
export default newOrientation;
