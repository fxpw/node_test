require('dotenv').config(); // подключаем dotenv для использования переменных окружения
console.log(process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	process.env.DB_DATABASE,
	process.env.DB_PORT,
	process.env.DB_CONTAINER_NAME,
	process.env.DB_CONNECTION,
)
module.exports = {
	development: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: '127.0.0.1',
		port: process.env.DB_PORT,
		dialect: process.env.DB_CONNECTION
	},
	test: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: '127.0.0.1',
		port: process.env.DB_PORT,
		dialect: process.env.DB_CONNECTION
	},
	production: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: '127.0.0.1',
		port: process.env.DB_PORT,
		dialect: process.env.DB_CONNECTION
	}
};