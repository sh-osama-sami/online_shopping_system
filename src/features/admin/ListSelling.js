import React, { useState, useEffect } from 'react';
import {axiosSelling} from '../../api/axios';
import './../../style/ListShipping.css';
function SellingCompanies() {
  const [SellingCompanies, setSellingCompanies] = useState([]);

  useEffect(() => {
    axiosSelling.get('/admin/getallselling')
      .then(response => {
        setSellingCompanies(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Selling Companies</h1>
      <table className="shipping-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {SellingCompanies.map(shippingCompany => (
            <tr key={shippingCompany.id}>
              <td>{shippingCompany.id}</td>
              <td>{shippingCompany.username}</td>
              <td>{shippingCompany.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SellingCompanies;