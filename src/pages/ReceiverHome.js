import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ReceiverHome.css";

function ReceiverHome() {
  const navigate = useNavigate();

  return (
    <div className="receiver-home-container">
      <h2>Welcome, Receiver</h2>
      <div className="button-container">
        <button
          className="receiver-home-btn"
          onClick={() => navigate("/view-available-donations")}
        >
          View Available Donations
        </button>
        <button
          className="receiver-home-btn"
          onClick={() => navigate("/received-donations")}
        >
          Received Donations
        </button>
        <button
          className="receiver-home-btn"
          onClick={() => navigate("/track-donation")}
        >
          Track My Donation
        </button>
        <button
          className="receiver-home-btn"
          onClick={() => navigate("/update-profile")}
        >
          Update Profile
        </button>
        <button className="receiver-home-btn logout" onClick={() => navigate("/")}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default ReceiverHome;
