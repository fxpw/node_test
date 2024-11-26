// services/ProjectService.js

const ProjectRepository = require('../repositories/ProjectRepository.js');



class ProjectService {
	async createProject(projectData) {
		const newProject = await ProjectRepository.create(projectData);
		return newProject;
	}

	async getAllProjects() {
		const projects = await ProjectRepository.findAll();
		return projects;
	}

	async getProjectById(id) {
		const project = await ProjectRepository.findByPk(id);
		return project;
	}

	async deleteProject(id) {
		const deletedCount = await ProjectRepository.destroy({ where: { id } });
		return deletedCount > 0;
	}
	async updateProject(id, updatedData) {
		const project = await ProjectRepository.findByPk(id);
		if (!project) {
			console.warn(`Проект с id ${id} не найден!`); // Логирование предупреждения
			return false; // Возвращаем null, чтобы указать на отсутствие обновления
		}
		const data = await ProjectRepository.update(updatedData, {
			where: { id },
			returning: true,
		});
		return (data[1] > 0 ? true : false);
	}

}

module.exports = new ProjectService();
