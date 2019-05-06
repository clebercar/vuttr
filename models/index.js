const fs = require('fs')
const path = require('path')
const basename = path.basename(__filename)

module.exports = {
  collections: fs.readdirSync(__dirname, function (err, files) {
    if (err) {
      return console.log('Unable to scan directory: ' + err)
    }

    return files
      .filter(file => file.indexOf('.') > -1 && file !== basename && file.slice(-3) === '.js')
  })
}
