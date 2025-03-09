// backend/routes/donorRoutes.js
import express from 'express';
import Donor from '../models/Donor.js';

const router = express.Router();

// Donor Signup Route
router.post('/donor-signup', async (req, res) => {
    try {
        const { organizationType, name, url, state, city, district, street, pinCode, phoneNumber, email, password } = req.body;

        // Check if donor already exists
        const existingDonor = await Donor.findOne({ email });
        if (existingDonor) {
            return res.status(400).json({ message: 'Donor already exists with this email.' });
        }

        // Create a new donor
        const newDonor = new Donor({
            organizationType,
            name,
            url,
            state,
            city,
            district,
            street,
            pinCode,
            phoneNumber,
            email,
            password,
        });

        await newDonor.save();
        res.status(201).json({ message: 'Donor registered successfully!' });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Server error. Please try again.' });
    }
});

export default router;
