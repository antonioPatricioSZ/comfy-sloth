/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import axios from "../axios";
import jwtDecode from "jwt-decode";

const baseUrl = "http://localhost:5000/api/v1";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [auth, setAuth] = useState(null);
  const [tokenUser] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(tokenUser ? tokenUser : null);
  const [role, setRole] = useState("")

  useEffect(() => {
    if (user) {
      const decodedToken = jwtDecode(user);
      setAuth(true);
      setRole(decodedToken.role)
    } else {
      setAuth(false);
    }
    setLoadingAuth(false);
  }, [user]);

  const register = async (data) => {
    const response = await axios.post(`${baseUrl}/register`, data);
    const dataUser = await response.json();
    if (dataUser.token) {
      localStorage.setItem("token", dataUser.token);
    }
    if (dataUser.role) {
      setRole(dataUser.role);
    }
  };

  const login = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(`${baseUrl}/auth/login`, data);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setUser(response.data.token);
        setSuccess(true);
      }
      if (response.data.message) {
        setError(response.data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    localStorage.removeItem("token");
    setUser(null);
    setRole(null);
    window.location.href = "/"
  };

  return (
    <UserContext.Provider
      value={{
        login,
        register,
        logout,
        auth,
        loading,
        loadingAuth,
        error,
        success,
        role
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use
// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => {
  return useContext(UserContext);
};
