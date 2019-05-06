const mongoose = require('mongoose')
const models = require('../../models')

module.exports = () => {
  return Promise.all(
    models.collections.map(key => {
      return mongoose.connection.db.dropCollection(key)
    })
  )
}
