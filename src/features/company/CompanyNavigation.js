import React from 'react'
import { Link } from 'react-router-dom';

const CompanyNavigation = () => {
    return (
        //create a navbar with a button to open the side nav bar
        <nav className="navbar">
        {/* <h1 className="logo">My Store</h1> */}
        <ul  className="nav-links">
          <li>
            <Link className="nav-link" to="/addProduct">add new product </Link>
          </li>
          <li>
          <Link className="nav-link" to="/ViewInstock">view in stock products </Link>

          </li>
          <li>
          <Link className="nav-link" to="/viewSold">view sold products </Link>

          </li>
          
        </ul>
      </nav>
     
       )
}

export default CompanyNavigation