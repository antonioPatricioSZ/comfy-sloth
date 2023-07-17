import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView/GridView'
import ListView from './ListView/ListView'

const ProductList = () => {

  const { filtered_products: products, grid_view  } = useFilterContext()

  if(grid_view === false) {
    return (
      <div style={{ marginBottom: "5rem" }}>
        <ListView products={products} />
      </div>
    )
  }

  if(products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>Desculpe, nenhum produto coresponde a solicitação.</h5> 
    )
  }

  return (
    <div style={{ marginBottom: "5rem" }}>
      <GridView products={products} >
        product list
      </GridView> 
    </div>
  )
  
}

export default ProductList
