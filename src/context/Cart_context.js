import { useEffect } from "react";
import { useState,useReducer } from "react";
import { createContext } from "react";


export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: {},
  cartitems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartQuantity: 0,
  cartTotal: 0,
});

const CARTREDUCER_INITIAL_STATE = {
  isCartOpen: false,
  cartitems: [],
  cartQuantity: 0,
  cartTotal: 0,
};

const CARTREDUCER_TYPES = {
  CHANGE_IN_CART: "CHANGE_IN_CART",
  CART_IS_OPEN: "CART_IS_OPEN",
};

const cartReducer = (state,action) => {
  const {type,payload} = action
  switch (type) {
    case CARTREDUCER_TYPES.CART_IS_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CARTREDUCER_TYPES.CHANGE_IN_CART:
      return {
        ...state,
        ...payload,
      };

    default:
      throw new Error(`undefined type ${type} in cartReducer`);
  }
}

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


export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer,CARTREDUCER_INITIAL_STATE)
  const {isCartOpen,cartQuantity,cartitems,cartTotal} = state
  const setIsCartOpen = () =>{
  dispatch({ type: CARTREDUCER_TYPES.CART_IS_OPEN, payload: !isCartOpen});
  }

const updateCartItemReducer = (newCartItems) => {
  const newCartQuantity  = newCartItems.length
  const newCartTotal = getCartTotal(newCartItems);

  dispatch({
    type: CARTREDUCER_TYPES.CHANGE_IN_CART,
    payload: {
      cartitems: newCartItems,
      cartQuantity: newCartQuantity,
      cartTotal: newCartTotal,
    },
  });


}

  const addItemToCart = (productToAdd) => {
   const newCartItems = addCartItem(cartitems,productToAdd)
   updateCartItemReducer(newCartItems)
  };

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartitems,productToRemove)
   updateCartItemReducer(newCartItems)
  };

  const removeItemFromCartCompletely = (productToRemove) => {
    const newCartItems = removeCartItemCompletely(cartitems, productToRemove);
    updateCartItemReducer(newCartItems);
  };


  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartitems,
    cartQuantity,
    removeItemFromCart,
    removeItemFromCartCompletely,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
