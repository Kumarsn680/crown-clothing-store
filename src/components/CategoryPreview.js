import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CategoriesContext } from '../context/Categories_context'
import ProductCard from './ProductCard'


const CategoryPreview = ({category}) => {
    const {categories} = useContext(CategoriesContext)
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