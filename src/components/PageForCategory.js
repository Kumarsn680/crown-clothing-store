import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const PageForCategory = () => {
    const categories = useSelector((state)=>state.categories.categories)
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
