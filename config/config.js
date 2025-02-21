require('dotenv').config(); // подключаем dotenv для использования переменных окружения
console.log(process.env.DB_USERNAME);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_DATABASE);
console.log(process.env.DB_PORT);
console.log(process.env.DB_CONTAINER_NAME);
console.log(process.env.DB_CONNECTION);
module.exports = {
	development: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: process.env.DB_CONTAINER_NAME,
		port: process.env.DB_PORT,
		dialect: process.env.DB_CONNECTION,
		define: {
			"createdAt": "createdAt",
			"updatedAt": "updatedAt",
			"createdBy": "createdBy",
			"updatedBy": "updatedBy"
		}
	},
	test: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: process.env.DB_CONTAINER_NAME,
		port: process.env.DB_PORT,
		dialect: process.env.DB_CONNECTION,
		define: {
			"createdAt": "createdAt",
			"updatedAt": "updatedAt",
			"createdBy": "createdBy",
			"updatedBy": "updatedBy"
		}
	},
	production: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: process.env.DB_CONTAINER_NAME,
		port: process.env.DB_PORT,
		dialect: process.env.DB_CONNECTION,
		define: {
			"createdAt": "createdAt",
			"updatedAt": "updatedAt",
			"createdBy": "createdBy",
			"updatedBy": "updatedBy"
		}
	}
};