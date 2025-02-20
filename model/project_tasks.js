// model/projectTask
const { DataTypes } = require('sequelize');

const sequelize = require('../config/database'); //раскоментить для разработки
// const path = require('path');
// const appRoot = require('app-root-path');
// const sequelize = require(path.join(appRoot.path, 'config/database.js'));  //раскоментить для прода

const project_tasks = sequelize.define('project_tasks', {
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
	project_id: {
		type: DataTypes.INTEGER,
		allowNull: true
	},
	parent_task_id: {
		type: DataTypes.INTEGER,
		allowNull: true,
		defaultValue: null,
	},
}, {
	paranoid: true,
});

module.exports = project_tasks;
