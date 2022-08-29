import Layout from "src/layouts/Layout";
import ImageEdit from "src/pages/imageEdit/ImageEdit";
import LayoutProvider from "src/contexts";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <LayoutProvider>
                <Layout>
                    <ImageEdit />
                </Layout>
            </LayoutProvider>
        </Provider>
    );
}

export default App;
