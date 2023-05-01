import React, { useState, useEffect } from 'react';
import { axiosSelling } from "../../api/axios";

const ShippingCompany = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await axiosSelling.get('/shipping/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error.message);
      }
    }
    fetchOrders();
  }, []);

  const handleOrderProcessing = async (orderId) => {
    try {
      const response = await axiosSelling.post(`/shipping/orders/${orderId}/process`);
      console.log(`Order ${orderId} processed:`, response.data);
      // Update orders state
      setOrders((prevOrders) => prevOrders.map((order) => {
        if (order.id === orderId) {
          return { ...order, status: 'processed' };
        }
        return order;
      }));
      // Notify user
      alert(`Order ${orderId} processed successfully.`);
    } catch (error) {
      console.error(`Error processing order ${orderId}:`, error.message);
    }
  };

  return (
    <div className="shipping-company-container">
      <h1>Customer Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.productName}</td>
              <td>{order.quantity}</td>
              <td>{order.status}</td>
              <td>
                {order.status === 'new' && (
                  <button onClick={() => handleOrderProcessing(order.id)}>Process</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShippingCompany;