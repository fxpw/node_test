// services/ProjectTaskService.js
const ProjectTask = require('../model/projectTask');

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
}

module.exports = new ProjectTaskService();
