// models/Message.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Message = sequelize.define('Message', {
    message_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    sender_id: {
        type: DataTypes.INTEGER,
    },
    receiver_id: {
        type: DataTypes.INTEGER,
    },
    message_content: {
        type: DataTypes.TEXT,
    },
    sent_at: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = Message;
