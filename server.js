const app = require('./config')
const http =  require('http')

http.createServer(app).listen("3000", function(){
    console.log('Server started on port 3000');
});