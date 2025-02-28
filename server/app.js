// server/app.js
const express = require('express');
const app = express();
const jobRoutes = require('./routes/jobs');
const cors = require('cors');
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/jobs', jobRoutes);

// Test route to check if the server is running
app.get('/', (req, res) => {
    res.send('Job Portal API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
