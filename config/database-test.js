const mongoose = require('mongoose')

if (process.env.NODE_ENV === 'test') {
  mongoose.connection.db.dropDatabase((err, result) => {
    console.log(err.length ? err : result)
  })
}

module.exports = mongoose
