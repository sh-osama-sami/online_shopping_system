import React, { useState } from 'react';
import { axiosSelling } from '../../api/axios';

const CreateCompany = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axiosSelling.post('/admin/createselling', {
        
        username,
       
      });
      setSuccessMessage("Company created successfully");
      console.log('Company created successfully');

      // Clear form fields
      setName('');
      setUsername('');
      setPassword('');
      setAddress('');
      setPhone('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Error creating company');
      console.error('Error creating company:', error.message);
     
    }
  };

  return (
    <div className="create-company-container">
      <h1>Create Company</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
         
          <br />
          <label>
            Username:
            <input type="Username" value={username} onChange={handleUsernameChange} />
          </label>
          <br />
          
          <br />
          
       
          <button type="submit">Create Company</button>
          {successMessage && <p>{successMessage}</p>}
        </div>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default CreateCompany;