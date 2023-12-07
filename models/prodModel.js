const db = require('../config')

const fetchProducts = {
    fetchProducts: async function(){
        try {
            const query =
              "SELECT prodID, title, price, description, category, img FROM products";
            const [results] = await db.query(query);

            return results[0];
        } catch (error) {
            console.error(error);
            res.status(500).json({
              msg: "Internal Server Error",
            });
        }
    }
}

const fetchProduct = {
    fetchProduct: async function(prodID){
        try {
            const query = 'SELECT prodID, title, price, description, category, img FROM products WHERE prodID = ?'
            const [result] = await db.query(query, [prodID])

            return result[0]
        } catch (error) {
            console.error(error);
            res.status(500).json({
              msg: "Internal Server Error",
            });
        }
    }
}

module.exports = {
    fetchProducts,
    fetchProduct
}