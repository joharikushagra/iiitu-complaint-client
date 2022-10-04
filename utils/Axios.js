import axios from "axios";
axios.defaults.withCredentials = true;
export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  // withCredentials: true,
  // baseURL: "https://iiitu-complaints-portal.onrender.com",
});
