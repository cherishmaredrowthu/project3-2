import express from "express";
import dotenv from "dotenv";
import Food from "../models/Food.js";
import Receiver from "../models/Receiver.js";
import nodemailer from "nodemailer";

dotenv.config();
const router = express.Router();

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Function to determine location priority
function getPriorityValue(priority) {
    return priority === "City" ? 1 : priority === "District" ? 2 : 3;
}

// Function to calculate distance
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// POST FOOD DONATION
router.post("/post-food", async (req, res) => {
    try {
        const newFood = new Food(req.body);
        await newFood.save();

        const receivers = await Receiver.find({});
        const matchedReceivers = receivers.filter(receiver => {
            const receiverPriority = getPriorityValue(receiver.locationPriority);
            const distance = receiver.location.latitude && receiver.location.longitude
                ? calculateDistance(newFood.location.latitude, newFood.location.longitude,
                                    receiver.location.latitude, receiver.location.longitude)
                : 0;

            return receiverPriority <= 3 &&
                   distance <= receiver.kmRange &&
                   receiver.beneficiaries <= 2 * newFood.foodItems.reduce((sum, item) => sum + item.quantity, 0);
        });

        console.log("Valid Receivers List:", matchedReceivers);

        if (matchedReceivers.length === 0) {
            return res.status(200).json({ message: "No matching receivers found." });
        }

        // Send email to receivers
        for (const receiver of matchedReceivers) {
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: receiver.email,
                subject: "🍽️ New Food Donation Available!",
                html: `<p>A new food donation is available near you.</p>
                       <p><strong>Donor Name:</strong> ${newFood.contact.name}</p>
                       <p><strong>Food Items:</strong></p>
                       <ul>
                       ${newFood.foodItems.map(item => `<li>${item.name} - ${item.quantity}, Expiry: ${item.expiry}</li>`).join("")}
                       </ul>
                       <p><strong>Location:</strong> ${newFood.location.address}</p>
                       <p><strong>Contact:</strong> ${newFood.contact.phone}</p>
                       <a href="http://localhost:5000/api/food/accept/${newFood._id}/${receiver._id}">✅ Accept</a>
                       <a href="http://localhost:5000/api/food/decline/${newFood._id}/${receiver._id}">❌ Decline</a>`
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error("Error sending email:", error);
                } else {
                    console.log(`Email sent to ${receiver.email}:`, info.response);
                }
            });
        }

        res.status(201).json({ message: "Food posted and notifications sent!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ACCEPT DONATION
router.get("/accept/:foodId/:receiverId", async (req, res) => {
    const { foodId, receiverId } = req.params;
    await Food.findByIdAndUpdate(foodId, { acceptedBy: receiverId });
    res.send("<h1>Thank you! Your acceptance has beean recorded.</h1>");
});

// DECLINE DONATION
router.get("/decline/:foodId/:receiverId", (req, res) => {
    res.send("<h1>You have declined the donation.</h1>");
});

export default router;
