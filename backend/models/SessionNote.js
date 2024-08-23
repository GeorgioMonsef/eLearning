// models/SessionNote.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const SessionNote = sequelize.define('SessionNote', {
    note_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    session_id: {
        type: DataTypes.INTEGER,
    },
    tutor_id: {
        type: DataTypes.INTEGER,
    },
    notes_content: {
        type: DataTypes.TEXT,
    },
    created_at: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = SessionNote;
