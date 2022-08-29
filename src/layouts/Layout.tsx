import NavBar from "src/components/navbar";
import Body from "src/components/body";
import propsWithChildren from "src/interfaces/react";
import RightSideBar from "src/components/rigth-sidebar";

const Layout = ({ children }: propsWithChildren) => {
    return (
        <div>
            <NavBar />
            <RightSideBar />
            <Body>{children}</Body>
        </div>
    );
};
export default Layout;
