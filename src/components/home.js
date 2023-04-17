import React from 'react'
import Items from './Items'
const Home = ({items , handleAddItemToCart}) => {
  
  return (
    <div  className="home-container">
      <h1>Welcome to our E-commerce store!</h1>
      <p>Check out our latest products:</p>
      
     
    <Items  items={items} handleAddToCart={handleAddItemToCart} />
      
     
       
     
    </div>
  )
}

export default Home