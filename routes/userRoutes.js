const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const { verifyToken } = require('../middleware/AuthenticateUser')

// Create user
router.post('/register', userController.register.register)
router.post('/login', userController.login.login)
router.get('/test', verifyToken, (req, res) =>{
    res.send('Hello World!')
})
router.get('/logout', userController.logout.logout)

module.exports = router