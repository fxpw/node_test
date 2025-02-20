'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			username: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			subscriptionEnd: {
				type: Sequelize.DATE,
				allowNull: true
			},
			extraInfo: {
				type: Sequelize.JSON,
				allowNull: true
			},
			
		},{
			paranoid: true,
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('users');
	}
};
