const express = require('express')
const consign = require('consign')
const app = express()

require('./database')

app.use(express.json())

consign()
  .include('routes')
  .into(app)

module.exports = app
