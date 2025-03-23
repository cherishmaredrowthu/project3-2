import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import donorRoutes from './routes/donorRoutes.js';
import receiverRoutes from './routes/receiverRoutes.js';
import foodRoutes from './routes/foodRoutes.js'; // Added food donation routes
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const app = express();
const PORT = 5000;

// Ensure uploads directory exists
const uploadsDir = path.join("uploads");
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
    console.log("Uploads directory created.");
}

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Allow frontend requests
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// Serve uploaded images statically
app.use('/uploads', express.static('uploads'));

// Test route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// MongoDB Connection
const MONGO_URL = 'mongodb://127.0.0.1:27017/demo';
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

// API Routes
app.use('/api', donorRoutes);
app.use('/api', receiverRoutes);
app.use('/api', foodRoutes); // Added food routes

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
