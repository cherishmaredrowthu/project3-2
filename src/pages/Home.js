import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to the Excess Food Donation Plan</h1>
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
