'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('projects', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			order: {
				type: Sequelize.INTEGER,
				allowNull: true
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.NOW
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.NOW
			},
			deletedAt: {
				type: Sequelize.DATE,
				allowNull: true,
				defaultValue: null
			},
		}, {
			paranoid: true,
		});
		await queryInterface.createTable('project_tasks', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			order: {
				type: Sequelize.INTEGER,
				allowNull: true
			},
			project_id: {
				type: Sequelize.INTEGER,
				allowNull: true
			},
			parent_task_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
				defaultValue: null,
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.NOW
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.NOW
			},
			deletedAt: {
				type: Sequelize.DATE,
				allowNull: true,
				defaultValue: null
			},
		}, {
			paranoid: true,
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('projects');
		await queryInterface.dropTable('project_tasks');
	}
};
