import React, { useState, useEffect } from 'react';
import { axiosClient } from '../../api/axios';

function PurchaseHistory() {
  const [purchases, setPurchases] = useState([]);

 const fetchOldPurchases = async () => {
    try {
      const response = await axiosClient.get("/oldOrders");
      if (response.status === 200) {
        setPurchases(response.data.orders);
      } else {
        console.error("Error fetching items:", response);
      }
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    fetchOldPurchases();
  }, []);
// const purchases = [
// { id: 1, name: 'Product A', price: 10, date: '2022-04-10' },
// { id: 2, name: 'Product B', price: 20, date: '2022-04-11' },
// { id: 3, name: 'Product C', price: 30, date: '2022-04-12' },
// ];

  // return (
  //   <div className="previous-purchases-container">
  //   <h2>Previous Purchases</h2>
  //   {purchases.map((purchase) => (
  //     <div key={purchase.id} className="purchase">
  //       <div className="purchase-details">
  //         <div className="purchase-name">{purchase.name}</div>
  //         <div className="purchase-price">${purchase.price.toFixed(2)}</div>
  //         <div className="purchase-date">{purchase.date}</div>
  //       </div>
  //     </div>
  //   ))}
  // </div>
  // );

  return (
    <div className="previous-purchases-container">
      <h2>Previous Purchases</h2>
      {purchases.map((purchase) => (
        <div key={purchase.id} className="purchase">
          <div className="purchase-details">
            {purchase.products.map((product) => (
              <div key={product.id} className="product">
                <div className="product-name">{product.name}</div>
                <div className="product-price">${product.price.toFixed(2)}</div>
                <div className="product-quantity">{product.quantity}</div>
              </div>
            ))}
            <div className="purchase-total">total :${purchase.total}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PurchaseHistory;