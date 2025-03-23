import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";  // Import axios for API requests
import "../styles/DonorLogin.css";
import hungryChild from "./hungry_child.png";

const DonorLogin = () => {
  const navigate = useNavigate();

  // State to store email & password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:5000/api/donor-login", { email, password });
  
      // Store token and donorId in localStorage
      localStorage.setItem("donorToken", response.data.token);
      localStorage.setItem("donorId", response.data.donorId); // Add this line
  
      navigate("/donor-home");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };
  

  return (
    <div className="donor-login">
      <div className="image-section">
        <img src={hungryChild} alt="Hungry Child" />
      </div>
      <div className="login-section">
        <h2>Donor Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email" style={{ color: "black" }}>Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" style={{ color: "black" }}>Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message" style={{ color: "red" }}>{error}</p>}
          <button className="login-button" type="submit">Login</button>
        </form>
        <p className="signup-link" style={{ color: "black" }}>
          New user? <span onClick={() => navigate("/donor-signup")}>Signup here</span>
        </p>
      </div>
    </div>
  );
};

export default DonorLogin;
