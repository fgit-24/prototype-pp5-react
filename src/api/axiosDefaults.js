import axios from "axios";

axios.defaults.baseURL = "https://pp5-api-social-media-f-2f5110de11cf.herokuapp.com/"
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();