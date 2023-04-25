import React from 'react';

function Cart({ cartItems, handleRemoveFromCart }) {
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

