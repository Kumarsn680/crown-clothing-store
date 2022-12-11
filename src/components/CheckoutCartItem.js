import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CARTREDUCER_TYPES } from "../store/Cart_Reducer";

const addCartItem = (cartitems, productToAdd) => {
  const cartItemExists = cartitems.find((item) => item.id === productToAdd.id);
  if (cartItemExists) {
    return cartitems.map((cartitem) =>
      cartitem.id === productToAdd.id
        ? { ...cartitem, quantity: cartitem.quantity + 1 }
        : cartitem
    );
  } else {
    return [...cartitems, { ...productToAdd, quantity: 1 }];
  }
};

const removeCartItem = (cartitems, productToRemove) => {
  if (productToRemove.quantity > 1) {
    return cartitems.map((cartitem) =>
      cartitem.id === productToRemove.id
        ? { ...cartitem, quantity: cartitem.quantity - 1 }
        : cartitem
    );
  } else {
    return cartitems.filter((cartitem) => cartitem.id !== productToRemove.id);
  }
};


const removeCartItemCompletely = (cartitems, productToRemove) => {
  return cartitems.filter((cartitem) => cartitem.id !== productToRemove.id);
};

const getCartTotal = (cartitems) =>{
const cartCount = cartitems.reduce(
  (total, cartitem) => total + cartitem.quantity * cartitem.price,
  0
);
return cartCount;
}


const updateCartItemReducer = (newCartItems) => {
  const newCartQuantity = newCartItems.length;
  const newCartTotal = getCartTotal(newCartItems);

  return {
    type: CARTREDUCER_TYPES.CHANGE_IN_CART,
    payload: {
      cartitems: newCartItems,
      cartQuantity: newCartQuantity,
      cartTotal: newCartTotal,
    }
  }
};

const addItemToCart = (cartitems,productToAdd) => {
  const newCartItems = addCartItem(cartitems, productToAdd);
  return updateCartItemReducer(newCartItems);
};

const removeItemFromCart = (cartitems,productToRemove) => {
  const newCartItems = removeCartItem(cartitems, productToRemove);
  return updateCartItemReducer(newCartItems);
};

const removeItemFromCartCompletely = (cartitems,productToRemove) => {
  const newCartItems = removeCartItemCompletely(cartitems, productToRemove);
  return updateCartItemReducer(newCartItems);
};

const CheckoutCartItem = ({ cartitem }) => {
  const cartitems = useSelector((state)=>state.cart.cartitems)
  const dispatch = useDispatch()
  const { quantity, name, imageUrl, price } = cartitem;
  const increaseQuantity = () => {
    dispatch(addItemToCart(cartitems,cartitem))
  };

  const decreaseQuantity = () => {
    dispatch(removeItemFromCart(cartitems,cartitem))
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
      <span onClick={()=>{dispatch(removeItemFromCartCompletely(cartitems,cartitem))}}>X</span>
    </div>
  );
};

export default CheckoutCartItem;
