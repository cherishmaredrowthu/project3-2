/**import React from "react";
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
        <button onClick={() => navigate("/update-donorprofile")} className="home-btn">Update Profile</button>
        <button onClick={() => navigate("/")} className="home-btn logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default DonorHome;
**/
// src/components/DonorHome.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DonorHome.css';

function DonorHome() {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleBlockClick = (path) => {
    navigate(path);
  };

  return (
    <div className="app">
      {/*  
      <header className="header">
        <div className="header-left">
          <h1>Food Donation</h1>
        </div>
        <nav className="header-right">
          <button onClick={() => handleBlockClick('/')}>Home</button>
          <button onClick={() => handleBlockClick('/about')}>About</button>
          <button onClick={() => handleBlockClick('/contact')}>Contact Us</button>
        </nav>
      </header>*/}

      {/* Main Content */}
      <main className="main-content">
        <button className="block" onClick={() => handleBlockClick('/post-food')}>
          <i className="fas fa-utensils block-icon"></i>
          <h2>Post Food</h2>
        </button>

        <button className="block" onClick={() => handleBlockClick('/donation-history')}>
          <i className="fas fa-history block-icon"></i>
          <h2>View Donation History</h2>
        </button>

        <button className="block" onClick={() => handleBlockClick('/track-donation')}>
          <i className="fas fa-map-marker-alt block-icon"></i>
          <h2>Track My Donation</h2>
        </button>

        <button className="block" onClick={() => handleBlockClick('/all-donations')}>
          <i className="fas fa-list-alt block-icon"></i>
          <h2>View All Donations</h2>
        </button>

        <button className="block" onClick={() => handleBlockClick('/update-donorprofile')}>
          <i className="fas fa-user-edit block-icon"></i>
          <h2>Update Profile</h2>
        </button>

        <button className="block" onClick={() => handleBlockClick('/')}>
          <i className="fas fa-sign-out-alt block-icon"></i>
          <h2>Logout</h2>
        </button>
      </main>

      {/* Footer */}
      {/*<footer className="footer">
        <p>&copy; 2023 Food Donation. All rights reserved.</p>
      </footer>*/}
    </div>
  );
}

export default DonorHome;
