import React, { useState } from 'react';
import "../styles/UpdateReceiverProfile.css";

const UpdateReceiverProfile = () => {
  const [formData, setFormData] = useState({
    orgName: '',
    address: '',
    contactNumber: '',
    description: '',
    website: '',
    locationPriority: '',
    kmRange: '',
    orgType: '',
    beneficiaries: '',
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
    console.log('Receiver profile updated:', formData);
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
          <center>Update Receiver Profile</center>
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
            <div className="profile-initials">{getInitials(formData.orgName)}</div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="profile-update-form">
          <div className="form-field">
            <label htmlFor="orgName">Organization Name:</label>
            <input
              type="text"
              id="orgName"
              name="orgName"
              value={formData.orgName}
              onChange={handleChange}
              placeholder="Update organization name"
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
              placeholder="Enter updated address"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Enter updated contact number"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter a brief description"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="website">Website:</label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Enter updated website"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="locationPriority">Location Priority:</label>
            <input
              type="text"
              id="locationPriority"
              name="locationPriority"
              value={formData.locationPriority}
              onChange={handleChange}
              placeholder="Enter location priority"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="kmRange">Distance Range (in km):</label>
            <input
              type="number"
              id="kmRange"
              name="kmRange"
              value={formData.kmRange}
              onChange={handleChange}
              placeholder="Enter the distance range in kilometers"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="orgType">Organization Type:</label>
            <input
              type="text"
              id="orgType"
              name="orgType"
              value={formData.orgType}
              onChange={handleChange}
              placeholder="Enter organization type"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="beneficiaries">Beneficiaries:</label>
            <input
              type="text"
              id="beneficiaries"
              name="beneficiaries"
              value={formData.beneficiaries}
              onChange={handleChange}
              placeholder="Enter beneficiaries"
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

export default UpdateReceiverProfile;
