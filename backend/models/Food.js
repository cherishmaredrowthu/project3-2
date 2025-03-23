import mongoose from "mongoose";



const FoodItemSchema = new mongoose.Schema({
    foodName: { type: String, required: true },
    quantity: { type: Number, required: true },
    expiryDate: { type: String, required: true },
    expiryTime: { type: String, required: true },
    foodCategory: { 
        type: String, 
        required: true, 
        enum: ["Cooked", "Raw", "Packed", "Bakery", "Dairy", "Beverages"] 
    }
});

const FoodSchema = new mongoose.Schema({
    donorId: { type: mongoose.Schema.Types.ObjectId, ref: "Donor", required: true },
    foodItems: [FoodItemSchema],
    address: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    pickupInstructions: String
}, { timestamps: true });

export default mongoose.model("Food", FoodSchema);

