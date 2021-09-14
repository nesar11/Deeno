const express = require('express');
const casesRoutes = express.Router();
const cases = require('../controllers/casesController');
// const case = require('../controllers/casesController');
const auth = require('../middleWares/guard');

casesRoutes.post('/add', auth.authMiddleware, cases.addCase)
casesRoutes.get('/', auth.authMiddleware, cases.getAllCase)
casesRoutes.get('/edit/:id', auth.authMiddleware, cases.getEditCase)
casesRoutes.post('/update/:id', auth.authMiddleware, cases.updateCoin)
casesRoutes.get('/delete/:id', auth.authMiddleware, cases.deleteCoin)
casesRoutes.get('/daily/:status', auth.authMiddleware, cases.dailySatus)
// casesRoutes.get('/search', auth.authMiddleware, coin.searchCoin)


module.exports = casesRoutes;