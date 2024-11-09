// controllers/ProjectController.js
const projectService = require('../services/ProjectService');
const path = require('path');
const appRoot = require('app-root-path');
// const projectService = require(path.join(appRoot.path, 'services/ProjectService'));
const ProjectController = {
    create: async (req, res) => {
        try {
            const newProject = await projectService.createProject(req.body);
            res.status(201).json(newProject);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAll: async (req, res) => {
        try {
            const projects = await projectService.getAllProjects();
            res.json(projects);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getById: async (req, res) => {
        try {
            const project = await projectService.getProjectById(req.params.id);
            if (!project) {
                return res.status(404).json({ error: 'Проект не найден' });
            }
            res.json(project);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const updatedProject = await projectService.updateProject(req.params.id, req.body);
            if (!updatedProject) {
                return res.status(404).json({ error: 'Проект не найден или не обновлен' });
            }
            res.json(updatedProject);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const success = await projectService.deleteProject(req.params.id);
            if (!success) {
                return res.status(404).json({ error: 'Проект не найден или уже удален' });
            }
            res.status(204).send(); // 204 No Content
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = ProjectController;
