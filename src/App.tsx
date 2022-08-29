import Layout from "src/layouts/Layout";
import ImageEdit from "src/pages/imageEdit/ImageEdit";
import LayoutProvider from "src/contexts";

function App() {
    return (
        <LayoutProvider>
            <Layout>
                <ImageEdit />
            </Layout>
        </LayoutProvider>
    );
}

export default App;
