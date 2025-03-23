import mongoose from 'mongoose';

const receiverSchema = new mongoose.Schema({
    orgName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contactNumber: { type: String, required: true },
    website: { type: String },
    locationPriority: { type: String, required: true },
    kmRange: { type: Number, required: true },
    orgType: { type: String, required: true },
    beneficiaries: { type: Number, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true }
});

export default mongoose.model('Receiver', receiverSchema);
