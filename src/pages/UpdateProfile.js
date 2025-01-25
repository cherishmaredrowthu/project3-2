/** import React, { useState } from "react";
import "../styles/UpdateProfile.css";

const UpdateProfile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
    address: "123 Main Street, City",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <div className="update-profile-container">
      <div className="profile-box">
        <h2>Update Profile</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleChange}
            placeholder="Address"
            required
          />
          <button type="submit" className="update-btn">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
**/
import React, { useState } from 'react';
import "../styles/UpdateProfile.css";

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '', // Added correct key for address
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
    console.log('Profile updated:', formData);
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
        <center>Update Profile</center>
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
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Update your name"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your updated email"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your changed phone number"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your updated address"
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
          Update
        </button>
      </form>
    </div>
    </div>
  );
};

export default UpdateProfile;