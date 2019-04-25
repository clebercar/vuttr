module.exports = (uri) => {
    const mongoose = require('mongoose')

    mongoose.connect(`mongodb://${uri}`,{
        useNewUrlParser: true
    })
}



