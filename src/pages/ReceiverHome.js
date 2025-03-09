/**import React from "react";
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
          onClick={() => navigate("/update-receiverprofile")}
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
**/
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ReceiverHome.css';

function ReceiverHome() {
  const navigate = useNavigate();

  return (
    <div className="app">
      {/* 
      <header className="header">
        <div className="header-left">
          <h1>Food Donation</h1>
        </div>
        <nav className="header-right">
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/about')}>About</button>
          <button onClick={() => navigate('/contact')}>Contact Us</button>
        </nav>
      </header>*/}

      {/* Main Content */}
      <main className="main-content">
        <button
          className="block"
          onClick={() => navigate('/view-available-donations')}
        >
          <i className="fas fa-utensils block-icon"></i>
          <h2>View Available Donations</h2>
        </button>

        <button
          className="block"
          onClick={() => navigate('/received-donations')}
        >
          <i className="fas fa-history block-icon"></i>
          <h2>Received Donations</h2>
        </button>

        <button
          className="block"
          onClick={() => navigate('/track-donation')}
        >
          <i className="fas fa-map-marker-alt block-icon"></i>
          <h2>Track My Donation</h2>
        </button>

        <button
          className="block"
          onClick={() => navigate('/update-receiverprofile')}
        >
          <i className="fas fa-user-edit block-icon"></i>
          <h2>Update Profile</h2>
        </button>

        <button
          className="block"
          onClick={() => navigate('/receiver-feedback')}
        >
          <i className="fas fa-comment-dots block-icon"></i>
          <h2>Feedback</h2>
        </button>

        <button
          className="block logout"
          onClick={() => navigate('/')}
        >
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

export default ReceiverHome;
