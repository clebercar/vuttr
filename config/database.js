require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

const mongoose = require('mongoose')

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST

const uri = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}`
console.log(uri)
mongoose.connect(uri, {
  useNewUrlParser: true
})

module.exports = mongoose
