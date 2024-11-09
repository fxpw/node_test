// routes/ProjectRoutes.js
const express = require('express');

const ProjectController = require('../controllers/ProjectController');
// const path = require('path');
// const appRoot = require('app-root-path');
// const ProjectController = require(path.join(appRoot.path, 'controllers/ProjectController'));
const router = express.Router();

router.post('/', ProjectController.create);
router.get('/', ProjectController.getAll);
router.get('/:id', ProjectController.getById);
router.put('/:id', ProjectController.update);
router.delete('/:id', ProjectController.delete);

module.exports = router;
