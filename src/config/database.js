const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT
const DB_NAME = process.env.DB_NAME

const uri = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('🐵 mongoDB connected 🐵', uri)
}).catch(error => {
  console.error(error)
})

module.exports = uri
