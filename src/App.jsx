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

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const { isLoading, user } = useAuth0();

  return (
    // <div>
    //   <UploadImage />
    // </div>
    <>
      {isLoading ? (
        <p>Carregando...</p>
      ): (
        <BrowserRouter>
        <Navbar />
        <Sidebar />
        <div className="corpo">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/createProduct" element={<CreateProduct />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route
              path="/checkout"
              element={user ? <CheckOut /> : <Navigate to={"/"} />}
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
