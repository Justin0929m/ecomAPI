const Cart = require('../models/cartModel')

const addToCart = {
    addToCart: async function(req, res){
        try {
            const { userID, prodID } = req.params
            const product = await Cart.addToCart.addToCart(userID, prodID)

            return res.json({
              msg: "Item added to the cart",
              product,
            });
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
            const { userID } = req.params
            const product = await Cart.fetchCart.fetchCart(userID);

            if(!product){
                res.json({
                    msg: 'Product not found'
                })
            }

            return res.json({
                product
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({
              msg: "Internal Server Error",
            });
        }
    }
}

const deleteProduct = {
    deleteProduct: async function(req, res){
        try {
            const { orderID } = req.params;
            const cartItem = await Cart.deleteProduct.deleteProduct(orderID);

            if(cartItem.affectedRows === 0){
                return res.json({
                    msg: 'Order not found'
                })
            }

            return res.json({msg: 'Item has been deleted'})
        } catch (error) {
            
        }
    }
}

module.exports = {
    addToCart,
    fetchProduct,
    deleteProduct
}