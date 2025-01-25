import React from "react";
import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-page-container">
      <div className="contact-details">
        <h2>Contact Us</h2>
        <p>We are here to assist you! Reach out to us through the following details:</p>
        <p><strong>Address:</strong> Vijayawada, Andhra Pradesh, India</p>
        <p><strong>Phone:</strong> +91 9876543210</p>
        <p><strong>Email:</strong> support@example.com</p>
      </div>
      <div className="contact-form">
        <h3>Get in Touch</h3>
        <form>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" placeholder="Write your message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
