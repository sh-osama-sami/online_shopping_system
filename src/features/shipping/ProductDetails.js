import React from "react";

const ProductDetails = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.quantity}</div>
            
        </div>
      ))}
    </>
  );
};

export default ProductDetails;
