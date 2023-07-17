import React from 'react'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { CartContent, PageHero } from '../components'

const CartPage = () => {

  const { cart } = useCartContext()

  if(cart.length < 1) {
    return (
      <main className='page-100'>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "3rem", textTransform: "none" }}>Seu carrinho está vazio.</h2>
          <Link to={"/products"} className="btn">
            Continuar comprando
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main>
      <PageHero title="cart" />
      <main className='page'>
        <CartContent />
      </main>
    </main>
  )
  
}

export default CartPage
