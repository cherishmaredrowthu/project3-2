import React, { useState } from "react";
import axios from "axios";
import "../styles/PostFood.css";

function PostFood() {
  const [donation, setDonation] = useState({
    foodName: "",
    quantity: "",
    expiryDate: "",
    expiryTime: "",
    address: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonation({ ...donation, [name]: value });
  };

  const handleImageChange = (e) => {
    setDonation({ ...donation, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in donation) {
      formData.append(key, donation[key]);
    }

    try {
      const response = await axios.post("http://localhost:5000/api/donation", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Food donation posted successfully!");
    } catch (error) {
      console.error("Error posting donation:", error);
      alert("Failed to post donation. Please try again.");
    }
  };

  return (
    <div className="donation-form-container">
      <h2>Post a Food Donation</h2>
      <form onSubmit={handleSubmit} className="donation-form">
        <label>
          Food Name:
          <input
            type="text"
            name="foodName"
            value={donation.foodName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Quantity (in servings):
          <input
            type="number"
            name="quantity"
            value={donation.quantity}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Expiry Date:
          <input
            type="date"
            name="expiryDate"
            value={donation.expiryDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Expiry Time:
          <input
            type="time"
            name="expiryTime"
            value={donation.expiryTime}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <textarea
            name="address"
            value={donation.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={donation.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Food Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </label>
        <button type="submit">Post Donation</button>
      </form>
    </div>
  );
}

export default PostFood;
