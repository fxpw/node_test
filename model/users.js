const { DataTypes } = require('sequelize');



const sequelize = require('../config/database'); //раскоментить для разработки
// const path = require('path');
// const appRoot = require('app-root-path');
// const sequelize = require(path.join(appRoot.path, 'config/database.js'));  //раскоментить для прода

const Users = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    subscriptionEnd: {
        type: DataTypes.DATE,
        allowNull: true // Это поле может быть null, если подписка не установлена
    },
    extraInfo: {
        type: DataTypes.JSON,
        allowNull: true
    }
}, {
});

module.exports = Users;
