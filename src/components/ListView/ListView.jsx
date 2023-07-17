/* eslint-disable react/prop-types */
import React from 'react'
import { formatPrice } from '../../utils/helpers'
import { Link } from 'react-router-dom'
import styles from './ListView.module.css'

const ListView = ({ products }) => {
  return (
    <section className={styles.se}>
      {products.map((product) => {
         const { id, name, price, description, image, images } = product
         return (
            <article key={id}>
              <img src={image ? image : images[0]} alt={name} />
              <div>
                <h4>{name}</h4>
                <h5 className={styles.price}>{formatPrice(price)}</h5>
                <p>{description?.substring(0, 150)}...</p>
                <Link className='btn' to={`/products/${id}`} >
                  Details
                </Link>
              </div>
            </article>
         )
      })}
    </section>
  )
}

export default ListView
