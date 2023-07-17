import React from 'react'
import { Filters, ProductList, Sort, PageHero } from '../../components'
import styles from './ProductsPage.module.css'

const ProductsPage = () => {
  return (
    <main>
      <PageHero title="products"/>
      <div className='page' style={{ marginTop: "3rem" }}>
        <div className={`${styles.products} section-center`} >
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  )
}


export default ProductsPage
