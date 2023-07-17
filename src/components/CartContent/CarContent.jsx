import React from 'react'
import { useCartContext } from '../../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from '../CartColumns/CartColumns'
import CartItem from '../CartItem/CartItem'
import CartTotals from '../CartTotal/CartTotals'
import styles from './CartContent.module.css'

const CartContent = () => {

  const { cart, clearCart } = useCartContext()

  return (
    <section className='section section-center'>
      <CartColumns />
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <hr />
      <div className={styles.linkContainer}>
        <Link to={"/products"} className={styles.linkBtn}>Continue shopping</Link>
        <button type='button' className={`${styles.linkBtn} ${ styles.clearBtn}`} onClick={clearCart}>Clear shopping cart</button>
      </div>
      <CartTotals />
    </section>
  )
}

export default CartContent
