import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const requestInterceptor = instance.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }

      return config;
    });

    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      async (err) => {
        const status = err.status;
        if (status === 401 || status === 403) {
          await logoutUser();
          localStorage.removeItem("token");
          navigate("/login", { replace: true });
        }
      },
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
    };
  }, [navigate, logoutUser]);
  return instance;
};

export default useAxiosSecure;
