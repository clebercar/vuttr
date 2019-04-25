const express = require("express")
const app = express()

require("./database")("cleber:cleber123@ds147446.mlab.com:47446/vuttr");

app.use(express.json())
app.use(require('../routes'))

module.exports = app