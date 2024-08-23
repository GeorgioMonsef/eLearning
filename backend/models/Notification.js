// models/Notification.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Notification = sequelize.define('Notification', {
    notification_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    notification_content: {
        type: DataTypes.TEXT,
    },
    is_read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    created_at: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = Notification;
