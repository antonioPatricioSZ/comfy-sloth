import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import Button from "../../../components/Forms/Button/Button";
import Input from "../../../components/Forms/Input/Input";

import { useNavigate, Link } from "react-router-dom";
import { useUserContext } from "../../../context/user_context";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useUserContext()

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    login(user)
  };

  return (
    <div className={styles.dv}>
      <h1>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          label="E-mail"
          type="text"
          id="email"
          value={email}
          setValue={setEmail}
          placeholder={"Digite seu e-mail"}
        />
        <Input
          label="Senha"
          type="password"
          id="password"
          value={password}
          setValue={setPassword}
          placeholder={"Digite sua senha"}
        />
        <Link to="/forgotpassword">
          <p className={styles.esqueceuSenha}>Esqueceu sua senha?</p>
        </Link>

        {/* {loading ? (
          <input className="btn" type="submit" value="Carregando..." disabled />
        ) : (
          <input type="submit" value="Login" className="btn" />
        )} */}
        {error && <p>{error}</p>}
        <Button type={"submit"}>Login</Button>
        <p className={styles.nPossuiConta}>
          Ainda não possui conta? <Link to={"/register"}>Clique aqui</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
