import React, { useEffect } from 'react';
import { useState } from 'react';
import {axiosClient ,axiosSelling}  from "../../api/axios";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const fetchCartItems = async () => {
    try {
      const response = await axiosClient.get("/customerOrder");
      if (response.status === 200) {
       
        console.log(response.data.products.id);
        setCartItems(response.data.products);
        setCartTotal(response.data.total);
      } else {
        console.error("Error fetching items:", response);
      }
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
  useEffect (()=>{
    fetchCartItems();
  },[]);
  const handleRemoveFromCart = async (item) => {
    try {
      const response = await axiosClient.delete(`/removeFromOrder/${item.id}`);
      if (response.status === 200) {
        const updateTotal = cartTotal - item.price;
        setCartTotal(updateTotal);
        fetchCartItems();
      } else {
        console.error("Error removing item:", response);
      }
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

 const  handleCheckout = async () => {
    try {
      const response = await axiosClient.post("/completeOrder"); 
      if (response.status === 200) {
        setCartItems([]);
        setCartTotal(0);
        console.log("Order completed successfully"+response.data);
      } else {
        console.error("Error checking out:", response);
      } 
    } catch (error) {
      console.error("Error checking out:", error);
    } 
  };

  // const
  // handleRemoveFromCart = (item) => {
  //   const updatedCartItems = cartItems.filter(
  //     (cartItem) => cartItem.id !== item.id
  //   );
  //   setCartItems(updatedCartItems);
  //   const cartTotal = cartItems.reduce(
  //     (total, item) => total + item.price ,
  //     0
  //   );
  //   setCartTotal(cartTotal);
  // };
  

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            {/* <img src={item.image} alt={item.title} /> */}
            <div>
              <h3>{item.name}</h3>
              <p> ${item.price}</p>
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <p>Total: {cartTotal}</p>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;

