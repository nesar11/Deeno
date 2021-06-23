const express = require('express');
const app = express();
const businessRoutes = express.Router();
const business = require('../controllers/bussinessController');
const auth = require('../middleWares/guard')
// Require Business model in our routes module
businessRoutes.post('/add', auth.authMiddleware, business.addBusiness )
businessRoutes.get('/', auth.authMiddleware, business.allBusiness )
businessRoutes.get('/edit/:id', auth.authMiddleware, business.editBusiness )
businessRoutes.post('/update/:id', auth.authMiddleware, business.updateBusiness )
businessRoutes.get('/delete/:id', auth.authMiddleware, business.deleteBusiness )

module.exports = businessRoutes;
