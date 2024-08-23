// models/SessionRequest.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const SessionRequest = sequelize.define('SessionRequest', {
    request_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    student_id: {
        type: DataTypes.INTEGER,
    },
    tutor_id: {
        type: DataTypes.INTEGER,
    },
    subject_id: {
        type: DataTypes.INTEGER,
    },
    requested_date: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW,
    },
    request_status: {
        type: DataTypes.ENUM('Pending', 'Approved', 'Denied'),
    },
});

module.exports = SessionRequest;
