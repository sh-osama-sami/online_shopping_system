
import React from 'react'
import { useState } from 'react';
import { axiosSelling}  from "../../api/axios";

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState('');
    const [imageUrl, setImg] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handlePriceChange = (event) => {
      setPrice(event.target.value);
    };
  
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
        };

    const handleImgChange = (event) => {
        setImg(event.target.value);
        };

    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await axiosSelling.post('/selling/addproduct', {
          name,
          price,
          quantity,
          imageUrl
        });
        setSuccessMessage('Product created successfully!');
        console.log('Product created:', response.data);
  
        // Clear form fields
        setName('');
        setPrice(0);
        setQuantity('');
        setImg('');
      } catch (error) {
        console.error('Error creating product:', error.message);
        setSuccessMessage('Product created successfully!');
      }
    };
  
    return (
        <div className="add-product-container">
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" value={price} onChange={handlePriceChange} />
        </label>
        <br />
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={handleQuantityChange} />
        </label>
        <label>
          imag url:
          <input type="text" value={imageUrl} onChange={handleImgChange} />
        </label>
        <br />
        <button type="submit">Create Product </button>
        {successMessage && <p>{successMessage}</p>}
        </div>
      </form>
      </div>
    );
  
}

export default AddProduct