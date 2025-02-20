const { DataTypes } = require('sequelize');



const sequelize = require('../config/database'); //раскоментить для разработки
// const path = require('path');
// const appRoot = require('app-root-path');
// const sequelize = require(path.join(appRoot.path, 'config/database.js'));  //раскоментить для прода

const projects = sequelize.define('projects', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	order: {
		type: DataTypes.INTEGER,
		allowNull: true
	},
}, {
	paranoid: true,
});

module.exports = projects;
