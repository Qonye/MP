import React, { useState } from 'react';
import api from '../api';

const VendorRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/vendors/register', { name, email, password, description });
      console.log('Vendor registered:', response.data);
    } catch (error) {
      console.error('Error registering vendor:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Vendor Name</label>
        <input type="text" name="vendorName" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label>Description</label>
        <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default VendorRegistration;
