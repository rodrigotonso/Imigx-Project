import NavBar from "src/components/navbar";
import Body from "src/components/body";
import propsWithChildren from "src/interfaces/react";
import RightSideBar from "src/components/rigth-sidebar";
import ImageGallery from "src/pages/imageGallery/ImageGallery";

const Layout = ({ children }: propsWithChildren) => {
    return (
        <div>
            <NavBar />
            <RightSideBar>
                <ImageGallery />
            </RightSideBar>
            <Body>{children}</Body>
        </div>
    );
};
export default Layout;
