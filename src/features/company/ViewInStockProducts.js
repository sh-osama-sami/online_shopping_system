import React, { useState, useEffect } from 'react';
import { axiosSelling } from '../../api/axios';

const ViewInStockProducts = () => {
    const [products, setProducts] = useState([]);
//test
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axiosSelling.get('/selling/getSellingCompanyProducts');
          setProducts(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchProducts();
    }, []);

    return(
<div className="stock-container">
  <h1>Stock Products</h1>
  <div className="card-container">
    {products.map((product) => (
      <div key={product.id} className="card">
        <img src={product.imageUrl} alt={product.name} />
        <div className="card-details">
          <h2>{product.name}</h2>
          <p>Price: <span className="price">${product.price}</span></p>
          <p>Quantity: {product.quantity}</p>
        </div>
      </div>
    ))}
  </div>
</div>


    )
//   return (
//     <div className="stock-container">
//     <h1>Stock Products</h1>
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Price</th>
//           <th>Quantity</th>
//           <th>Image</th>
//         </tr>
//       </thead>
//       <tbody >
//         {products.map((product) => (
//           <tr key={product.id}>
//             <td>{product.name}</td>
//             <td>{product.price}</td>
//             <td>{product.quantity}</td>
//             <td>
//               <img src={product.imageUrl} alt={product.name} />
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
//   )
}

export default ViewInStockProducts