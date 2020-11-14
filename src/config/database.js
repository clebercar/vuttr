const mongoose = require('mongoose')
const uri = require('./database-uri')

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(result => {
  console.log('MongoDB Conectado', uri)
}).catch(error => {
  console.log(error)
})

module.exports = uri
