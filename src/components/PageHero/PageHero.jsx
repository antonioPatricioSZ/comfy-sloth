import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PageHero.module.css'
// eslint-disable-next-line react/prop-types
const PageHero = ({ title, product }) => {
  return (
    <section className={styles.pageHe}>
      <div className='section-center'>
        <h3>
          <Link to={"/"}>Home</Link>
          {product && <Link to={"/products"}>/ Products</Link>}/ {title}
        </h3>
      </div>  
    </section>
  )
}

export default PageHero
