const app = require('./config')
const server = require('http').Server(app)

server.listen(3000, () => console.log('Server started on port 3000'))
