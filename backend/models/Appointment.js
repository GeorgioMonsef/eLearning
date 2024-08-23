// models/Appointment.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Appointment = sequelize.define('Appointment', {
    appointment_id: {
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
    appointment_date: {
        type: DataTypes.DATE,
    },
    start_time: {
        type: DataTypes.TIME,
    },
    end_time: {
        type: DataTypes.TIME,
    },
    appointment_status: {
        type: DataTypes.ENUM('Confirmed', 'Cancelled', 'Rescheduled'),
    },
});

module.exports = Appointment;
