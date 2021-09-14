const express = require('express');
var Coin = require('../models/Coin');
const app = express();
var coinRoutes = express.Router();
const coin = require('../controllers/coinController');
const auth = require('../middleWares/guard');

coinRoutes.post('/add', auth.authMiddleware, coin.addCoin)
coinRoutes.get('/', auth.authMiddleware, coin.getAllCoin)
coinRoutes.get('/edit/:id', auth.authMiddleware, coin.getEditCoin)
coinRoutes.post('/update/:id', auth.authMiddleware, coin.updateCoin)
coinRoutes.get('/delete/:id', auth.authMiddleware, coin.deleteCoin)
coinRoutes.get('/search', auth.authMiddleware, coin.searchCoin)


module.exports = coinRoutes;