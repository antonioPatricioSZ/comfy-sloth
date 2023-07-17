/* eslint-disable react/prop-types */
import React from 'react'
import { formatPrice } from '../../utils/helpers'
import AmountButtons from '../AmountButton/AmountButtons'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../../context/cart_context'
import styles from './CartItem.module.css'

const CartItem = ({ id, image, images = 0, name, color, price, amount}) => {
  const { removeItem, toggleAmount } = useCartContext()

  const increase = () => {
    toggleAmount(id, "inc")
  }

  const decrease = () => {
    toggleAmount(id, "dec")
  }

  return (
    <article className={styles.art}>
      <div className={styles.titles}>
        <img className={styles.img} src={image ? image : images[0]} alt="" />
        <div>
          <h5 className={styles.names}>{name}</h5>
          <p className={styles.color}>
            color : <span style={{ backgroundColor: color }}></span>
          </p>
          <h5 className={styles.priceSmall}>{formatPrice(price ? price : 0)}</h5>
        </div>
      </div>
      <h5 className={styles.price}>{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className={styles.subtotal}>{formatPrice(price * amount)}</h5>
      <button type='button' className={styles.removeBtn} onClick={() => removeItem(id)} >
        <FaTrash />
      </button>
    </article>
  )
}

export default CartItem
