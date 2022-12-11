import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "../components/category.styles.scss";
import { CartContext } from '../context/Cart_context';
import CartItem from './CartItem';
import { CARTREDUCER_TYPES } from "../store/Cart_Reducer";


const setIsCartOpen = (payload) => {
  return { type: CARTREDUCER_TYPES.CART_IS_OPEN, payload: payload };
};

const CartDropdown = () => {
  const isCartOpen = useSelector((state)=>state.cart.isCartOpen)
  const cartitems = useSelector((state) => state.cart.cartitems);
  const dispatch = useDispatch()

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartitems.map((cartitem) => (
          <CartItem key={cartitem.id} cartitem={cartitem}></CartItem>
        ))}
        <Link className="nav-link" to="/checkout">
          <button
            className="inverted"
            onClick={() => {
              dispatch(setIsCartOpen(!isCartOpen));
            }}
          >
            Go to checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CartDropdown