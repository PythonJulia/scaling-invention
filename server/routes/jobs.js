
// server/routes/jobs.js
const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

// Route to fetch all jobs
router.get('/', jobController.getAllJobs);

// Route to create a new job
router.post('/', jobController.createJob);

module.exports = router;
