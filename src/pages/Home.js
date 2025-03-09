/**import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to the Excess Food Donation System</h1>
        <h3>
          Join us in reducing food waste and helping those in need.
        </h3>
        <p>Choose your role to get started!</p>
        <div className="home-buttons">
          <button onClick={() => navigate("/donor-login")} className="donor-btn">
            Donor
          </button>
          <button onClick={() => navigate("/receiver-login")} className="receiver-btn">
            Receiver
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
**/
import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleDonorClick = () => {
    navigate("/donor-login");
  };

  const handleReceiverClick = () => {
    navigate("/receiver-login");
  };

  return (
    <div className="container">
      {/* Navigation Menu */}
      {/**<div className="nav-menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#services">Services</a>
      </div>**/}

      {/* Background Image with Overlay Text */}
      <div className="background-container">
        <div className="background-overlay">
          {/* Food Donation Label */}
          <div className="food-donation-label">Food Donation</div>

          {/* Quotation */}
          <div className="quotation">
            <h3>Be a cause for someone's happiness</h3>
          </div>

          {/* Buttons */}
          <div className="buttons">
            <button className="donor-button" onClick={handleDonorClick}>
              <i className="fas fa-user-plus icon"></i> Become a Donor <br />
              Help those in need
            </button>
            <button className="receiver-button" onClick={handleReceiverClick} style={{ backgroundColor: 'white', color: 'black'}}>
              <i className="fas fa-user-shield icon"></i> Become a Receiver <br />
              Get the support you need
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Home;
