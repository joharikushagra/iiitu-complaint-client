import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://iiitu-complaints-portal.onrender.com",
});
