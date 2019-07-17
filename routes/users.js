const express = require("express")
const router = express.Router()

// Register
router.get('/register', (req, res, next) => {
    res.send('REGISTER')
})

// authenticate
router.post('/authenticate', (req, res, next) => {
    res.send('authenticate')
})

// profile
router.get('/profile', (req, res, next) => {
    res.send('profile')
})

// validate
router.get('/validate', (req, res, next) => {
    res.send('validate')
})

module.exports = router;