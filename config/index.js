require('./database')

const express = require('express')
const app = express()

app.use(express.json())
app.use(require('../routes/routes'))

module.exports = app
