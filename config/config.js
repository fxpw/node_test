require('dotenv').config(); // подключаем dotenv для использования переменных окружения
console.log(process.env.DB_USERNAME);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_DATABASE);
console.log(3306);
console.log(process.env.DB_CONTAINER_NAME);
console.log(process.env.DB_CONNECTION);
module.exports = {
	development: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: process.env.DB_CONTAINER_NAME,
		port: 3306,
		dialect: process.env.DB_CONNECTION
	},
	test: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: process.env.DB_CONTAINER_NAME,
		port: 3306,
		dialect: process.env.DB_CONNECTION
	},
	production: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: process.env.DB_CONTAINER_NAME,
		port: 3306,
		dialect: process.env.DB_CONNECTION
	}
};