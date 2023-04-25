import React from 'react';

const AdminHome = () => {
  return (
    <div className='admin-home-container'>
      <h1>Welcome to the Admin Dashboard</h1>
      <p>Here you can manage all aspects of the e-commerce site, including:</p>
      <ul>
        <li>Add or remove products</li>
        <li>Update prices and descriptions</li>
        <li>View sales and revenue reports</li>
        <li>Manage user accounts</li>
        <li>And more</li>
      </ul>
    </div>
  );
};

export default AdminHome;