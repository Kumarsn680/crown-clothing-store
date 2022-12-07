import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import "../components/category.styles.scss";
import { CartContext } from '../context/Cart_context';
import CartItem from './CartItem';

const CartDropdown = () => {
  const {cartitems,isCartOpen,setIsCartOpen} = useContext(CartContext)
  
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartitems.map((cartitem) => (
          <CartItem key={cartitem.id} cartitem={cartitem}></CartItem>
        ))}
        <Link className="nav-link" to="/checkout">
          <button className="inverted" onClick={()=>{setIsCartOpen(!isCartOpen);}}>Go to checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default CartDropdown