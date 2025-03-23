import express from "express";
import Food from "../models/Food.js"; // Ensure the file extension is included

const router = express.Router();

// POST: Add a new food post
router.post("/post-food", async (req, res) => {
    try {
        const newFoodPost = new FoodPost(req.body);
        await newFoodPost.save();
        res.status(201).json({ message: "Food post created successfully!", foodPost: newFoodPost });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET: Fetch all food posts
router.get("/get-food-posts", async (req, res) => {
    try {
        const foodPosts = await FoodPost.find().sort({ createdAt: -1 });
        res.status(200).json(foodPosts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET: Fetch a single food post by ID
router.get("/get-food/:id", async (req, res) => {
    try {
        const foodPost = await FoodPost.findById(req.params.id);
        if (!foodPost) {
            return res.status(404).json({ message: "Food post not found" });
        }
        res.status(200).json(foodPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE: Remove a food post by ID
router.delete("/delete-food/:id", async (req, res) => {
    try {
        const deletedPost = await FoodPost.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: "Food post not found" });
        }
        res.status(200).json({ message: "Food post deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router; // Changed from module.exports
