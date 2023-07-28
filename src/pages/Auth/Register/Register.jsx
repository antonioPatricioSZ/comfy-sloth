import styles from "./Register.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Forms/Button/Button";
import Input from "../../../components/Forms/Input/Input";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      phone,
      password,
      confirmPassword,
    };
  };

  return (
    <div className={styles.dv}>
      <h1>Cadastro</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          label="Name"
          type="text"
          id="name"
          value={name}
          setValue={setName}
          placeholder={"Digite seu nome"}
        />
        <Input
          label="E-mail"
          type="email"
          id="email"
          value={email}
          setValue={setEmail}
          placeholder={"Digite seu email"}
        />

        <Input
          label="Senha"
          type="password"
          id="password"
          value={password}
          setValue={setPassword}
          placeholder={"Digite sua senha"}
        />
        {/* 
        {loading ? <input  className='btn' type="submit" value="Carregando..." disabled/> : <input  className='btn' type="submit" value="Cadastrar"/>}
        {error && <p className='isError'>{error}</p>} */}
        <div style={{ marginTop: "2rem" }}>
          <Button type={"submit"}>Registrar-se</Button>
        </div>
        <p className={styles.nPossuiConta}>
          Já possui conta? <Link to={"/login"}>Clique aqui</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
