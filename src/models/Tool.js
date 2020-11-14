const mongoose = require('mongoose')

const ToolSchema = new mongoose.Schema({
  title: String,
  link: String,
  description: String,
  tags: [String]
}, {
  timestamps: {
    createdAt: 'created_at'
  }
})

module.exports = mongoose.model('Tool', ToolSchema)
