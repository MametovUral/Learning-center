import axios from "axios";
import { getItem } from "../helpers/persistance-store";

axios.defaults.baseURL = "http://195.158.9.124:4108/api";

axios.interceptors.request.use(
  (config) => {
    const token = getItem("token");
    const xAuthToken = token ? token : "";
    config.headers["x-auth-token"] = xAuthToken;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
