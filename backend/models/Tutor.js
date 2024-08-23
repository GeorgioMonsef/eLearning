// models/Tutor.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Tutor = sequelize.define('Tutor', {
    tutor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    bio: {
        type: DataTypes.TEXT,
    },
    subjects: {
        type: DataTypes.JSON,
    },
    qualifications: {
        type: DataTypes.TEXT,
    },
    availability: {
        type: DataTypes.JSON,
    },
});

module.exports = Tutor;
