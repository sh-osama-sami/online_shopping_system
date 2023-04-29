
// import React from 'react'

// import Product from './Product'
// const Items = ({ items , handleAddToCart }) => {
//   return (
//     <div className="product-list">
//     {items.map((product) => (
//       <Product key={product.id} product={product} handleAddToCart = {handleAddToCart} />
//     ))}
//   </div>
//   )
// }

// export default Items

import React, { useState, useEffect } from "react";
import { axiosSelling}  from "../api/axios";

import Product from "./Product";

const Items = () => {
 



  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axiosSelling.get("/selling/viewproducts");
        

        if (response.status === 200) {
          setItems(response.data);
        } else {
          console.error("Error fetching items:", response);
        }
      } catch (error) {
        console.error("Error fetching items:", error);
      }

    };

    fetchItems();
  }, []);

  return (
    <div className="product-list">
      {items.map((product) => (
        <Product
          key={product.id}
          product={product}
         
        />
      ))}
    </div>
  );
};

export default Items;