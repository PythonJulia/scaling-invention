// server/controllers/jobController.js
const Job = require('../models/Job');

// Controller to fetch all jobs
exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.findAll();
        res.status(200).json(jobs);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching jobs' });
    }
};

// Controller to create a new job
exports.createJob = async (req, res) => {
    const { title, description, company, salary } = req.body;

    try {
        const newJob = await Job.create({ title, description, company, salary });
        res.status(201).json(newJob);
    } catch (err) {
        res.status(500).json({ error: 'Error creating job' });
    }
};
