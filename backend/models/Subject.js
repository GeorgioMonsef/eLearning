// models/Subject.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Subject = sequelize.define('Subject', {
    subject_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    subject_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Subject;
