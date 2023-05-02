import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {axiosSelling }from '../../api/axios';
const ViewSoldProducts = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axiosSelling.get('/selling/getOldOrders')
        .then(response => {
          setOrders(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
    if (orders.length === 0) {
        return <div className='alert'>No old orders to show</div>;
      }
    return (
      <div>
        <h1>Previously Sold Products</h1>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Customer Name</th>
              <th>Shipping Company</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.product.id}>
                <td>{order.product.name}</td>
                <td>{order.sellingCompanyOrder.customerName}</td>
                <td>{order.sellingCompanyOrder.shippingCompanyName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default ViewSoldProducts