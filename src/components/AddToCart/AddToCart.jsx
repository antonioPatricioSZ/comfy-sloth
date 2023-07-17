/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../../context/cart_context'
import AmountButtons from '../AmountButton/AmountButtons'
import styles from "./AddToCart.module.css"


// eslint-disable-next-line react/prop-types
const AddToCart = ({ product }) => {

  const { addToCart } = useCartContext()
  // eslint-disable-next-line react/prop-types
  const {_id: id, stock, colors } = product

  const [mainColor, setMainColor] = useState(colors ? colors[0] : [])
  const [amount, setAmount] = useState(1)

  const increase = () => {
    if(amount < stock) {
      setAmount((prevAmount) => {
        return prevAmount + 1
      })
    }
  }

  const decrease = () => {
    if(amount > 1) {
      setAmount((prevAmount) => {
        return prevAmount - 1
      })
    }
  }

  // ${} ${styles.active} : 
  return (
    <section className={styles.se}>
      <div className={styles.colors}>
        <span>color: </span>
        <div>
          {colors?.map((color, index) => (
            <button key={color} style={{ backgroundColor: color }} onClick={() => setMainColor(color)} className={mainColor === color ? `${styles.colorBtn} ${styles.active}` :  `${styles.colorBtn}`} >{mainColor === color ? <FaCheck /> : null}</button>
          ))}
        </div>
      </div>
      <div className={styles.btnContainer}>
        <AmountButtons amount={amount} increase={increase} decrease={decrease} />
        <Link to={"/cart"} className="btn" onClick={() => addToCart(id, mainColor, amount, product)}>add to cart</Link>
      </div>
    </section>
  )
}

export default AddToCart
