const mongoose = require('mongoose')

const ToolSchema = new mongoose.Schema({
    title: String,
    link: String,
    description: String,
    tags: [String],
    createAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('Tool', ToolSchema)