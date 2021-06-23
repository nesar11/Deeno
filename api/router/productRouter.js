const express = require('express');
const app = express();
const productRoutes = express.Router();
const product = require('../controllers/productController')
const auth = require('../middleWares/guard')
const Product = require('../models/Product');


productRoutes.post('/add', auth.authMiddleware, product.addProject)
productRoutes.get('/', auth.authMiddleware, product.allProject)
productRoutes.get('/edit/:id', auth.authMiddleware, product.editProduct)
productRoutes.post('/update/:id', auth.authMiddleware, product.updateProject)
productRoutes.get('/delete/:id', auth.authMiddleware, product.deleteProduct)

module.exports = productRoutes;
