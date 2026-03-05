const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for registered users (replace with database in production)
const users = [];

// Registration endpoint
app.post('/reg', (req, res) => {
    const { name, email, password } = req.body;
    
    // Validate input
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    
    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return res.status(409).json({ message: 'User with this email already exists' });
    }
    
    // Save user
    const newUser = { name, email, password };
    users.push(newUser);
    
    console.log('Registered user:', newUser);
    res.status(201).json({ message: 'Registration successful!' });
});

// API endpoint (alternative)
app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return res.status(409).json({ message: 'User with this email already exists' });
    }
    
    users.push({ name, email, password });
    res.status(201).json({ message: 'Registration successful!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

