import React, { useContext } from 'react'
import { CartContext } from '../context/Cart_context'
import CheckoutCartItem from './CheckoutCartItem'


const Checkout = () => {

    const { cartitems,cartTotal } = useContext(CartContext);
    
    
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