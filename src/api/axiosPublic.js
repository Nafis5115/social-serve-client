import axios from "axios";
const token = localStorage.getItem("token");
const axiosPublic = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  },
});

export default axiosPublic;
