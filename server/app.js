// server/app.js
const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// A simple route for testing
app.get('/', (req, res) => {
    res.send('Welcome to the Job Portal API!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
