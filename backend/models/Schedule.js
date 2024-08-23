// models/Schedule.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Schedule = sequelize.define('Schedule', {
    schedule_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    tutor_id: {
        type: DataTypes.INTEGER,
    },
    day_of_week: {
        type: DataTypes.ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'),
    },
    start_time: {
        type: DataTypes.TIME,
    },
    end_time: {
        type: DataTypes.TIME,
    },
});

module.exports = Schedule;
