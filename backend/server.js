// Use import syntax instead of require
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import donorRoutes from './routes/donorRoutes.js';

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
// server.js
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.post('/donor-signup', (req, res) => {
    // Example response for testing
    console.log('Received signup request:', req.body);
    res.status(200).json({ message: 'Signup successful!' });
});

// Sample route to test the server
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// MongoDB connection
const MONGO_URL = 'mongodb://127.0.0.1:27017/demo';
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

app.use('/', donorRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


