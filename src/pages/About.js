import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>
        Welcome to <strong>Excess Food Donation Plan</strong>! Our mission is to bridge the gap between 
        surplus food and those in need. We connect donors such as restaurants, hotels, 
        and event organizers with NGOs, old age homes, and orphanages to ensure 
        no food goes to waste.
      </p>
      <p>
        By using our platform, donors can post details about excess food, and receivers 
        can easily find and collect the food they need. Together, we are creating a 
        sustainable food system, reducing food waste, and fighting hunger.
      </p>
      <h3>Our Vision</h3>
      <p>
        To create a world where no one sleeps hungry, and every excess meal finds its way 
        to a needy person.
      </p>
      <h3>Our Impact</h3>
      <ul>
        <li>Thousands of meals saved from wastage.</li>
        <li>Dozens of organizations and donors actively involved.</li>
        <li>Positive environmental and social impact.</li>
      </ul>
    </div>
  );
};

export default About;
