const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('elearn', 'root', 'RcaRoku34!', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;