import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CARTREDUCER_TYPES } from "../store/Cart_Reducer";

const getCartTotal = (cartitems) => {
  const cartCount = cartitems.reduce(
    (total, cartitem) => total + cartitem.quantity * cartitem.price,
    0
  );
  return cartCount;
};

const updateCartItemReducer = (newCartItems) => {
  const newCartQuantity = newCartItems.length;
  const newCartTotal = getCartTotal(newCartItems);

  return {
    type: CARTREDUCER_TYPES.CHANGE_IN_CART,
    payload: {
      cartitems: newCartItems,
      cartQuantity: newCartQuantity,
      cartTotal: newCartTotal,
    },
  };
};

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

const addItemToCart = (cartitems, productToAdd) => {
  const newCartItems = addCartItem(cartitems, productToAdd);
  return updateCartItemReducer(newCartItems);
};

const ProductCard = ({ product }) => {
  const cartitems = useSelector((state) => state.cart.cartitems);
  const dispatch = useDispatch();
  const { name, imageUrl, price } = product;

  const addProductToCart = (product) => {
    dispatch(addItemToCart(cartitems, product));
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} />
      <div className="footer">
        <span>{name}</span>
        <span className="price">{price}</span>
        <button className="inverted" onClick={() => addProductToCart(product)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
