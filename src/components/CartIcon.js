import React, { useContext } from 'react'
import  {ReactComponent as ShopBagLogo} from  "../assets/111 shopping-bag.svg";
import "../components/category.styles.scss"
import { CartContext } from '../context/Cart_context';

const CartIcon = () => {
  const {isCartOpen,setIsCartOpen} = useContext(CartContext)

  const handleCartClick = () => {setIsCartOpen(!isCartOpen)}

  return (
    <div className="cart-icon-container" onClick={handleCartClick}>
      <ShopBagLogo className="shopping-icon"></ShopBagLogo>
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIcon