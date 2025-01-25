import React from "react";
import "../styles/ViewDonationHistory.css";

const ViewDonationHistory = () => {
  const donationHistory = [
    { id: 1, foodName: "Rice & Curry", quantity: "10 plates", status: "Delivered" },
    { id: 2, foodName: "Biryani", quantity: "15 plates", status: "Pending" },
    { id: 3, foodName: "Bread & Jam", quantity: "20 packets", status: "Accepted" },
  ];

  return (
    <div className="history-container">
      <div className="history-box">
        <h2>Donation History</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Food Name</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {donationHistory.map((donation) => (
              <tr key={donation.id}>
                <td>{donation.id}</td>
                <td>{donation.foodName}</td>
                <td>{donation.quantity}</td>
                <td>{donation.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewDonationHistory;
