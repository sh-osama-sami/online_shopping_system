import React from "react";

const ProductDetails = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <div>{product.name}</div>
            
        </div>
      ))}
    </>
  );
};

export default ProductDetails;
