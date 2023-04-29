import React from 'react'
import { useState } from 'react';
import axiosSelling from '../api/axios';
import useAuth from '../hooks/useAuth';
function Product({ product  }) {
  const auth = useAuth();
    const { id,imgurl , isAvailableForSale, name, price, quantity ,quantitySold ,SellingCompany_id  } = product;
  
    const [cartItems, setCartItems] = useState([]);
    const handleAddToCart = async (product) => {
      
  
        const response =await axiosSelling.post("/addToOrder",{
          id:product.id,
          imgurl:product.imgurl,
          isAvailableForSale:product.isAvailableForSale,
          name:product.name,
          price:product.price,
          quantity:product.quantity,
          quantitySold:product.quantitySold,
          SellingCompany_id:product.SellingCompany_id
          
        
        });
        
          setCartItems([...cartItems, product]);
          console.log("added to cart successfully"+response.data)
       
     
    };
  
    return (
      <div className="product">
        <img src={imgurl}  className="product-image" />
        <div className="product-details">
          <h3 className="product-title">name: {name}</h3>
          <p className="product-description">quantity: {quantity}</p>
          <p className="product-price">${price}</p>
          <button className="product-btn" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    );
  }
export default Product