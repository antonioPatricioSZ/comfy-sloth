import React from 'react'
import { useFilterContext } from '../../context/filter_context'
import { getUniqueValues, formatPrice } from '../../utils/helpers'
import { FaCheck } from 'react-icons/fa'
import styles from "./Filters.module.css"

const Filters = () => {

  const { filters: {
    text,
    company,
    category,
    color,
    min_price,
    max_price,
    price,
    shipping
  }, updateFilters, clearFilters, all_products } = useFilterContext()

  const categories = getUniqueValues(all_products, "category")
  categories.pop()
  const companies = getUniqueValues(all_products, "company")
  companies.pop()
  const colors = getUniqueValues(all_products, "colors")

  return (
    <section className={styles.se}>

      <div className={styles.content}>

        <form onSubmit={(e) => e.preventDefault()}>

          <div className={styles.formControl}>
            <input type="text" name="text" placeholder='search' className={styles.searchInput} value={text} onChange={updateFilters} />
          </div>

          <div className={styles.formControl}>
            <h5>Category</h5>
            <div>
              {categories.map((cat, index) => {
                return (
                  <button key={index} onClick={updateFilters} name="category" type='button' className={category ===  cat ? styles.decoration : null}>{cat}</button>
                )
              })}
            </div>
          </div>

          <div className={styles.formControl}>
            <h5>Company</h5>
            <select name="company" value={company} onChange={updateFilters} className={styles.company}>
              {companies.map((comp, index) => (
                <option key={index} value={comp}>{comp}</option>
              ))}
            </select>
          </div>

          <div className={`${styles.formControl} ${styles.div}`}>
                <h5>Colors</h5>
                <div className={styles.colors}>
                  {colors.map((cor, index) => {
                    if(cor === "all") {
                      return (
                        <button key={index} name="color" className={`${color === "all" ? `${styles.allBtn.active} ${styles.decoration}` : `${styles.allBtn}`}`} data-color="all" onClick={updateFilters}>all</button>
                      )
                    }
                    return (
                      <button key={index} name="color" style={{ backgroundColor: cor }} className={`${color === cor ? `${styles.colorBtn} ${styles.activeBtn}` : `${styles.colorBtn}`}`} data-color={cor} onClick={updateFilters}>{color === cor ? <FaCheck /> : null}</button>
                    )
                  })}
                </div>
          </div>

          <div className={`${styles.formControl}`}>
              <h5>Price</h5>
              <p className={styles.price}>{formatPrice(price)}</p>
              <input type="range" name='price' min={min_price} max={max_price} onChange={updateFilters} value={price} />
          </div>

          <div className={`${styles.formControl} ${styles.shipping}`}>
            <div>
              <label htmlFor="shipping">free shipping</label>
            </div>
            <div className={styles.d}>
              <input type="checkbox" name='shipping' id='shipping' onChange={updateFilters} checked={shipping} />
            </div>
          </div>

        </form>

        <button style={{ backgroundColor: "hsl(360, 67%, 44%)", color: "#fff", padding: "0.35rem 0.5rem", borderRadius: "0.25rem"
        }} type='button' className={styles.clearBtn} onClick={clearFilters}>
          {'  '} 
          clear filters
        </button>
      </div>

    </section>
  )
}

export default Filters
