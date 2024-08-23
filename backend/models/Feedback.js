// models/Feedback.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Feedback = sequelize.define('Feedback', {
    feedback_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    session_id: {
        type: DataTypes.INTEGER,
    },
    student_id: {
        type: DataTypes.INTEGER,
    },
    tutor_id: {
        type: DataTypes.INTEGER,
    },
    rating: {
        type: DataTypes.TINYINT,
    },
    comments: {
        type: DataTypes.TEXT,
    },
    feedback_date: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = Feedback;
