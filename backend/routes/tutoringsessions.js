const express = require('express');
const router = express.Router();
const TutoringSession = require('../models/TutoringSession');

// Create a new tutoring session
router.post('/', async (req, res) => {
    try {
        const session = await TutoringSession.create(req.body);
        res.status(201).json(session);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all tutoring sessions
router.get('/', async (req, res) => {
    try {
        const sessions = await TutoringSession.findAll();
        res.status(200).json(sessions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single tutoring session by ID
router.get('/:id', async (req, res) => {
    try {
        const session = await TutoringSession.findByPk(req.params.id);
        if (session) {
            res.status(200).json(session);
        } else {
            res.status(404).json({ message: 'Session not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a tutoring session by ID
router.put('/:id', async (req, res) => {
    try {
        const session = await TutoringSession.findByPk(req.params.id);
        if (session) {
            await session.update(req.body);
            res.status(200).json(session);
        } else {
            res.status(404).json({ message: 'Session not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a tutoring session by ID
router.delete('/:id', async (req, res) => {
    try {
        const session = await TutoringSession.findByPk(req.params.id);
        if (session) {
            await session.destroy();
            res.status(204).json({ message: 'Session deleted' });
        } else {
            res.status(404).json({ message: 'Session not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
