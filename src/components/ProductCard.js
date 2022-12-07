import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/Cart_context";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, imageUrl, price } = product;

  const addProductToCart = (product) => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} />
      <div className="footer">
        <span>{name}</span>
        <span className="price">{price}</span>
        <button className="inverted" onClick={()=>addProductToCart(product)}>
          Add to cart  
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
