import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DonorSignup.css';
import axios from 'axios';

const DonorSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    organizationType: '',
    name: '',
    url: '',
    district: '',
    street: '',
    phoneNumber: '',
    password: '',
    state: '',
    city: '',
    pinCode: '',
    email: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/donor-signup", {
        organizationType: formData.organizationType,
        name: formData.name,
        url: formData.url,
        state: formData.state,
        city: formData.city,
        district: formData.district,
        street: formData.street,
        pinCode: formData.pinCode,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 201) {
        alert("Signup successful!");

      }
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed. Please try again.");
    } // Redirect to Donor Login after signup
  };

  return (
    <div className="donor-signup-container">
      <h2>Donor Signup</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <label>Organization Type</label>
        <input
          type="text"
          name="organizationType"
          value={formData.organizationType}
          onChange={handleChange}
          placeholder="Enter organization type"
          required
        />
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
        <label>Website URL</label>
        <input
          type="url"
          name="url"
          value={formData.url}
          onChange={handleChange}
          placeholder="Enter website URL"
        />
        <label>State</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="Enter your state"
          required
        />
        <label>City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter your city"
          required
        />
        <label>District</label>
        <input
          type="text"
          name="district"
          value={formData.district}
          onChange={handleChange}
          placeholder="Enter your district"
          required
        />
        <label>Street</label>
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          placeholder="Enter your street"
          required
        />
        <label>Pin Code</label>
        <input
          type="number"
          name="pinCode"
          value={formData.pinCode}
          onChange={handleChange}
          placeholder="Enter your pin code"
          required
        />
        <label>Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          required
        />
        <button type="submit">Signup</button>
        <p>
          Already have an account?{' '}
          <span className="login-link" onClick={() => navigate('/donor-login')}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default DonorSignup;
