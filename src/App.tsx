import Layout from "src/layouts/Layout";
import ImageGallery from "src/pages/imageGallery/ImageGallery";
import LayoutProvider from "src/contexts";

function App() {
    return (
        <LayoutProvider>
            <Layout>
                <ImageGallery />
            </Layout>
        </LayoutProvider>
    );
}

export default App;
