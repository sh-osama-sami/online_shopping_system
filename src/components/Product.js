import React from 'react'

function Product({ product ,handleAddToCart }) {
    const { id, title, price, image, description } = product;
  
    return (
      <div className="product">
        <img src={image} alt={title} className="product-image" />
        <div className="product-details">
          <h3 className="product-title">{title}</h3>
          <p className="product-description">{description}</p>
          <p className="product-price">${price}</p>
          <button className="product-btn" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    );
  }
export default Product