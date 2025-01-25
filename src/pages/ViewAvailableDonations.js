import React from "react";
import "../styles/ViewAvailableDonations.css";

function ViewAvailableDonations() {
  const donations = [
    {
      foodName: "Rice and Curry",
      location: "Vijayawada, Krishna District",
      quantity: "50 servings",
      status: "Available",
    },
    {
      foodName: "Fruits and Snacks",
      location: "Guntur, Guntur District",
      quantity: "30 servings",
      status: "Available",
    },
  ];

  return (
    <div className="donations-container">
      <h2>Available Donations</h2>
      <div className="donations-list">
        {donations.map((donation, index) => (
          <div key={index} className="donation-card">
            <h3>{donation.foodName}</h3>
            <p><strong>Location:</strong> {donation.location}</p>
            <p><strong>Quantity:</strong> {donation.quantity}</p>
            <p><strong>Status:</strong> {donation.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewAvailableDonations;
