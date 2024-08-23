// models/Review.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Review = sequelize.define('Review', {
    review_id: {
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
    rating: {
        type: DataTypes.TINYINT,
    },
    review_text: {
        type: DataTypes.TEXT,
    },
    review_date: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = Review;
