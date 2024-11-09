const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env]; // подключаем конфигурацию в зависимости от окружения

const sequelize = new Sequelize(`mysql://mysql_backend_template_db:3307/mysql_backend_template_db`, config);

module.exports = sequelize;
