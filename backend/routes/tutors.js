const express = require('express');
const router = express.Router();
const Tutor = require('../models/Tutor');

// Create a new tutor
router.post('/', async (req, res) => {
    try {
        const tutor = await Tutor.create(req.body);
        res.status(201).json(tutor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all tutors
router.get('/', async (req, res) => {
    try {
        const tutors = await Tutor.findAll();
        res.status(200).json(tutors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single tutor by ID
router.get('/:id', async (req, res) => {
    try {
        const tutor = await Tutor.findByPk(req.params.id);
        if (tutor) {
            res.status(200).json(tutor);
        } else {
            res.status(404).json({ message: 'Tutor not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a tutor by ID
router.put('/:id', async (req, res) => {
    try {
        const tutor = await Tutor.findByPk(req.params.id);
        if (tutor) {
            await tutor.update(req.body);
            res.status(200).json(tutor);
        } else {
            res.status(404).json({ message: 'Tutor not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a tutor by ID
router.delete('/:id', async (req, res) => {
    try {
        const tutor = await Tutor.findByPk(req.params.id);
        if (tutor) {
            await tutor.destroy();
            res.status(204).json({ message: 'Tutor deleted' });
        } else {
            res.status(404).json({ message: 'Tutor not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
