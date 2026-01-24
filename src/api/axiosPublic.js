import axios from "axios";
const token = localStorage.getItem("token");
const axiosPublic = axios.create({
  baseURL: "https://social-serve-server-nine.vercel.app/",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  },
});

export default axiosPublic;
