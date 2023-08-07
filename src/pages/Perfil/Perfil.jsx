import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import instance from "../../axios";
import styles from "./Perfil.module.css";
import {toast} from 'react-toastify'

const Perfil = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");

  const currentUser = async () => {
    try {
      const response = await instance.get("/users/showMe");
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    currentUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        name,
      };
      const response = await instance.patch("/users/updateUser", {
        ...userData,
      });
      if (response.status === 200) {
        console.log(response);
        toast.success(response.data)
        currentUser();
      }
      e.target.reset();
    } catch (error) {
        toast.error(error.response.data.message)
    } finally {
        setName("")
    }
  };

  return (
    <div>
      <h3>{user?.name}</h3>
      <span>{user?.email}</span>
      <form onSubmit={handleSubmit}>
        <div className={styles.wraper}>
          <label className={styles.label} htmlFor="name">
            Nova senha
          </label>
          <input
            className={styles.input}
            id="name"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Atualizar usuário
        </button>
      </form>
    </div>
  );
};

export default Perfil;
