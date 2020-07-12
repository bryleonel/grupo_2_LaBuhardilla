const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.products);
router.get('/detailProduct', productsController.detailProduct);
router.get('/newProduct', productsController.newProduct);

module.exports = router;