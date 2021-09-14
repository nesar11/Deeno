const express = require('express');
const AdUnit = require('../models/AdUnit');
const app = express();
const adUnitRoutes = express.Router();
const adunit = require('../controllers/adunitController')
const auth = require('../middleWares/guard')

adUnitRoutes.post('/add', adunit.addAds)

// Defined get data(index or listing) route
adUnitRoutes.get('/', adunit.getAllAds)

adUnitRoutes.get('/edit/:id', adunit.getEditAds)
//  Defined update route
adUnitRoutes.post('/update/:id', adunit.updateAds)

// Defined delete | remove | destroy route
adUnitRoutes.get('/delete/:id', adunit.deleteAds)

module.exports = adUnitRoutes;
