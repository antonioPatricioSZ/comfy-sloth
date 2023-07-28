import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useProductsContext } from "../../context/products_context";
import { useCartContext } from "../../context/cart_context";
import { useUserContext } from "../../context/user_context";
import styles from "./CartButtons.module.css";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const { logout, auth } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <div className={`${styles.div} cartBtnWrapper`}>
      <Link to={"/cart"} className={styles.cartBtn} onClick={closeSidebar}>
        Cart
        <span className={styles.cartContainer}>
          <FaShoppingCart />
          <span className={styles.cartValue}>{total_items}</span>
        </span>
      </Link>
      {auth ? (
        <button
          type="button"
          className={styles.authBtn}
          onClick={() => {
            clearCart();
            handleLogout();
          }}
        >
          Logout
          <FaUserMinus />
        </button>
      ) : (
        <Link to={"/login"} className={styles.authBtn}>
          Login
          <FaUserPlus />
        </Link>
      )}
    </div>
  );
};

export default CartButtons;
