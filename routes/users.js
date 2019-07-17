const express = require("express")
const router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')

const User = require('../models/user')
// Register
router.post('/register', (req, res, next) => {
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

module.exports = router;