import express from 'express';
import bcrypt from 'bcryptjs'; // Using bcryptjs for consistency
import jwt from 'jsonwebtoken';
import Receiver from '../models/Receiver.js';

const router = express.Router();

// Receiver Signup Route
router.post('/receiver-signup', async (req, res) => {
    try {
        const { orgName, email, password, contactNumber, address, website, locationPriority, kmRange, orgType, beneficiaries, city, state, pincode } = req.body;

        // Check if receiver already exists
        const existingReceiver = await Receiver.findOne({ email });
        if (existingReceiver) {
            return res.status(409).json({ message: 'Receiver already exists with this email.' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new receiver
        const newReceiver = new Receiver({
            orgName,
            email,
            password: hashedPassword, // Store the hashed password
            contactNumber,
            address,
            website,
            locationPriority,
            kmRange: Number(kmRange),
            orgType,
            beneficiaries: Number(beneficiaries),
            city,
            state,
            pincode
        });

        // Save the new receiver
        await newReceiver.save();
        console.log("Receiver saved successfully!");
        res.status(201).json({ message: 'Receiver registered successfully!' });

    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Server error. Please try again.', error: error.message });
    }
});

// Receiver Login Route
router.post('/receiver-login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if receiver exists
        const receiver = await Receiver.findOne({ email });
        if (!receiver) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, receiver.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: receiver._id }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1h' });

        res.json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Server error. Please try again.', error: error.message });
    }
});

export default router;
