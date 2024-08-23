// models/Attachment.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Attachment = sequelize.define('Attachment', {
    attachment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    session_id: {
        type: DataTypes.INTEGER,
    },
    file_path: {
        type: DataTypes.STRING,
    },
    uploaded_at: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = Attachment;
