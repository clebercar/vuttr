const uri = require('../config/database')

jest.setTimeout(1000000)

beforeEach(function (done) {
  function clearDB () {
    for (var i in db.connection.collections) {
      db.connection.collections[i].remove(function () {})
    }
    return done()
  }

  if (db.connection.readyState === 0) {
    db.connect(
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
  db.disconnect()
  return done()
})