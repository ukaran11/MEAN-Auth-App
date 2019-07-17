const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const cors = require("cors")
const passport = require("passport")
const mongoose = require("mongoose")
const config = require('./config/database')

// Connect to database
mongoose.connect(config.database)

// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database' + config.database)
})

// On Errir
mongoose.connection.on('error', (err) => {
    console.log('Database error: '+ err)
})

const app = express()

const users = require('./routes/users')

// PORT Number
const port = 3000

// CORS Middleware
app.use(cors())

// set Static folder
app.use(express.static(path.join(__dirname,'public')))

// Body parser middleware
app.use(bodyParser.json())

app.use('/users', users)

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint')
})

// Start server
app.listen(port, () => {
    console.log('Server started on port '+ port);
})