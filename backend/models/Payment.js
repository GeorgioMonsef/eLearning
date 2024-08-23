// models/Payment.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Payment = sequelize.define('Payment', {
    payment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    session_id: {
        type: DataTypes.INTEGER,
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
    },
    payment_date: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW,
    },
    payment_method: {
        type: DataTypes.ENUM('Credit Card', 'PayPal', 'Other'),
    },
    payment_status: {
        type: DataTypes.ENUM('Paid', 'Pending', 'Failed'),
    },
});

module.exports = Payment;
