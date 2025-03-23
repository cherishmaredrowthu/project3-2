import express from 'express';
import Donor from '../models/Donor.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Donor Signup Route
router.post('/donor-signup', async (req, res) => {
    try {
        const { organizationType, name, url, state, city, district, street, pinCode, phoneNumber, email, password } = req.body;

        // Check if donor already exists
        const existingDonor = await Donor.findOne({ email });
        if (existingDonor) {
            console.log("Donor already exists:", existingDonor.email);
            return res.status(400).json({ message: 'Donor already exists with this email.' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new donor
        const newDonor = new Donor({
            organizationType, name, url, state, city, district, street, pinCode, phoneNumber, email,
            password: hashedPassword, // Store hashed password
        });

        console.log("New Donor Object:", newDonor);

        // Save donor and send response
        await newDonor.save();
        console.log("Donor saved successfully!");
        return res.status(201).json({ message: 'Donor registered successfully!' });

    } catch (error) {
        console.error('Error during signup:', error);
        return res.status(500).json({ message: 'Server error. Please try again.', error: error.message });
    }
});

// Donor Login Route
router.post("/donor-login", async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log("Login request received for email:", email);

        // Check if donor exists
        const donor = await Donor.findOne({ email });
        if (!donor) {
            console.log("Donor not found for email:", email);
            return res.status(400).json({ message: "Invalid email or password" });
        }

        console.log("Donor found:", donor.email);

        // Compare passwords
        const isMatch = await bcrypt.compare(password, donor.password);
        if (!isMatch) {
            console.log("Password mismatch for email:", email);
            return res.status(400).json({ message: "Invalid email or password" });
        }

        console.log("Password matched. Generating token...");

        // Generate JWT token
        const token = jwt.sign({ id: donor._id }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: "1h" });

        console.log("Token generated successfully for email:", email);
        return res.json({ message: "Login successful", token });

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Server error. Please try again.", error: error.message });
    }
});

export default router;
