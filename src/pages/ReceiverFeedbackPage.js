// ReceiverFeedbackPage.jsx
import React, { useState } from 'react';
import "../styles/ReceiverFeedbackPage.css";

const ReceiverFeedbackPage = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Thank You Message Sent:', { name, message });
        setName('');
        setMessage('');
        alert('Thank you message sent successfully!');
    };

    return (
        <div className="feedback-container">
            <h1><i className="fas fa-hands-helping icon"></i> Send Your Thanks</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                />

                <label htmlFor="message">Thank You Message</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your thank you message here..."
                    required
                ></textarea>

                <button type="submit"><i className="fas fa-paper-plane icon"></i> Send Message</button>
            </form>
        </div>
    );
};

export default ReceiverFeedbackPage;