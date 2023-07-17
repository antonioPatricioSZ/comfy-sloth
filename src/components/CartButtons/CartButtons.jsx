import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../context/products_context";
import { useCartContext } from "../../context/cart_context";
import { useUserContext } from "../../context/user_context";
import styles from "./CartButtons.module.css";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, logout, myUser } = useUserContext();

  const handleLogin = () => {
    loginWithRedirect({
      theme: {
        logo: "https://imgur.com/a/WQFEycK",
      },
    });
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
      {myUser ? (
        <button
          type="button"
          className={styles.authBtn}
          onClick={() => {
            clearCart()
            logout({
              returnTo: window.location.origin,
            })
          }}
        >
          Logout
          <FaUserMinus />
        </button>
      ) : (
        <button type="button" className={styles.authBtn} onClick={handleLogin}>
          Login
          <FaUserPlus />
        </button>
      )}
    </div>
  );
};

export default CartButtons;
