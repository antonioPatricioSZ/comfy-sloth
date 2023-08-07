import axios from "axios";
import jwtDecode from "jwt-decode";
import dayjs from "dayjs";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

const isTokenExpired = (token) => {
  if (!token) {
    return true;
  }

  try {
    const decodedToken = jwtDecode(token);
    const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds
    return dayjs().isAfter(expirationTime);
  } catch (error) {
    console.error("Error decoding token:", error);
    return true;
  }
};

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token && !isTokenExpired(token)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login"
    }
    return Promise.reject(error);
  }
);

export default instance;
