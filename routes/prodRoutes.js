const express = require('express')
const router = express.Router()
const prodController = require('../controllers/prodController')

router.get('/products', prodController.fetchProducts.fetchProducts)
router.get('/products/:prodID', prodController.fetchProduct.fetchProduct)

module.exports = router