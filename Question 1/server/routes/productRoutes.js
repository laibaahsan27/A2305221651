const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/:categoryName/products', productController.getTopProducts);
router.get('/:categoryName/products/:productId', productController.getProductDetails);

module.exports = router;