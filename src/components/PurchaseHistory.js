import React, { useState, useEffect } from 'react';

function PurchaseHistory() {
//   const [purchases, setPurchases] = useState([]);

//   useEffect(() => {
//     // Fetch purchase history from the API
//     fetch('/api/purchases')
//       .then(response => response.json())
//       .then(data => setPurchases(data))
//       .catch(error => console.error(error));
//   }, []);
const purchases = [
{ id: 1, name: 'Product A', price: 10, date: '2022-04-10' },
{ id: 2, name: 'Product B', price: 20, date: '2022-04-11' },
{ id: 3, name: 'Product C', price: 30, date: '2022-04-12' },
];

  return (
    <div className="previous-purchases-container">
    <h2>Previous Purchases</h2>
    {purchases.map((purchase) => (
      <div key={purchase.id} className="purchase">
        <div className="purchase-details">
          <div className="purchase-name">{purchase.name}</div>
          <div className="purchase-price">${purchase.price.toFixed(2)}</div>
          <div className="purchase-date">{purchase.date}</div>
        </div>
      </div>
    ))}
  </div>
  );
}

export default PurchaseHistory;