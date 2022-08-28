import axios from "axios";
import CONFIG from "src/config/general";

const AxiosBase = axios.create({
    baseURL: CONFIG.API_URL,
});

export default AxiosBase;
