require('dotenv').config()
const mongoose = require('mongoose')

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS

const uri = `mongodb://${DB_USER}:${DB_PASS}@ds147446.mlab.com:47446/vuttr`

mongoose.connect(uri, {
  useNewUrlParser: true
})

module.exports = mongoose
