// models/TutoringSession.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const TutoringSession = sequelize.define('TutoringSession', {
    session_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    tutor_id: {
        type: DataTypes.INTEGER,
    },
    student_id: {
        type: DataTypes.INTEGER,
    },
    subject_id: {
        type: DataTypes.INTEGER,
    },
    session_date: {
        type: DataTypes.DATE,
    },
    start_time: {
        type: DataTypes.TIME,
    },
    end_time: {
        type: DataTypes.TIME,
    },
    session_status: {
        type: DataTypes.ENUM('Completed', 'Cancelled', 'Scheduled'),
    },
});

module.exports = TutoringSession;
