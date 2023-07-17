import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useProductsContext } from '../../context/products_context'
import { single_product_url as url } from '../../utils/constants'
import { formatPrice } from '../../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../../components'
import { Link } from 'react-router-dom'
import styles from './SingleProductPage.module.css'

const SingleProductPage = () => {

  const { id } = useParams()
  const { single_product_loading: loading, single_product_error: error, single_product: product, fetchSingleProduct } = useProductsContext()

  useEffect(() => {
    // https://e-commerce-node-5wf2.onrender.com/api/v1/products/${id}
    fetchSingleProduct(`http://localhost:5000/api/v1/products/${id}`)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // useEffect(() => {
  //   if (error) {
  //     setTimeout(() => {
  //       navigate("/")
  //     }, 3000)
  //   }
  // }, [error, navigate])
  // if(error) {
  //   return <Error />
  // }


  if(loading) {
    return <Loading />
  }

  const { _id: sku, name, price, category, description, stock, images, company } = product.singleProduct || {}

  return (
    <main>
      <div className={styles.images}>
        <PageHero title={name} product={product} />
      </div>
      <div className='section section-center page'>
        <Link to={"/products"} className={`${styles.link} btn`}>Voltar aos produtos</Link>
        <div className={styles.productCenter}>
          <div className={styles.teste}>
            <ProductImages images={images}/>
          </div>
          <section className={styles.content}>
            <h2>{name}</h2>
            <Stars stars={product.mediaReviews} reviews={product.qtdReviews}/>
            <h5 className={styles.price}>{formatPrice(price)}</h5>
            <p className={styles.desc}>{description}</p>
            <p className={styles.info}>
              <span>Available : </span>
              {stock > 0 ? "In stock" : "out of stock"}
            </p>

            <p className={styles.info}>
              <span>SKU : </span>
              {sku}
            </p>

            <p className={styles.info}>
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product.singleProduct} />}
          </section>
        </div>
      </div>
    </main>
  )
}

export default SingleProductPage
