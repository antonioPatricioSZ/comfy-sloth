import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../axios";
import Button from "../../components/Forms/Button/Button";
import styles from "./CreateProduct.module.css";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const [images, setImages] = useState([]);
  const [colors, setColors] = useState("");
  const navigate = useNavigate();

  const createProduct = async (data) => {
    const response = await instance.post(
      "http://localhost:5000/api/v1/products",
      data
    );
    console.log("Resposta");
    if (response.status === 201) {
      toast.success("Produto adicionado com sucesso.");
      const test = () => {
        setTimeout(() => {
          navigate("/");
        }, 2500);
      };
      test()
    }
  };

  const [formulario, setFormulario] = useState({
    name: "",
    category: "",
    price: 0,
    description: "",
    company: "",
    stock: 0,
    featured: "false",
  });

  console.log(formulario);

  const handleChanges = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const convertToBase64 = (e) => {
    const files = e.target.files;
    const imgs = Array.from(files);

    imgs.forEach((img) => {
      setImages([]);
      let reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result;
        setImages((prevImages) => [...prevImages, dataUrl]);
      };
      reader.readAsDataURL(img);
      reader.onerror = (error) => {
        console.log(error);
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      user: "6495fa1dc137fa4923f7f3b7",
      colors: colors.includes(", ") ? colors.split(", ") : colors,
      ...formulario,
      images,
    };

    createProduct(product);
  };

  return (
    <div className={styles.dv}>
      <h1>Adicionar Produto</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.wraper}>
          <label className={styles.label} htmlFor="nome">
            Nome
          </label>
          <input
            className={styles.input}
            id="nome"
            name="name"
            type="text"
            placeholder={"Digite seu nome"}
            onChange={handleChanges}
          />
        </div>

        <div className={styles.wraper}>
          <label className={styles.label} htmlFor="categoria">
            Categoria
          </label>
          <input
            className={styles.input}
            name="category"
            id="categoria"
            type="text"
            placeholder={"Informe a categoria"}
            onChange={handleChanges}
          />
        </div>

        <div className={styles.wraper}>
          <label className={styles.label} htmlFor="preco">
            Preço
          </label>
          <input
            className={styles.input}
            name="price"
            id="preco"
            type="number"
            placeholder="Informe o preço"
            onChange={handleChanges}
          />
        </div>

        <div className={styles.wraper}>
          <label className={styles.label} htmlFor="descricao">
            Descrição
          </label>
          <input
            className={styles.input}
            name="description"
            type="text"
            id="descricao"
            placeholder={"Informe a descrição"}
            onChange={handleChanges}
          />
        </div>

        <div className={styles.wraper}>
          <label
            className={styles.label}
            style={{ lineHeight: "2" }}
            htmlFor="cores"
          >
            Cor ou Cores. Informe a cor no formato haxadecimal. ex:{" "}
            <span
              style={{
                backgroundColor: "#34567d",
                borderRadius: "6px",
                padding: "2px 4px",
                color: "#fff",
              }}
            >
              #34567d
            </span>
            . Se tiver mais de uma cor coloque uma vírgula espaço e a proxima
            cor ex:{" "}
            <span
              style={{
                backgroundColor: "#fd6543",
                borderRadius: "6px",
                padding: "2px 4px",
                color: "#fff",
              }}
            >
              #fd6543
            </span>
            ,{" "}
            <span
              style={{
                backgroundColor: "#000000",
                borderRadius: "6px",
                padding: "2px 4px",
                color: "#fff",
              }}
            >
              #000000
            </span>
          </label>
          <input
            className={styles.input}
            name="cores"
            type="text"
            id="cores"
            placeholder={"Informe a cor ou as cores"}
            onChange={(e) => setColors(e.target.value)}
          />
        </div>

        <div className={styles.wraper}>
          <label className={styles.label} htmlFor="compania">
            Compania
          </label>
          <input
            className={styles.input}
            id="compania"
            name="company"
            type="text"
            placeholder={"Informe o nome da empresa nome"}
            onChange={handleChanges}
          />
        </div>

        <div className={styles.wraper}>
          <label className={styles.label} htmlFor="estoque">
            Estoque
          </label>
          <input
            className={styles.input}
            name="stock"
            id="estoque"
            type="number"
            placeholder="Informe a quantidade(estoque) do produto"
            onChange={handleChanges}
          />
        </div>

        <div className={`${styles.wraper}`}>
          <label className={styles.label} htmlFor="destaque">
            Está em destaque?
          </label>
          <div className={styles.radio}>
            <div>
              <input
                id="destaque"
                name="featured"
                type="radio"
                onChange={handleChanges}
                value={"false"}
                checked={formulario.featured === "false"}
              />{" "}
              <span>Falso</span>
            </div>
            <div>
              <input
                name="featured"
                value={"true"}
                type="radio"
                onChange={handleChanges}
                checked={formulario.featured === "true"}
              />{" "}
              <span>Verdadeiro</span>
            </div>
          </div>
        </div>

        <input
          className={styles.input}
          type="file"
          multiple
          accept="image/*"
          onChange={convertToBase64}
        />

        <div style={{ marginTop: "2rem", marginBottom: "5rem" }}>
          <Button type={"submit"}>Adicionar</Button>
        </div>
      </form>
      {images &&
        images.map((image) => (
          <img key={image} height="200" width="200" src={image} alt="" />
        ))}
    </div>
  );
};

export default CreateProduct;

// import { useState } from "react"
// import Checkbox from "./Components/Component checkBox/CheckBox"
// import Input from "./Components/component input/Input"
// import Form from "./Components/Form"
// import Radio from "./Components/Component radio/Radio"
// import Select from "./Components/Component select/Select"
// import DesafioFormulario from "./Components/Desafio Formulário/DesafioFormulario"
// import UploadImage from "./Components/Teste/TesteUpload"

// function App() {

//   const [nome, setNome] = useState("")
//   const [email, setEmail] = useState("")

//   const [cores, setCores] = useState("")
//   const [fruta, setFruta] = useState("morango")
//   const [linguagens, setLinguagens] = useState(["PHP"])

//   // validations

//   const [cep, setCep] = useState("")
//   const [error, setError] = useState("")

//   const cepValidate = (value) => {
//     if(value.length === 0) {
//       setError("O nome não pode estar vazio.")
//       return false
//     } else if(!/^\d{5}-?\d{3}$/.test(value)) {
//       setError("Preencha um CEP válido.")
//       return false
//     } else {
//       setError(null)
//       return true
//     }
//   }

//   const handleBlur = (e) => {
//     cepValidate(e.target.value)
//   }

//   const handleChange = (e) => {
//     if(error) {
//       cepValidate(e.target.value)
//     }
//     setCep(e.target.value)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if(cepValidate(cep)) {
//       console.log("Não possui error ")
//     } else {
//       console.log("Error!")
//     }
//   }

//   const [formulario, setFormulario] = useState({
//     gh1: "",
//     gh2: "",
//     gh3: "",
//   })

//  const handleChanges = (e) => {
//   setFormulario({...formulario, [e.target.name]: e.target.value})
//  }
// // [e.target.name]: o que eu quero alterrar // e o valor que eu vou receber para esses state e.target.value
//   return (
//     <div className="App">
//       <UploadImage />
//        {/* <DesafioFormulario /> */}
//        {/*  <input className={styles.input} name="gh1" type="text" onChange={handleChanges}/>
//         <input className={styles.input} name="gh2" type="text" onChange={handleChanges}/>
//         <input className={styles.input} name="gh3" type="text" onChange={handleChanges}/>

//        <p>{formulario.gh1}</p>
//        <p>{formulario.gh2}</p>
//        <p>{formulario.gh3}</p> */}
//       {/* <Form />
//       <Radio />
//       <Checkbox />
//       <Select /> */}

//       {/* <Checkbox options={["Javascript", "PHP", "Python"]} linguagem={linguagens} setLinguagem={setLinguagens}/>

//       <Select options={["azul", "vermelho", "verde"]} value={cores} setValue={setCores} />

//       <Radio options={["uva", "morango", "kiwi"]} fruta={fruta} setFruta={setFruta}/> */}

//       {/* <form onSubmit={handleSubmit}>
//        <input className={styles.input} label={"Nome"} type={"text"} placeholder={"Digite seu nome"} required  value={cep} setValue={handleChange} onBlur={handleBlur} />
//       <button>Enviar</button>
//       </form> */}
//       {/*  <input className={styles.input} label={"Email"} type={"email"} placeholder={"Digite seu email"} value={email} setValue={setEmail} /> */}
//       {/* {error && <p>{error}</p>} */}
//     </div>
//   )
// }

// export default App
