// routes/projectTaskRoutes.js
const express = require('express');
const ProjectTaskController = require('../controllers/ProjectTaskController');
const router = express.Router();

router.post('/', ProjectTaskController.create);
router.get('/', ProjectTaskController.getAll);
router.get('/:id', ProjectTaskController.getById);
router.put('/:id', ProjectTaskController.update);
router.delete('/:id', ProjectTaskController.delete);

module.exports = router;
