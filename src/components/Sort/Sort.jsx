import React from 'react'
import { useFilterContext } from '../../context/filter_context'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import styles from './Sort.module.css'
const Sort = () => {

  const { filtered_products: products, grid_view, setListView, setGridView, sort, updateSort  } = useFilterContext()

  return (
    <section className={styles.se}>
      <div className={styles.btnContainer}>
        <button type='button' className={grid_view ? styles.active : null} onClick={setGridView}>
          <BsFillGridFill />
        </button>  
        <button type='button' className={!grid_view ? styles.active : null} onClick={setListView}>
          <BsList />
        </button>
      </div>
      {
        products && products.length > 0 ? <p>{products.length} products found</p> : ""
      }
      <hr />
      <form>
        <label htmlFor="sort">sort by</label>
        <select name="sort" id="sort" value={sort} onChange={updateSort} className={styles.sortInput}>
          <option value="price-lowest">preco (menor)</option>
          <option value="price-highest">preco (maior)</option>
          <option value="name-a">nome (a-z)</option>
          <option value="name-z">nome (z-a)</option>
        </select>
      </form>
    </section>
  )
}

export default Sort
