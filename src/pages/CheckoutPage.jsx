import React from "react";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart } = useCartContext();
  console.log(cart);

  return (
    <main>
      <PageHero title={"Checkout"} />
      <div
        className="page"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {cart && cart.length < 1 ? (
          <div style={{ textAlign: "center" }}>
            <h2>Seu carrinho está vazio.</h2>
            <Link to={"/products"} className="btn">
              Continuar comprando
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </div>
    </main>
  );
};

export default CheckoutPage;
