import React from 'react'
import { useProductsContext } from '../../context/products_context'
import { Link } from 'react-router-dom'
import Error from '../Error'
import Loading from '../Loading'
import Product from '../Product/Product'
import styles from './FeaturedProducts.module.css'
import img from '../../assets/foto1.jpg'

const FeaturedProducts = () => {

  const { 
    products_loading: loading, 
    products_error: error, 
    featured_products: featured 
  } = useProductsContext()

  if(loading) {
    return <Loading />
  } 

  if(error) {
    return <Error />
  } 

  return (
    <section className={`${styles.se} section`}>
      <div className='title'>
        <h2>featured products</h2>
        <div className='underline'></div>
      </div>
      <div className={`${styles.featured} section-center`}>
        {featured && featured.map((product) => {
          return <Product key={product.id} {...product} image={img}/>
        })}
      </div>
      <Link to={"/products"} className={`${styles.bt}`}>all products</Link>
    </section>
  )
}

export default FeaturedProducts
