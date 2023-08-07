import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./MyCount.module.css";

const MyCount = () => {
  return (
    <section className={styles.se}>
      <aside className={styles.aside}>
        <ul className={styles.list}>
          <li>
            <Link to={""}>Perfil</Link>
          </li>
          <li>
            <Link to={"alterarSenha"}>Alterar senha</Link>
          </li>
          <li>
            <Link to={"/alterarSenha"}>Alterar senha</Link>
          </li>
        </ul>
      </aside>
      <div className={styles.routes}>
        <Outlet />
      </div>
    </section>
  );
};

export default MyCount;
