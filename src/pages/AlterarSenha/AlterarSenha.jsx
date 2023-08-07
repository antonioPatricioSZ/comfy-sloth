import { useState } from "react";
import instance from "../../axios";
import styles from "./AlterarSenha.module.css";
import {toast} from 'react-toastify'

const AlterarSenha = () => {
  const [formulario, setFormulario] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const handleChanges = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formulario)
    try {
      const response = await instance.patch("/users/updateUserPassword", {
        ...formulario,
      });
      console.log(response)
      if (response.status === 200) {
        console.log(response);
        toast.success(response.data);
        currentUser();
      }
    } catch (error) {
        toast.error(error.response.data.message)
    } finally {
        setFormulario({})
    }
  };

  return (
    <div className={styles.dv}>
      <form onSubmit={handleSubmit}>
        <h3>Alterar senha</h3>
        <div className={styles.wraper}>
          <label className={styles.label} htmlFor="senhaAtual">
            Senha atual
          </label>
          <input
            className={styles.input}
            id="senhaAtual"
            name="oldPassword"
            type="text"
            placeholder={"Digite sua senha atual"}
            onChange={handleChanges}
          />
        </div>

        <div className={styles.wraper}>
          <label className={styles.label} htmlFor="novaSenha">
            Nova senha
          </label>
          <input
            className={styles.input}
            name="newPassword"
            id="novaSenha"
            type="text"
            placeholder="Digite sua nova senha"
            onChange={handleChanges}
          />
        </div>
        <button type="submit" className="btn">
          Avaliar produto
        </button>
      </form>
    </div>
  );
};

export default AlterarSenha;
