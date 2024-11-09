// controllers/ProjectTaskController.js
const projectTaskService = require('../services/ProjectTaskService');

const ProjectTaskController = {
	create: async (req, res) => {
		try {
			const newTask = await projectTaskService.createTask(req.body);
			res.status(201).json(newTask);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	getAll: async (req, res) => {
		try {
			const tasks = await projectTaskService.getAllTasks();
			res.json(tasks);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	getById: async (req, res) => {
		try {
			const task = await projectTaskService.getTaskById(req.params.id);
			if (!task) {
				return res.status(404).json({ error: 'Задача не найдена' });
			}
			res.json(task);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	update: async (req, res) => {
		try {
			const updatedTask = await projectTaskService.updateTask(req.params.id, req.body);
			if (!updatedTask) {
				return res.status(404).json({ error: 'Задача не найдена или не обновлена' });
			}
			res.json(updatedTask);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	delete: async (req, res) => {
		try {
			const success = await projectTaskService.deleteTask(req.params.id);
			if (!success) {
				return res.status(404).json({ error: 'Задача не найдена или уже удалена' });
			}
			res.status(204).send(); // 204 No Content
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},
	getSubtasks: async (req, res) => {
		try {
			const subtasks = await projectTaskService.getSubtasksByParentId(req.params.parentId);
			res.json(subtasks);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},
	createSubtask: async (req, res) => {
		try {
			const newSubtask = await projectTaskService.createSubtask(req.params.parentId, req.body);
			res.status(201).json(newSubtask);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},
	hasSubtasks: async (req, res) => {
		try {
			const taskId = req.params.id;
			const hasSubtasks = await projectTaskService.hasSubtasks(taskId);
			res.json({ hasSubtasks });
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}
};

module.exports = ProjectTaskController;
