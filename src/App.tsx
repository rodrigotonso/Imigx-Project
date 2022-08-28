import Layout from "src/layouts/Layout";
import ImgCard from "./components/img-card";

function App() {
    console.log(window.location.href)
    return (
        <Layout>
            <ImgCard imgURL='https://assets.imgix.net/unsplash/alarmclock.jpg'/>
        </Layout>
    );
}

export default App;
