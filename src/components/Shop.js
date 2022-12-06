import { React, useContext } from "react";
import { ProductContext } from "../context/Products_context";
import ProductCard from "./ProductCard";
import "./category.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
