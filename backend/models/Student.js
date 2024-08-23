// models/Student.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Student = sequelize.define('Student', {
    student_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    grade_level: {
        type: DataTypes.STRING,
    },
    parent_contact_info: {
        type: DataTypes.TEXT,
    },
});

module.exports = Student;
