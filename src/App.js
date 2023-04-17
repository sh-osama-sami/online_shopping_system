import Items from './components/Items';
import {useState } from 'react'
import Navigation from './components/Navigation';
import Home from './components/home';
import Signup from './components/signup';
import Login from './components/Login';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PurchaseHistory from './components/PurchaseHistory';

const name = "item";
function App() {
  
  const [items, setItems] = useState([
    {

      id: 1,
      name: 'Item 1',
      price: 100,
      quantity: 1

  },
  
  {
      id: 2,
      name: 'Item 2',
      price: 200,
      quantity: 1
    },
    {
      id: 3,
      name: 'Item 3',
      price: 200,
      quantity: 1
    },
    {
      id: 4,
      name: 'Item 4',
      price: 200,
      quantity: 1
    },
    {
      id: 5,
      name: 'Item 5',
      price: 200,
      quantity: 1
    },
    {
      id: 6,
      name: 'Item 6',
      price: 200,
      quantity: 1
    },
    {
      id: 7,
      name: 'Item 7',
      price: 200,
      quantity: 1
    },
    {
      id: 8,
      name: 'Item 8',
      price: 200,
      quantity: 1
    },
    {
      id: 9,
      name: 'Item 9',
      price: 200,
      quantity: 1
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
    const updatedCartItems = items.filter((cartItem) => cartItem.id !== item.id);
    setItems(updatedCartItems);
  };
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route  path='/' element={<Home items={items} handleAddItemToCart={ handleAddToCart}/>} />
         <Route path='/register' element={<Signup/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/cart' element={<Cart cartItems={items} handleRemoveFromCart={handleRemoveFromCart}/>} />
         <Route path='/history' element={<PurchaseHistory />} />


         { /*<Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
         <Route path="/cart" component={Cart} /> */}
      </Routes>
    </Router>
    
  );
  }

export default App;
