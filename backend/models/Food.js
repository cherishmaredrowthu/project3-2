import mongoose from "mongoose";

const FoodItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: String, required: true },
    expiry: { type: String, required: true }
});

const FoodSchema = new mongoose.Schema({
    foodItems: [FoodItemSchema],
    location: {
        address: { type: String, required: true },
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    contact: {
        name: { type: String, required: true },
        phone: { type: String, required: true, match: /^[0-9]{10}$/ }
    },
    accepting: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Receiver' }], // Array of receivers accepting
    acceptedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Receiver' } // Final accepted receiver
}, { timestamps: true });

export default mongoose.model("Food", FoodSchema);