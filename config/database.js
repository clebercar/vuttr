const mongoose = require('mongoose')
const uri = require('./database-uri')

global.db = (global.db ? global.db : mongoose)

db.connect(uri, {
  useNewUrlParser: true
}).then(result => {
  console.log('MongoDB Conectado', uri)
}).catch(error => {
  console.log(error)
})

module.exports = uri
