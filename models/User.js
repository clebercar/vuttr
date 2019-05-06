const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  password_hash: String,
  createAt: {
    type: Date,
    default: Date.now
  }
})

User.pre('save', async function (next) {
  this.password_hash = await bcrypt.hash(this.password, 8)
  next()
})

User.post('save', () => mongoose.disconnect())

User.methods.checkPassword = (password) => {
  return bcrypt.compare(password, this.password_hash)
}

User.methods.generateToken = (candidatePassword, cb) => {
  return jwt.sign({ id: this.id }, process.env.APP_SECRET)
}

module.exports = mongoose.model('User', User)
