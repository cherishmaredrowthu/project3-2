import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/ReceiverLogin.css";

const ReceiverLogin = () => {
  const navigate = useNavigate();

  // State to store email & password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/receiver-login", { email, password });

      // Store token and receiverId in localStorage
      localStorage.setItem("receiverToken", response.data.token);
      localStorage.setItem("receiverId", response.data.receiverId);

      navigate("/receiver-home");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Receiver Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error-message" style={{ color: "red" }}>{error}</p>}
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/receiver-signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default ReceiverLogin;
