import React from 'react'
import { formatPrice } from '../../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from './Product.module.css'

// eslint-disable-next-line react/prop-types
const Product = ({ id, name, price, image, images }) => {
  return (
    <article className={styles.art}>
      <div className={styles.container}>
        <img src={image ? image : images[0] } alt={name} />
        <Link to={`/products/${id}`} className={styles.link}>
          <FaSearch />
        </Link>
      </div>
      <footer className={styles.footer}>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </article>
  )
}

export default Product
