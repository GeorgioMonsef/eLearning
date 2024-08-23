const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Create a new message
router.post('/', async (req, res) => {
    try {
        const message = await Message.create(req.body);
        res.status(201).json(message);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all messages
router.get('/', async (req, res) => {
    try {
        const messages = await Message.findAll();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single message by ID
router.get('/:id', async (req, res) => {
    try {
        const message = await Message.findByPk(req.params.id);
        if (message) {
            res.status(200).json(message);
        } else {
            res.status(404).json({ message: 'Message not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a message by ID
router.put('/:id', async (req, res) => {
    try {
        const message = await Message.findByPk(req.params.id);
        if (message) {
            await message.update(req.body);
            res.status(200).json(message);
        } else {
            res.status(404).json({ message: 'Message not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a message by ID
router.delete('/:id', async (req, res) => {
    try {
        const message = await Message.findByPk(req.params.id);
        if (message) {
            await message.destroy();
            res.status(204).json({ message: 'Message deleted' });
        } else {
            res.status(404).json({ message: 'Message not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
