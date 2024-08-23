const express = require('express');
const router = express.Router();
const Attachment = require('../models/Attachment');

// Create a new attachment
router.post('/', async (req, res) => {
    try {
        const attachment = await Attachment.create(req.body);
        res.status(201).json(attachment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all attachments
router.get('/', async (req, res) => {
    try {
        const attachments = await Attachment.findAll();
        res.status(200).json(attachments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single attachment by ID
router.get('/:id', async (req, res) => {
    try {
        const attachment = await Attachment.findByPk(req.params.id);
        if (attachment) {
            res.status(200).json(attachment);
        } else {
            res.status(404).json({ message: 'Attachment not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update an attachment by ID
router.put('/:id', async (req, res) => {
    try {
        const attachment = await Attachment.findByPk(req.params.id);
        if (attachment) {
            await attachment.update(req.body);
            res.status(200).json(attachment);
        } else {
            res.status(404).json({ message: 'Attachment not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete an attachment by ID
router.delete('/:id', async (req, res) => {
    try {
        const attachment = await Attachment.findByPk(req.params.id);
        if (attachment) {
            await attachment.destroy();
            res.status(204).json({ message: 'Attachment deleted' });
        } else {
            res.status(404).json({ message: 'Attachment not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
