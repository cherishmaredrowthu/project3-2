// backend/models/Donor.js
import mongoose from 'mongoose';

const donorSchema = new mongoose.Schema({
    organizationType: { type: String, required: true },
    name: { type: String, required: true },
    url: { type: String },
    state: { type: String, required: true },
    city: { type: String, required: true },
    district: { type: String, required: true },
    street: { type: String, required: true },
    pinCode: { type: Number, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

export default mongoose.model('Donor', donorSchema);
