import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../context/Categories_context";
import ProductCard from "./ProductCard";

const PageForCategory = () => {
    const { categories } = useContext(CategoriesContext);
    const { category } = useParams();
    const [products,setProducts] = useState([])

    useEffect(()=>{
        if(categories[category] !== undefined){
            setProducts(categories[category])
        }
    },[categories,category])
 
  return (
    <div className="product-container">
      {
      categories[category] === undefined ? (
         <div><h1>Loading....</h1></div>
      ) : (
          products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
          ))    
      )
      }
    </div>
  );
};

export default PageForCategory;
