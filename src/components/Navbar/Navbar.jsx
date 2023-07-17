import React from "react";
import logo from "../../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../../utils/constants";
import CartButtons from "../CartButtons/CartButtons";
import { useProductsContext } from "../../context/products_context";
import { useUserContext } from "../../context/user_context";
import styles from "./Navbar.module.css";

const Nav = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <nav className={styles.nav}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Link to={"/"}>
            <img src={logo} alt="comfy sloth" />
            {/* <h3 style={{ color: "#222" }}>Patricio<span style={{ color: "green" }}>SZ</span></h3> */}
          </Link>
          <button
            type="button"
            className={styles.navToggle}
            onClick={openSidebar}
          >
            <FaBars />
          </button>
        </div>
        <ul className={styles.navLinks}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to={"/checkout"}>checkout</Link>
            </li>
          )}
        </ul>
        <div className={styles.teste}>
          <CartButtons />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
