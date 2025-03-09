import React, { useState } from 'react';
import "../styles/UpdateDonorProfile.css";

const UpdateDonorProfile = () => {
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
    profileImage: '', // To store the image URL
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          profileImage: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setFormData({
      ...formData,
      profileImage: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donor profile updated:', formData);
    // Add logic to send data to your backend API
  };

  const getInitials = (name) => {
    if (!name) return '';
    return name
      .trim()
      .split(' ')
      .map((n) => n.charAt(0).toUpperCase())
      .join('');
  };

  return (
    <div className='dup'>
      <div className="profile-update-container">
        <h2>
          <center>Update Donor Profile</center>
        </h2>
        <div className="profile-picture-container">
          {formData.profileImage ? (
            <div className="profile-picture-wrapper">
              <img
                src={formData.profileImage}
                alt="Profile"
                className="profile-picture"
              />
              <button
                className="delete-icon"
                onClick={handleImageRemove}
                title="Delete"
              >
                ✖
              </button>
            </div>
          ) : (
            <div className="profile-initials">{getInitials(formData.name)}</div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="profile-update-form">
          <div className="form-field">
            <label htmlFor="organizationType">Organization Type:</label>
            <input
              type="text"
              id="organizationType"
              name="organizationType"
              value={formData.organizationType}
              onChange={handleChange}
              placeholder="Update organization type"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="name">Organization Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter organization name"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="url">Website URL:</label>
            <input
              type="url"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="Enter website URL"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="district">District:</label>
            <input
              type="text"
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="Enter district"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="street">Street:</label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              placeholder="Enter street"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="state">State:</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter state"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="pinCode">Pin Code:</label>
            <input
              type="text"
              id="pinCode"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              placeholder="Enter pin code"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="profileImage">Profile Image:</label>
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <button type="submit" className="update-button">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateDonorProfile;
