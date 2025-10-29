import axios from "axios";
import { envConfig } from "@/config";

const axiosInstance = axios.create({
    baseURL: envConfig.uri,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;