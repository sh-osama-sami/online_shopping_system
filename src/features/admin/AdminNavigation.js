import React from 'react'
import { Link } from 'react-router-dom';
const AdminNavigation = () => {
    
  return (
   //create a navbar with a button to open the side nav bar
   <nav className="navbar">
   {/* <h1 className="logo">My Store</h1> */}
   <ul  className="nav-links">
     <li>
       <Link className="nav-link" to="/admin">Home</Link>
     </li>
     <li>
       <Link className="nav-link" to="/admin/dashboard"> Dashboard</Link>
     </li>
      <li>
      <Link className="nav-link" to="/admin/users">Users list</Link>
      </li>
   
     
   </ul>
 </nav>

  )
}

export default AdminNavigation

//function to toggle open and close the side nav bar

function openNav() {    

    document.getElementById("mySidenav").style.width = "250px";
    }


   