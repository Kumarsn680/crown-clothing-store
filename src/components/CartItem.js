import React from 'react'



const CartItem = ({cartitem}) => {
  const {quantity,name,imageUrl,price} = cartitem
  return (
    <div className="cart-item-container">
      <img className="cart-image" src={imageUrl} alt={name}></img>
      <div className="item-details">
        <span>{name}</span>
        {quantity === 1 ? (
          <span>{`$${price}`}</span>
        ) : (
          <span>{`${quantity} X $${price}`}</span>
        )}
      </div>
    </div>
  );
}

export default CartItem