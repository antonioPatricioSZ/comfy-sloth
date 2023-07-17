/* eslint-disable no-undef */
import dotenv from "dotenv";
dotenv.config();

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);
console.log("Key: "+process.env.REACT_APP_STRIPE_SECRET_KEY)
console.log(stripe)

export async function handler(event, context) {
  if (event.body) {
    const { cart, total_amount, shipping_fee } = JSON.parse(event.body);
    console.log(cart)
    const calculateOrderAmount = () => {
      return shipping_fee + total_amount;
    };

    try {
       const paymentIntent = await stripe.paymentIntents.create({
          amount: calculateOrderAmount(),
          currency: "usd"
       })
       console.log(paymentIntent)
       return {
          statusCode: 200,
          body: JSON.stringify({
             clientSecret: paymentIntent.client_secret
          })
       }
    } catch (error) {
      return {
         statusCode: 500,
         body: JSON.stringify({ msg: error.message }),
       };
    }
  }
  return {
    statusCode: 200,
    body: "Create Payment Intent",
  };
}
