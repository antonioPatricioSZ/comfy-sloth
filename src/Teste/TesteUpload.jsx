
import { useEffect } from 'react'
import { useState } from 'react'

const UploadImage = () => {

// eslint-disable-next-line react-hooks/rules-of-hooks
const [image, setImage] = useState("")
const [allImages, setAllIMages] = useState([])

const convertToBase64 = (e) => {
   let reader = new FileReader()
   reader.readAsDataURL(e.target.files[0])
   reader.onload = () => {
      console.log(reader.result)
      if(reader.result) {
         setImage(reader.result)
      }
   }
   reader.onerror = (error) => {
      console.log(error)
   }
}


const uploadImage = async (e) => {
   const response = await fetch("http://localhost:5000/api/v1/products", {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify({
         image: image
      })
   })

   const data = await response.json()
   console.log(data)
}


const getImages = async (e) => {
   const response = await fetch("http://localhost:5000/api/v1/products", {
      method: "GET"
   })
   const data = await response.json()
   setAllIMages(data)
   console.log(data)
}

useEffect(() => {
   getImages()
}, [])

  return (
    <div>
         <input type="file" accept='image/*' onChange={convertToBase64} />
         {image && <img src={image} height="200" width={"200"} alt="" />}
         <button onClick={uploadImage}>Upload</button>

         {allImages && allImages.map((image) => (
            <div key={image}>
               {<img src={image.image} height="200" width={"200"} alt="" />}
            </div>
         ))}
    </div>
  )
}

export default UploadImage