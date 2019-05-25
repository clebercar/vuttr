const ToolSchema = new db.Schema({
  title: String,
  link: String,
  description: String,
  tags: [String]
}, {
  timestamps: {
    createdAt: 'created_at'
  }
})

module.exports = db.model('Tool', ToolSchema)
