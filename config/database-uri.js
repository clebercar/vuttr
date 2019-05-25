require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT
const DB_NAME = process.env.DB_NAME

let uri = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

module.exports = uri
