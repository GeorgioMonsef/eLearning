// models/Promotion.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Promotion = sequelize.define('Promotion', {
    promotion_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    discount_percentage: {
        type: DataTypes.DECIMAL(5, 2),
    },
    valid_from: {
        type: DataTypes.DATE,
    },
    valid_until: {
        type: DataTypes.DATE,
    },
    status: {
        type: DataTypes.ENUM('Active', 'Expired'),
    },
});

module.exports = Promotion;
