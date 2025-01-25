import React from "react";
import "../styles/ReceivedDonations.css";

function ReceivedDonations() {
  const receivedDonations = [
    {
      foodName: "Bread and Butter",
      location: "Tenali, Guntur District",
      quantity: "20 servings",
      receivedDate: "2025-01-20",
    },
    {
      foodName: "Vegetable Biryani",
      location: "Mangalagiri, Guntur District",
      quantity: "40 servings",
      receivedDate: "2025-01-18",
    },
  ];

  return (
    <div className="received-donations-container">
      <h2>Received Donations</h2>
      <div className="received-donations-list">
        {receivedDonations.map((donation, index) => (
          <div key={index} className="received-donation-card">
            <h3>{donation.foodName}</h3>
            <p><strong>Location:</strong> {donation.location}</p>
            <p><strong>Quantity:</strong> {donation.quantity}</p>
            <p><strong>Received Date:</strong> {donation.receivedDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReceivedDonations;
