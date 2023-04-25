import Items from "./components/Items";
import { useState } from "react";
import AdminNavigation from "./features/admin/AdminNavigation";

import ClientNavigation from "./features/customer/ClientNavigation";
import Home from "./features/customer/home";
import Signup from "./features/auth/signup";
import Login from "./features/auth/Login";
import Cart from "./features/customer/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PurchaseHistory from "./features/customer/PurchaseHistory";
import RequiredAuth from "./features/auth/RequiredAuth";
import Unauthorised from "./features/auth/Unauthorised";
import AdminHome from "./features/admin/AdminHome";

const name = "item";
function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Item 1",
      price: 100,
      quantity: 1,
    },

    {
      id: 2,
      name: "Item 2",
      price: 200,
      quantity: 1,
    },
    {
      id: 3,
      name: "Item 3",
      price: 200,
      quantity: 1,
    },
    {
      id: 4,
      name: "Item 4",
      price: 200,
      quantity: 1,
    },
    {
      id: 5,
      name: "Item 5",
      price: 200,
      quantity: 1,
    },
    {
      id: 6,
      name: "Item 6",
      price: 200,
      quantity: 1,
    },
    {
      id: 7,
      name: "Item 7",
      price: 200,
      quantity: 1,
    },
    {
      id: 8,
      name: "Item 8",
      price: 200,
      quantity: 1,
    },
    {
      id: 9,
      name: "Item 9",
      price: 200,
      quantity: 1,
    },
  ]);
  const handleAddToCart = (item) => {
    const itemIndex = items.findIndex((cartItem) => cartItem.id === item.id);
    if (itemIndex === -1) {
      // Item not found in cart, add it with quantity of 1
      setItems([...items, { ...item, quantity: 1 }]);
    } else {
      // Item already in cart, update quantity
      const updatedCartItems = [...items];
      updatedCartItems[itemIndex].quantity += 1;
      setItems(updatedCartItems);
    }
  };

  const handleRemoveFromCart = (item) => {
    const updatedCartItems = items.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setItems(updatedCartItems);
  };
  return (
    <Routes>
      {/* public routes  */}

      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorised />} />

      {/* private routes  */}
      <Route element={<RequiredAuth allowedRoles={["admin"]} />}>
        <Route path="/admin" element={<AdminHome />} />
      </Route>

      <Route element={<RequiredAuth allowedRoles={["user"]} />}>
        <Route
          path="/user"
          element={<Home items={items} handleAddItemToCart={handleAddToCart} />}
        />
        <Route
          path="/user/cart"
          element={
            <Cart
              cartItems={items}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
        <Route path="/user/history" element={<PurchaseHistory />} />
      </Route>
    </Routes>
  );
}

export default App;
