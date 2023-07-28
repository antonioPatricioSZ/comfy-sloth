import { Navbar, Sidebar, Footer } from "./components";

import {
  Home,
  Products,
  Cart,
  About,
  SingleProduct,
  Error,
  CheckOut,
} from "./pages/index";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/Login";
import { useUserContext } from "./context/user_context";
import jwtDecode from "jwt-decode";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const { auth, loadingAuth, role } = useUserContext();

  function Teste() {
    const location = useLocation();
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        const decodedToken = jwtDecode(token);
        const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds
        const expire = dayjs().isAfter(expirationTime);
        if (
          (expire && location.pathname === "/checkout") ||
          (expire && location.pathname === "/createProduct")
        ) {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
      }
    }, [location.pathname]);
    return null;
  }

  return (
    // <div>
    //   <UploadImage />
    // </div>
    <>
      {loadingAuth ? (
        <p>Carregando...</p>
      ) : (
        <BrowserRouter>
          <Teste />
          <Navbar />
          <Sidebar />
          <div className="corpo">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products" element={<Products />} />
              <Route
                path="/login"
                element={!auth ? <Login /> : <Navigate to={"/"} />}
              />
              <Route
                path="/register"
                element={!auth ? <Register /> : <Navigate to={"/"} />}
              />
              <Route
                path="/createProduct"
                element={
                  auth && role === "ADMIN" ? (
                    <CreateProduct />
                  ) : (
                    <Navigate to={"/login"} />
                  )
                }
              />
              <Route path="/products/:id" element={<SingleProduct />} />
              <Route
                path="/checkout"
                element={auth ? <CheckOut /> : <Navigate to={"/login"} />}
              />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
