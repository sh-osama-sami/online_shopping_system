import React, { useState, useEffect } from 'react';
import {axiosSelling} from '../../api/axios';
import './../../style/ListShipping.css';
function ShippingCompanies() {
  const [shippingCompanies, setShippingCompanies] = useState([]);

  useEffect(() => {
    axiosSelling.get('/admin/getallshipping')
      .then(response => {
        setShippingCompanies(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Shipping Companies</h1>
      <table className="shipping-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Supported region</th>
          </tr>
        </thead>
        <tbody>
          {shippingCompanies.map(shippingCompany => (
            <tr key={shippingCompany.id}>
              <td>{shippingCompany.id}</td>
              <td>{shippingCompany.username}</td>
              <td>
            {shippingCompany.locations.map((region, index) => (
              <div key={index}>{region}</div>
            ))}
          </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShippingCompanies;