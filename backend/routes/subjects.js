const express = require('express');
const router = express.Router();
const Subject = require('../models/Subject');

// Create a new subject
router.post('/', async (req, res) => {
    try {
        const subject = await Subject.create(req.body);
        res.status(201).json(subject);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all subjects
router.get('/', async (req, res) => {
    try {
        const subjects = await Subject.findAll();
        res.status(200).json(subjects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single subject by ID
router.get('/:id', async (req, res) => {
    try {
        const subject = await Subject.findByPk(req.params.id);
        if (subject) {
            res.status(200).json(subject);
        } else {
            res.status(404).json({ message: 'Subject not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a subject by ID
router.put('/:id', async (req, res) => {
    try {
        const subject = await Subject.findByPk(req.params.id);
        if (subject) {
            await subject.update(req.body);
            res.status(200).json(subject);
        } else {
            res.status(404).json({ message: 'Subject not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a subject by ID
router.delete('/:id', async (req, res) => {
    try {
        const subject = await Subject.findByPk(req.params.id);
        if (subject) {
            await subject.destroy();
            res.status(204).json({ message: 'Subject deleted' });
        } else {
            res.status(404).json({ message: 'Subject not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
