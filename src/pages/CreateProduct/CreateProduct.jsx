import React from 'react'
import { useState } from 'react'

const CreateProduct = () => {

   const [images, setImages] = useState([])

   const createProduct = async(data) => {

      const response = await fetch("http://localhost:5000/api/v1/products", {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(data)
      })
   
      const dados = await response.json()
      console.log(dados)

   }

   const [formulario, setFormulario] = useState({
      name: "",
      category: "",
      price: 0,
      description: "",
      company: "",
      stock: 0,
      featured: null
   })

   console.log(formulario)

   const handleChanges = (e) => {
      setFormulario({...formulario, [e.target.name]: e.target.value})
   }

   const convertToBase64 = (e) => {

      const files = e.target.files
      const imgs = Array.from(files)
      
      imgs.forEach((img) => {
         setImages([])
         let reader = new FileReader()
         reader.onload = () => {
            const dataUrl = reader.result
            setImages((prevImages) => [...prevImages, dataUrl])
         }
         reader.readAsDataURL(img)
         reader.onerror = (error) => {
            console.log(error)
         }
      })

   }

   const handleSubmit = (e) => {
      e.preventDefault()

      const product = {
         user: "6495fa1dc137fa4923f7f3b7",
         ...formulario,
         images
      }

      createProduct(product)

   }

  return (
    <div>
       <form onSubmit={handleSubmit}>

         <input name="name" type="text" placeholder={"Digite seu nome"} onChange={handleChanges} />

         <input name="category" type="text" placeholder={"Informe a categoria"} onChange={handleChanges} />

         <input name="price" type="number" onChange={handleChanges} />

         <input name="description" type="text" placeholder={"Informe a descrição"} onChange={handleChanges} />

         <input name="company" type="text" placeholder={"Informe o nome de empresa nome"} onChange={handleChanges} />

         <input name="stock" type="number" onChange={handleChanges} />

         <div>
            <input name="featured" type="radio" onChange={handleChanges} checked={true} /> false
            <input name="featured" type="radio" onChange={handleChanges} /> true
         </div>

         <input type="file" multiple accept='image/*' onChange={convertToBase64} />
        
         <button type='submit'>Cadastrar</button>
      </form> 
      {images && images.map((image) => (
         <img key={image} height="200" width="200" src={image} alt="" />
      ))}
    </div>
  )
}


export default CreateProduct


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
//        {/* <input name="gh1" type="text" onChange={handleChanges}/>
//        <input name="gh2" type="text" onChange={handleChanges}/>
//        <input name="gh3" type="text" onChange={handleChanges}/>

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
//       <Input label={"Nome"} type={"text"} placeholder={"Digite seu nome"} required  value={cep} setValue={handleChange} onBlur={handleBlur} />
//       <button>Enviar</button>
//       </form> */}
//       {/* <Input label={"Email"} type={"email"} placeholder={"Digite seu email"} value={email} setValue={setEmail} /> */}
//       {/* {error && <p>{error}</p>} */}
//     </div>
//   )
// }

// export default App
