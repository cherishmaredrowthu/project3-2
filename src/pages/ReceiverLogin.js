import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ReceiverLogin.css";

const ReceiverLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login successful!");
  };
  
  const navigate=useNavigate();
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Receiver Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="login-btn" onClick={() => navigate("/receiver-home")}>Login</button>
        </form>
        <p>
          Don't have an account? <a href="/receiver-signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default ReceiverLogin;
