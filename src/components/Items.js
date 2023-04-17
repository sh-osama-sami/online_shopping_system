
import React from 'react'

import Product from './Product'
const Items = ({ items , handleAddToCart }) => {
  return (
    <div className="product-list">
    {items.map((product) => (
      <Product key={product.id} product={product} handleAddToCart = {handleAddToCart} />
    ))}
  </div>
  )
}

export default Items