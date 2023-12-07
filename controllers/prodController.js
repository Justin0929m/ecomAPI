const Products = require('../models/prodModel')

const fetchProducts = {
    fetchProducts: async function(req, res){
        try {
            const products = await Products.fetchProducts.fetchProducts();

            if(!products){
                res.status(404).json({
                    msg: 'Products not found'
                })
            }

            return res.json({
                products
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({
              msg: "Internal Server Error",
            });
        }
    }
}

const fetchProduct = {
    fetchProduct: async function(req, res){
        try {
            const { prodID } = req.params;
            const product = await Products.fetchProduct.fetchProduct(prodID)

            if(!product){
                res.status(404).json({
                    msg: 'Product not found'
                })
            }

            return res.json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({
              msg: "Internal Server Error",
            }); 
        }
    }
}

module.exports = {fetchProducts, fetchProduct}