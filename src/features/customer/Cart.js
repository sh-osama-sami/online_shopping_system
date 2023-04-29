import React, { useEffect } from 'react';
import { useState } from 'react';
import {axiosClient ,axiosSelling}  from "../../api/axios";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  useEffect (()=>{
    const fetchCartItems = async () => {
      try {
        const response = await axiosClient.get("/customerOrder");
        if (response.status === 200) {
          setCartItems(response.data);
        } else {
          console.error("Error fetching items:", response);
        }
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchCartItems();
  },[]);

  const
  handleRemoveFromCart = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCartItems);
  };
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.quantity} x ${item.price}</p>
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <p>Total: ${cartTotal.toFixed(2)}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;

