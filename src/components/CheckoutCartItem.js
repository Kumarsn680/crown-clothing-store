import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/Cart_context";

const CheckoutCartItem = ({ cartitem }) => {
  const { addItemToCart, removeItemFromCart, removeItemFromCartCompletely } = useContext(CartContext);
  const { quantity, name, imageUrl, price } = cartitem;
  const increaseQuantity = () => {
    addItemToCart(cartitem);
  };

  const decreaseQuantity = () => {
    removeItemFromCart(cartitem);
  };

  return (
    <div className="checkout-cartitem">
      <img src={imageUrl} alt={name}></img>
      <span>{name}</span>
      <div className="quantity-controller">
        <span
          onClick={() => {
            decreaseQuantity();
          }}
        >
          &lt;
        </span>
        <span>{quantity}</span>
        <span
          onClick={() => {
            increaseQuantity();
          }}
        >
          &gt;
        </span>
      </div>
      <span>${price}</span>
      <span onClick={()=>{removeItemFromCartCompletely(cartitem);}}>X</span>
    </div>
  );
};

export default CheckoutCartItem;
