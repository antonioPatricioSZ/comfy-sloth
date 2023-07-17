import React, { useState } from 'react'
import styles from './ProductImages.module.css'
// eslint-disable-next-line react/prop-types
const ProductImages = ({ images = [""] }) => {

  const [img, setImg] = useState(images[0])

  return (
    <section className={styles.se}>
      <img src={img} className={styles.main} alt="" />
      <div className={styles.gallery}>
        {images && images.map((image, index) => (
          <img key={image} src={image} alt="" onClick={() => setImg(images[index])} className={`${image === img ? styles.active : null}`} />
        ))}
      </div>
      
    </section>
  )
}

export default ProductImages
