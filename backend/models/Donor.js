import mongoose from "mongoose";

const DonorSchema = new mongoose.Schema({
    organizationType: String,
    name: String,
    url: String,
    state: String,
    city: String,
    district: String,
    street: String,
    pinCode: String,
    phoneNumber: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});

export default mongoose.model("Donor", DonorSchema);
