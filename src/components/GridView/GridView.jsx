/* eslint-disable react/prop-types */
import React from 'react'
import Product from '../Product/Product'
import styles from "./GridView.module.css"

const GridView = ({ products }) => {
  return (
    <section className={styles.se}>
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}

export default GridView
