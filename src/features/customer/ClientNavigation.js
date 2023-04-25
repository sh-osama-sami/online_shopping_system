import React from 'react'
import { Link } from 'react-router-dom';
const ClientNavigation = () => {
    
  return (
   //create a navbar with a button to open the side nav bar
   <nav className="navbar">
   {/* <h1 className="logo">My Store</h1> */}
   <ul  className="nav-links">
     <li>
       <Link className="nav-link" to="/user">Home</Link>
     </li>
     <li>
       <Link className="nav-link" to="/user/history">Purchase history</Link>
     </li>
     <li>
       <Link className="nav-link" to="/user/cart">Cart</Link>
     </li>
     <li>
       <Link className="nav-link" to="/">Register</Link>
     </li>
     <li>
       <Link className="nav-link" to="/login">Login</Link>
     </li>
     
   </ul>
 </nav>

  )
}

export default ClientNavigation

//function to toggle open and close the side nav bar

function openNav() {    

    document.getElementById("mySidenav").style.width = "250px";
    }


   