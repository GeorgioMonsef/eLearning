const express = require('express');
const router = express.Router();
const AdminAction = require('../models/AdminAction');

// Create a new admin action
router.post('/', async (req, res) => {
    try {
        const adminAction = await AdminAction.create(req.body);
        res.status(201).json(adminAction);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all admin actions
router.get('/', async (req, res) => {
    try {
        const adminActions = await AdminAction.findAll();
        res.status(200).json(adminActions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single admin action by ID
router.get('/:id', async (req, res) => {
    try {
        const adminAction = await AdminAction.findByPk(req.params.id);
        if (adminAction) {
            res.status(200).json(adminAction);
        } else {
            res.status(404).json({ message: 'Admin action not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update an admin action by ID
router.put('/:id', async (req, res) => {
    try {
        const adminAction = await AdminAction.findByPk(req.params.id);
        if (adminAction) {
            await adminAction.update(req.body);
            res.status(200).json(adminAction);
        } else {
            res.status(404).json({ message: 'Admin action not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete an admin action by ID
router.delete('/:id', async (req, res) => {
    try {
        const adminAction = await AdminAction.findByPk(req.params.id);
        if (adminAction) {
            await adminAction.destroy();
            res.status(204).json({ message: 'Admin action deleted' });
        } else {
            res.status(404).json({ message: 'Admin action not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
