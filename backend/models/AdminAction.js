// models/AdminAction.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const AdminAction = sequelize.define('AdminAction', {
    action_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    admin_id: {
        type: DataTypes.INTEGER,
    },
    action_type: {
        type: DataTypes.ENUM('Account Ban', 'Payment Reversal', 'Other'),
    },
    description: {
        type: DataTypes.TEXT,
    },
    action_date: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = AdminAction;
