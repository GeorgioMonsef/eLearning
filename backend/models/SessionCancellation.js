// models/SessionCancellation.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const SessionCancellation = sequelize.define('SessionCancellation', {
    cancellation_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    session_id: {
        type: DataTypes.INTEGER,
    },
    reason: {
        type: DataTypes.TEXT,
    },
    cancelled_by: {
        type: DataTypes.ENUM('Tutor', 'Student', 'Admin'),
    },
    cancellation_date: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = SessionCancellation;
