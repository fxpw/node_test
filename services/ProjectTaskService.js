// services/ProjectTaskService.js
const ProjectTask = require('../model/project_tasks');

class ProjectTaskService {
	async createTask(taskData) {
		const newTask = await ProjectTask.create(taskData);
		return newTask;
	}

	async getAllTasks() {
		const tasks = await ProjectTask.findAll();
		return tasks;
	}

	async getTaskById(id) {
		const task = await ProjectTask.findByPk(id);
		return task;
	}

	async updateTask(id, updatedData) {
		const [updatedRowCount, [updatedTask]] = await ProjectTask.update(updatedData, {
			where: { id },
			returning: true,
		});
		return updatedRowCount ? updatedTask : null;
	}

	async deleteTask(id) {
		const deletedCount = await ProjectTask.destroy({ where: { id } });
		return deletedCount > 0;
	}

	async getSubtasksByParentId(parentId) {
		const subtasks = await ProjectTask.findAll({
			where: { parent_task_id: parentId },
		});
		return subtasks;
	}
	async createSubtask(parentId, subtaskData) {
		subtaskData.parent_task_id = parentId; // Устанавливаем родительскую задачу
		const newSubtask = await ProjectTask.create(subtaskData);
		return newSubtask;
	}

	async hasSubtasks(taskId) {
		const subtasksCount = await ProjectTask.count({
			where: { parent_task_id: taskId }
		});
		return subtasksCount > 0; // Возвращает true, если есть подзадачи
	}
}

module.exports = new ProjectTaskService();
