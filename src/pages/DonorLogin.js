import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DonorLogin.css";
import hungryChild from "./hungry_child.png";

const DonorLogin = () => {
  const navigate = useNavigate();

  

  return (
    <div className="donor-login">
      <div className="image-section">
        <img src={hungryChild} alt="Hungry Child" />
      </div>
      <div className="login-section">
        <h2>Donor Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email" style={{ color: "black" }}>Email:</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password" style={{ color: "black" }}>Password:</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" onClick={() => navigate("/donor-home")}>Login</button>
        </form>
        <p className="signup-link" style={{ color: "black" }}>
          New user? <span onClick={() => navigate("/donor-signup")}>Signup here</span>
        </p>
      </div>
    </div>
  );
};

export default DonorLogin;
