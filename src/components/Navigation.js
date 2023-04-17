import React from 'react'
import { Link } from 'react-router-dom';
const Navigation = () => {
    
  return (
   //create a navbar with a button to open the side nav bar
   <nav className="navbar">
   {/* <h1 className="logo">My Store</h1> */}
   <ul  className="nav-links">
     <li>
       <Link className="nav-link" to="/">Home</Link>
     </li>
     <li>
       <Link className="nav-link" to="/history">Purchase history</Link>
     </li>
     <li>
       <Link className="nav-link" to="/cart">Cart</Link>
     </li>
     <li>
       <Link className="nav-link" to="/register">Register</Link>
     </li>
     <li>
       <Link className="nav-link" to="/login">Login</Link>
     </li>
     
   </ul>
 </nav>

  )
}

export default Navigation

//function to toggle open and close the side nav bar

function openNav() {    

    document.getElementById("mySidenav").style.width = "250px";
    }


   