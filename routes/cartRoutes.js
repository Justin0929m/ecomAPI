const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.post("/cart/:userID/:prodID", cartController.addToCart.addToCart);
router.get("/cart/:userID/:prodID", cartController.fetchProduct.fetchProduct);
router.delete("/cart/:orderID", cartController.deleteProduct.deleteProduct);

module.exports = router;
