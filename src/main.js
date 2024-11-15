const express = require('express');
const cors = require('cors');

const sequelize = require('../config/database');
const projectRoutes = require('../routes/ProjectRouter');
const projectTaskRoutes = require('../routes/ProjectTaskRouter');
const app = express();
const BACKEND_PORT = process.env.BACKEND_PORT || 5000;


app.use(cors());
app.use(express.json());
app.use('/api/projects', projectRoutes);
app.use('/api/project-tasks', projectTaskRoutes);
app.get('/api', (req, res) => {
	if (process.env.NODE_ENV === 'production') {
		// Запуск в продакшн режиме
		res.send({ message: 'Hello from the js-production-server!' });
	} else {
		// Запуск в режиме разработки
		res.send({ message: 'Hello from the js-test-server!' });
	}
});


const start = async () => {
    try {
        await sequelize.sync(); // Создание таблиц, если они еще не существуют
        if (process.env.NODE_ENV === 'production') {
			// Запуск в продакшн режиме
			app.listen(BACKEND_PORT, () => console.log('Server running in production mode.'));
		} else {
			// Запуск в режиме разработки
			app.listen(BACKEND_PORT, () => console.log('Server running in development mode.'));
		}
    } catch (error) {
        console.error('Ошибка при инициализации:', error);
    }
};
start();