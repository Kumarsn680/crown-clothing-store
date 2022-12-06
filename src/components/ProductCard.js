import React from 'react'

const ProductCard = ({product}) => {
    const {name,imageUrl,price} = product
  return (
    <div className='product-card-container'>
        <img  src={imageUrl} />
        <div className="footer">
            <span className="">{name}</span>
            <span className="price">{price}</span>
            <button className='inverted'>Add to cart</button>
        </div>
    </div>
  )
}

export default ProductCard