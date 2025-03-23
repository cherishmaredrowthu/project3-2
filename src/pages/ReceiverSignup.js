import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/ReceiverSignup.css";

function ReceiverSignup() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    orgName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
    website: "",
    locationPriority: "",
    kmRange: "",
    orgType: "",
    beneficiaries: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/api/receiver-signup", formData);
      console.log("Response from backend:", response.data);
      alert("Registration Successful!");
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Error registering. Please try again.");
    }
  };

  const handleLoginRedirect = () => {
    navigate("/receiver-login");
  };

  return (
    <div className="receiver-signup">
      <div className="form-container">
        <h2>Receiver Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-item">
              <label>Organization Name:</label>
              <input type="text" name="orgName" value={formData.orgName} onChange={handleChange} required />
            </div>
            <div className="form-item">
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-item">
              <label>Password:</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="form-item">
              <label>Confirm Password:</label>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
            <div className="form-item">
              <label>Contact Number:</label>
              <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
            </div>
            <div className="form-item">
              <label>Organization Type:</label>
              <select name="orgType" value={formData.orgType} onChange={handleChange} required>
                <option value="" disabled>Select Type</option>
                <option value="NGO">NGO</option>
                <option value="Charity">Charity</option>
                <option value="Government">Government</option>
                <option value="Private">Private</option>
              </select>
            </div>
            <div className="form-item">
              <label>Website (URL):</label>
              <input type="url" name="website" value={formData.website} onChange={handleChange} />
            </div>
            <div className="form-item">
              <label>Location Priority:</label>
              <select name="locationPriority" value={formData.locationPriority} onChange={handleChange} required>
                <option value="" disabled>Select Priority</option>
                <option value="City">City</option>
                <option value="District">District</option>
                <option value="State">State</option>
              </select>
            </div>
            <div className="form-item">
              <label>Range (KM):</label>
              <input type="number" name="kmRange" value={formData.kmRange} onChange={handleChange} required />
            </div>
            <div className="form-item">
              <label>Beneficiaries:</label>
              <input type="number" name="beneficiaries" value={formData.beneficiaries} onChange={handleChange} required />
            </div>
            <div className="form-item">
              <label>Address:</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            <div className="form-item">
              <label>City:</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            </div>
            <div className="form-item">
              <label>State:</label>
              <input type="text" name="state" value={formData.state} onChange={handleChange} required />
            </div>
            <div className="form-item">
              <label>Pincode:</label>
              <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
            </div>
          </div>
          <div align="center">
            <button type="submit" className="submit-button">Register</button>
          </div>
        </form>
        <div align="center" className="login-redirect">
          <p>Already registered? <button onClick={handleLoginRedirect} className="login-button">Login</button></p>
        </div>
      </div>
    </div>
  );
}

export default ReceiverSignup;
