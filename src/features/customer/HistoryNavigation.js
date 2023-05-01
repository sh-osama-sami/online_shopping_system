import React from 'react'
import { Link } from 'react-router-dom'

const HistoryNavigation = () => {
  return (
    //create a navbar with a button to open the side nav bar
   <nav className="navbar">
   {/* <h1 className="logo">My Store</h1> */}
   <ul  className="nav-links">
     <li>
       <Link className="nav-link" to="/user/history/Shipped">not Shipped yet orders</Link>
     </li>
     <li>
       <Link className="nav-link" to="/user/history/Shipped">Shipped orders</Link>
     </li>

     
   </ul>
 </nav>
  )
}

export default HistoryNavigation