const db = require('../config')

const addToCart = {
  addToCart: async function (userID, prodID) {
    try {
      const query = `INSERT INTO cart (userID, prodID, title, price, img, firstName)
                     SELECT u.userID, p.prodID, p.title, p.price, p.img, u.firstName
                     FROM users u
                     CROSS JOIN products p
                     WHERE u.userID = ? AND p.prodID = ?;`;
      const [results] = await db.query(query, [userID, prodID]);

      return results[0]
    } catch (error) {
        console.error(error);
        res.status(500).json({
          msg: "Internal Server Error",
        });
    }
  },
};

const fetchCart = {
    fetchCart: async function(userID){
        try {
            const query = 'SELECT orderID, userID, prodID, img, price, title, firstName FROM cart WHERE userID = ?'
            const [results] = await db.query(query, [userID])

            return results
        } catch (error) {
            console.error(error);
            res.status(500).json({
              msg: "Internal Server Error",
            });
        }
    }
}

const deleteProduct = {
  deleteProduct: async function (orderID) {
    try {
      const query = "DELETE FROM cart WHERE orderID = ?";
      const [result] = await db.query(query, [orderID]);

      return result;
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: "Internal Server Error",
      });
    }
  },
};

module.exports = {
  addToCart,
  fetchCart,
  deleteProduct
};