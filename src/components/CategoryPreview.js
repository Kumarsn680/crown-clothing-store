import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'


const CategoryPreview = ({category}) => {
    const categories = useSelector((state) => state.categories.categories);
    const productList = categories[category]
    const productPreviewList = productList.slice(0,4)
  return (
    <div className="preview-container">
      <h1>
        <Link className="nav-link" to={`${category.toLowerCase()}`}>
          <span>{category.toUpperCase()}</span>
        </Link>
      </h1>
      <div className="product-container">
        {productPreviewList.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
}

export default CategoryPreview