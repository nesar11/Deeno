const express = require('express');
const coinRouter = express.Router();
const coin = require('../controllers/adunitController');
const auth = require('../middleWares/guard');

coinRouter.post('/add', auth.authMiddleware, coin.addCoin)
coinRouter.get('/', auth.authMiddleware, coin.getAllCoin)
coinRouter.get('/edit/:id', auth.authMiddleware, coin.getEditCoin)
coinRouter.post('/update/:id', auth.authMiddleware, coin.updateCoin)
coinRouter.get('/delete/:id', auth.authMiddleware, coin.deleteCoin)

module.exports = coinRouter;
