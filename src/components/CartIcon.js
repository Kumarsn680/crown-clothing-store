import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  {ReactComponent as ShopBagLogo} from  "../assets/111 shopping-bag.svg";
import "../components/category.styles.scss"
import { CARTREDUCER_TYPES } from '../store/Cart_Reducer';

const setIsCartOpen = (payload) => {
  return { type: CARTREDUCER_TYPES.CART_IS_OPEN, payload: payload };
};


const CartIcon = () => {
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);
  const dispatch = useDispatch();

  const handleCartClick = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  }
  
  return (
    <div className="cart-icon-container" onClick={handleCartClick}>
      <ShopBagLogo className="shopping-icon"></ShopBagLogo>
      <span className="item-count">{cartQuantity}</span>
    </div>
  );
}

export default CartIcon