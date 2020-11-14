const mongoose = require('mongoose')
const uri = require('./config/database')

beforeEach(function (done) {
  function clearDB () {
    for (var i in mongoose.connection.collections) {
      mongoose.connection.collections[i].deleteOne(function (err) {
        if (err) console.log('Could not delete collection')
      })
    }
    return done()
  }

  if (mongoose.connection.readyState === 0) {
    mongoose.connect(
      uri,
      function (err) {
        if (err) throw err

        return clearDB()
      }
    )
  } else {
    return clearDB()
  }
})

afterAll(done => {
  mongoose.disconnect()
  return done()
})
