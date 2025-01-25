import React from "react";
import "../styles/TrackDonation.css";

const orders = [
  { orderId: '12345', foodDetails: 'Rice and Curry (50 servings)', status: 'Pending' },
  { orderId: '12346', foodDetails: 'Bread and Jam (30 servings)', status: 'Accepted' },
  { orderId: '12347', foodDetails: 'Fruits and Snacks (100 servings)', status: 'Delivered' },
  { orderId: '12348', foodDetails: 'Packaged Meals (75 servings)', status: 'In Transit' },
  { orderId: '12349', foodDetails: 'Biscuits and Water Bottles (20 servings)', status: 'Cancelled' },
];

const TrackDonation = () => {
  return (
    <div className="track-donation-container">
      <div className="track-box">
        <h2>Track Your Donation</h2>
        <div className="donation-status">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Food Details</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.orderId}>
                  <td>{order.orderId}</td>
                  <td>{order.foodDetails}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TrackDonation;
