import NavBar from "src/components/navbar";
import Body from "src/components/body";
import propsWithChildren from "src/interfaces/react";

const Layout = ({ children }: propsWithChildren) => {
    return (
        <div>
            <NavBar />
            <Body>{children}</Body>
        </div>
    );
};
export default Layout;
