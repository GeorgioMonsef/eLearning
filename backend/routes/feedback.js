const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// Create a new feedback
router.post('/', async (req, res) => {
    try {
        const feedback = await Feedback.create(req.body);
        res.status(201).json(feedback);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all feedback
router.get('/', async (req, res) => {
    try {
        const feedbacks = await Feedback.findAll();
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single feedback by ID
router.get('/:id', async (req, res) => {
    try {
        const feedback = await Feedback.findByPk(req.params.id);
        if (feedback) {
            res.status(200).json(feedback);
        } else {
            res.status(404).json({ message: 'Feedback not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a feedback by ID
router.put('/:id', async (req, res) => {
    try {
        const feedback = await Feedback.findByPk(req.params.id);
        if (feedback) {
            await feedback.update(req.body);
            res.status(200).json(feedback);
        } else {
            res.status(404).json({ message: 'Feedback not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a feedback by ID
router.delete('/:id', async (req, res) => {
    try {
        const feedback = await Feedback.findByPk(req.params.id);
        if (feedback) {
            await feedback.destroy();
            res.status(204).json({ message: 'Feedback deleted' });
        } else {
            res.status(404).json({ message: 'Feedback not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
