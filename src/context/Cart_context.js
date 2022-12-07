import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

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

const quantityOfItems = (cartitems, productToRemove) => {
  return cartitems.find((cartirtem) => cartirtem.id === productToRemove.id)
    .quantity;
};

const removeCartItemCompletely = (cartitems, productToRemove) => {
  return cartitems.filter((cartitem) => cartitem.id !== productToRemove.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: {},
  cartitems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartQuantity: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartitems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const cartCount = cartitems.reduce(
      (total, cartitem) => total + cartitem.quantity * cartitem.price,
      0
    );
    setCartTotal(cartCount);
  }, [cartitems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartitems, productToAdd));
    setCartQuantity(cartQuantity + 1);
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartitems, productToRemove));
    if (cartQuantity !== 0) setCartQuantity(cartQuantity - 1);
  };

  const removeItemFromCartCompletely = (productToRemove) => {
    const itemquantity = quantityOfItems(cartitems, productToRemove);
    console.log(itemquantity);
    setCartItems(removeCartItemCompletely(cartitems, productToRemove));
    if (cartQuantity !== 0) setCartQuantity(cartQuantity - itemquantity);
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
