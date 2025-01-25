import React, { useState } from "react";
import axios from "axios";
import "../styles/ReceiverSignup.css";

function ReceiverSignup() {
  const [formData, setFormData] = useState({
    orgName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    contactNumber: "",
    description: "",
    website: "",
    locationPriority: "",
    kmRange: "",
    orgType: "",
    beneficiaries: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/receiver/register",
        formData
      );
      console.log("Response from backend:", response.data);
      alert("Registration Successful!");
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Error registering. Please try again.");
    }
  };

  return (
    <div className="receiver-signup">
      <div className="form-container">
        <h2>Receiver Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-item">
              <label>Organization Name:</label>
              <input
                type="text"
                name="orgName"
                value={formData.orgName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-item">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-item">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-item">
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-item">
              <label>Contact Number:</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-item">
              <label>Organization Type:</label>
              <select
                name="orgType"
                value={formData.orgType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Type
                </option>
                <option value="NGO">NGO</option>
                <option value="Charity">Charity</option>
                <option value="Government">Government</option>
                <option value="Private">Private</option>
              </select>
            </div>
            <div className="form-item">
              <label>Address:</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-item">
              <label>Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-item">
              <label>Website (URL):</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            <div className="form-item">
              <label>Location Priority:</label>
              <input
                type="text"
                name="locationPriority"
                value={formData.locationPriority}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-item">
              <label>Range (KM):</label>
              <input
                type="number"
                name="kmRange"
                value={formData.kmRange}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-item">
              <label>Beneficiaries:</label>
              <input
                type="number"
                name="beneficiaries"
                value={formData.beneficiaries}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div align="center">
            <button type="submit" className="submit-button">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReceiverSignup;
