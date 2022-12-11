import React from 'react'
import { useSelector } from 'react-redux';
import CheckoutCartItem from './CheckoutCartItem'


const Checkout = () => {

    
    const cartitems = useSelector((state)=>state.cart.cartitems)
    const cartTotal = useSelector((state) => state.cart.cartTotal);

    
  return (
    <div className="checkout-cartitem-container">
      {cartitems.length === 0 ? (
        <div>
          <h1>Cart Is Empty</h1>
        </div>
      ) : (
          cartitems.map((cartitem) => (
          <CheckoutCartItem
            key={cartitem.id}
            cartitem={cartitem}
          ></CheckoutCartItem>
          ))
      )}
      <h2>{`Total : ${cartTotal}`}</h2>
    </div>
  );
}

export default Checkout