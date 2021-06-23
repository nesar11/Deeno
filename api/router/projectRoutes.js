const express = require('express');
const app = express();
const projectRoutes = express.Router();
const project = require('../controllers/projectController');
const auth = require('../middleWares/guard');

projectRoutes.post('/add', auth.authMiddleware, project.addProject)
projectRoutes.get('/', auth.authMiddleware, project.allProject)
projectRoutes.get('/edit/:id', auth.authMiddleware, project.editProject)
projectRoutes.post('/update/:id', auth.authMiddleware, project.updateProject)
projectRoutes.get('/delete/:id', auth.authMiddleware, project.deleteProject)

module.exports = projectRoutes;
