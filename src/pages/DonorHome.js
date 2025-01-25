import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DonorHome.css";

const DonorHome = () => {
  const navigate = useNavigate();

  return (
    <div className="donor-home-container">
      <div className="home-box">
        <h2>Welcome, Donor</h2>
        <button onClick={() => navigate("/post-food")} className="home-btn">Post Food</button>
        <button onClick={() => navigate("/donation-history")} className="home-btn">View Donation History</button>
        <button onClick={() => navigate("/track-donation")} className="home-btn">Track My Donation</button>
        <button onClick={() => navigate("/all-donations")} className="home-btn">View All Donations</button>
        <button onClick={() => navigate("/update-profile")} className="home-btn">Update Profile</button>
        <button onClick={() => navigate("/")} className="home-btn logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default DonorHome;
