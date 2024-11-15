// services/ProjectService.js


const Project = require('../model/project');
// const path = require('path');
// const appRoot = require('app-root-path');
// const Project = require(path.join(appRoot.path, 'models/Project'));

class ProjectService {
	async createProject(projectData) {
		const newProject = await Project.create(projectData);
		return newProject;
	}

	async getAllProjects() {
		const projects = await Project.findAll();
		return projects;
	}

	async getProjectById(id) {
		const project = await Project.findByPk(id);
		return project;
	}

	async deleteProject(id) {
		const deletedCount = await Project.destroy({ where: { id } });
		return deletedCount > 0;
	}
	async updateProject(id, updatedData) {
		const project = await Project.findByPk(id);
		if (!project) {
			console.warn(`Проект с id ${id} не найден!`); // Логирование предупреждения
			return false; // Возвращаем null, чтобы указать на отсутствие обновления
		}
		const data = await Project.update(updatedData, {
			where: { id },
			returning: true,
		});
		return (data[1] > 0 ? true : false);
	}

}

module.exports = new ProjectService();
