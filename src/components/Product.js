import React from 'react'
import { useState } from 'react';
import { axiosClient, axiosSelling}  from "../api/axios";
import useAuth from '../hooks/useAuth';

function Product({ product  }) {
  const auth = useAuth();
    const { id , isAvailableForSale, name, price, quantity ,quantitySold ,SellingCompany_id ,imageUrl  } = product;
  
    const [cartItems, setCartItems] = useState([]);
    const handleAddToCart = async (product) => {
      
      console.log("add to cart"+ id +" "+name+" "+price+" "+quantity+" "+quantitySold+" "+isAvailableForSale+" "+SellingCompany_id);
        const response =await axiosClient.post("/addToOrder",{
          "id":id,
          "isAvailableForSale":isAvailableForSale,
          "name":name,
          "price":price,
          "quantity":quantity,
          "quantitySold":quantitySold,

          
          
        
        });
        console.log(response.data);
        
          setCartItems([...cartItems, product]);
          console.log("added to cart successfully"+response.data)
       
     
    };
  
    return (
      <div className="product">
        <img src={imageUrl}  className="product-image" />
        <div className="product-details">
          <h3 className="product-title"> {name}</h3>
          <p className="product-description">quantity: {quantity}</p>
          <p className="product-price">${price}</p>
          <button className="product-btn" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    );
  }
export default Product