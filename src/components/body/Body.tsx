import propsWithChildren from "src/interfaces/react";
import { useBodyStyles } from "./styles";

const Body = ({children}: propsWithChildren) => {
    const s = useBodyStyles();

    return <div className={s.body}>{children}</div>;
};

export default Body;
